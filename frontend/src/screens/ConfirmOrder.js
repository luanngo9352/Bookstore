import {useState,useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import CheckoutSteps from '../componets/CheckoutSteps';
import { Form } from "react-bootstrap";
import { savePaymentMethod } from '../slices/cartSlice';
const ConfirmOrder = () => {
    const [paymentMethod,setPaymentMethod] = useState('PayPal')
    const { cartItems, shippingAddress} = useSelector((state) => state.cart)
    const {userInfo} = useSelector((state) =>state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const totalItem = {

        total: cartItems.reduce((acc,item) =>acc + item.qty *item.bookPrice ,0) || 0,
        ship: ((cartItems.reduce((acc,item) =>acc + item.qty *item.bookPrice ,0))>300000 ? 150000 : 30000) || 0,
        totalcalc: 0,
      }
      totalItem.totalcalc = totalItem.total + totalItem.ship
      useEffect (() => {
        if(!shippingAddress){
            navigate('/shipping')
        }
      }, [shippingAddress,navigate]);

      const processToPayment = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/payment')
    }
  return (
    <>
        <CheckoutSteps shipping confirmOrder />
        <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8 mt-5 order-confirm">

                    <h4 className="mb-3">Shipping Info</h4>
                    <p><b>Name: </b> {userInfo.name}</p>
                    <p><b>Phone:</b> {shippingAddress.phone}</p>
                    <p className="mb-4"><b>Address:</b>{`${shippingAddress.city}, ${shippingAddress.district}, ${shippingAddress.wards}, ${shippingAddress.address}`} </p>
                    <Form onSubmit={processToPayment}>
                    <b>Phuong thuc thanh toan:</b> <Form.Check type='radio' label = 'PayPal or Creadit Card' id='PayPal' name='paymentMethod' value='PayPal' checked
                    onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
                    </Form>
                    <hr />

                    <h4 className="mt-4">Your Cart Items:</h4>

                    {cartItems.map(item => (
                       <>
                            <hr />
                            <div className="cart-item my-1" key={item._id}>
                                <div className="row">
                                    <div className="col-4 col-lg-2">
                                        <img src={item.bookImage} alt="Laptop" height="45" width="65" />
                                    </div>

                                    <div className="col-5 col-lg-6">
                                        <Link to={`/product/${item._id}`}>{item.bookName}</Link>
                                    </div>


                                    <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                                        <p>{item.qty} x ${item.bookPrice} = <b>{totalItem.total}</b></p>
                                    </div>

                                </div>
                            </div>
                            <hr />
                            </>
                    ))}



                </div>

                <div className="col-12 col-lg-3 my-4">
                              <div id="order_summary">
                                  <h4>Chi tiết đơn hàng</h4>
                                  <hr />
                                  <div className="row">
                                    <div className="col-8">
                                  <p>Thành tiền:  
                                  </p>
                                  </div>
                                  <div className="col-4">
                                  <span>{ totalItem.total } </span>
                                  </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-8">
                                  <p>Phí vận chuyển:  
                                  </p>
                                  </div>
                                  <div className="col-4">
                                  <span>{ totalItem.ship } </span>
                                  </div>
                                  </div>
                                  <div className="row" style={{ fontWeight: '650'}}>
                                    <div className="col-8">
                                  <p>Tổng số tiền:  
                                  </p>
                                  </div>
                                  <div className="col-4" style={{ fontSize: '20px', color: 'red' }}>
                                  <span>{ totalItem.totalcalc } </span>
                                  </div>
                                  </div>
                                  <hr />
                                  <div className="d-flex justify-content-center ">
                                  <button type="submit" onClick={processToPayment} className="btn btn-danger w-75" >THANH TOÁN</button>
                                  </div>
                              </div>
                        </div>


            </div>
    </>
  )
}

export default ConfirmOrder