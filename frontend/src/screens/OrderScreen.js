import {useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import Message from '../componets/Message'
import Loader from '../componets/Loader'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useGetOrderDetailsQuery,usePayOrderMutation,useGetPayPalClientIdQuery} from '../slices/ordersSlice'
const OrderScreen = () => {
    const {id: orderId} = useParams()
    const { data: order,refetch ,isLoading, error} = useGetOrderDetailsQuery(orderId)

     const {
      data: paypal,
      isLoading: loadingPayPal,
      error: errorPayPal,
    } = useGetPayPalClientIdQuery();
    
    const [ payOrder, {isLoading: loadingPay}] = usePayOrderMutation()
    const { userInfo } = useSelector((state) => state.auth);

    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  
    useEffect(() => {
      if (!errorPayPal && !loadingPayPal && paypal.clientId) {
        const loadPaypalScript = async () => {
          paypalDispatch({
            type: 'resetOptions',
            value: {
              'client-id': paypal.clientId,
              currency: 'VND',
            },
          });
          paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
        };
        if (order && !order.isPaid) {
          if (!window.paypal) {
            loadPaypalScript();
          }
        }
      }
    }, [order, paypal, paypalDispatch, loadingPayPal, errorPayPal]);
    function onApprove(data, actions){
      return actions.order.capture().then(async function(details){
        try{
            await payOrder({orderId,details});
            refetch();
            toast.success('Thanh toán thành công')
        }catch (err){
            toast.error('Thanh toán thất bại')
        }
      })
    }
  
    function onError(){
      toast.error('Thanh toán thất bại')
    }
    function createOrder(data, actions) {
      return actions.order
        .create({
          purchase_units: [
            {
              amount: { value: order.totalPrice },
            },
          ],
        })
        .then((orderID) => {
          return orderID;
        });
    }

    return isLoading ? (
      <Loader />
  
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>THÔNG TIN</h2>
              <p>
                <strong>Mã đơn hàng: </strong>{order._id}
              </p>
              <p>
                <strong>Tên: </strong>{order.user.name}
              </p>
              <p>
                <strong>Số điện thoại: </strong>{order.shippingAddress.phone}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Địa chỉ: </strong>
                {order.shippingAddress.city}, {order.shippingAddress.district}, {order.shippingAddress.wards}, {order.shippingAddress.address} 
              </p>
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>PHƯƠNG THỨC THANH TOÁN</h2>
              <p>
                <strong>Phương thức: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.bookImage}
                            alt={item.bookName}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.bookName}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.bookPrice} = ${item.qty * item.bookPrice}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
          <ListGroup variant='flush'>
          <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}

                  {isPending ? (
                    <Loader />
                  ) : (
                    <div>
                      <div>
                        <PayPalButtons
                          createOrder={createOrder}
                          onApprove={onApprove}
                          onError={onError}
                        ></PayPalButtons>
                      </div>
                    </div>
                  )}
                </ListGroup.Item>
              )}
          </ListGroup>
          </Card>
        </Col>
      </Row>
      </>
    )
}

export default OrderScreen