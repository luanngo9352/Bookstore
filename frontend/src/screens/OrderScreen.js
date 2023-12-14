import React from 'react'
import { Link,useParams } from 'react-router-dom'
import Message from '../componets/Message'
import Loader from '../componets/Loader'
import { useGetOrderDetailsQuery } from '../slices/ordersSlice'
const OrderScreen = () => {
    const {id: orderId} = useParams()
    const { data: order,refetch ,isLoading, isError} = useGetOrderDetailsQuery(orderId)
    console.log(order)
  return (
    <div>OrderScreen</div>
  )
}

export default OrderScreen