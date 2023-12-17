import React from 'react'
import { useGetMyOrderQuery } from '../slices/ordersSlice'
import { Table,Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Message from '../componets/Message';
import Loader from '../componets/Loader';
import { FaTimes } from 'react-icons/fa';

const ListOrderScreen = () => {
    const {data: orders ,isLoading, error }= useGetMyOrderQuery();
    console.log(orders)
  return (
    <section>
    <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12">
            <div className="card text-black" style={{borderRadius: '25px'}}>
            <div className="card-body p-md-5">
                <div className="row justify-content-center">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">THÔNG TIN CÁ NHÂN</p>
                {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <Table striped hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>num</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.orderItems.length}</td>
                  <td>{order.totalPrice}</td>
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
                    <LinkContainer to
                    ={`/order/${order._id}`}>
                      <Button className='btn-sm' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
            </Table>
            )}
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default ListOrderScreen