import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import Loader from '../../componets/Loader';
import Message from '../../componets/Message';
import { useGetOrderQuery } from '../../slices/ordersSlice'
import Sidebar from './Sidebar';

const ListOrderAdminScreen = () => {
    const { data: orders, isLoading, error } = useGetOrderQuery();
    console.log(orders)
  return (
   <>  
   <div className="row">
   <div className=" col-md-2">
       <Sidebar />
   </div>
   {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className='col-md-10'>
          <h1 className="mb-4 d-flex justify-content-center">THÔNG TIN ĐƠN HÀNG</h1>
          <hr />
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tài khoản</th>
              <th>Tổng tiền</th>
              <th>Trạng thái thanh toán</th>
              <th>Trạng thái vận chuyển</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.totalPrice}VND</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Chi tiết
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
      )}
      </div>
   </>
  )
}

export default ListOrderAdminScreen