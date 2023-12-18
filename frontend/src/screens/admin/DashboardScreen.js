import React, { useMemo } from "react";
import Sidebar from "./Sidebar";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { useGetOrderQuery } from "../../slices/ordersSlice";
import Message from "../../componets/Message";
import Loader from "../../componets/Loader";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../slices/usersApiSlice";
// import {  useDispatch,useSelector } from 'react-redux'
const DashboardScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const { data: orders } = useGetOrderQuery();
  const { data: users } = useGetUsersQuery();

  const outOfStock = useMemo(() => {
    if (!products) return 0;

    let acc = 0;
    products.products.map((product) => {
      if (product.bookQuaranty === 0) {
        acc += 1;
      }
    });
    return acc;
  }, [products]);

  const totalAmount = useMemo(() => {
    if (!orders) return 0;

    let acc = 0;
    orders.map((order) => {
      if (order.isPaid) {
        acc += order.totalPrice;
      }
    });

    return acc;
  }, [orders]);

  return (
    <>
      <div className="row">
        <div className=" col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">
              {error?.data?.message || error.error}
            </Message>
          ) : (
            <div className="row">
              <div className="row pr-4">
                <div className="col-xl-12 col-sm-12 mb-3">
                  <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="text-center card-font-size">
                        Total Amount
                        <br /> <b>{totalAmount} VND</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Products
                      <br /> <b>{products && products.products.length}</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer text-white clearfix small z-1"
                    to="/admin/products"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-xl-3  mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Orders
                      <br /> <b>{orders && orders.length}</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer text-white clearfix small z-1"
                    to="/admin/orders"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 mb-3">
                <div className="card text-white bg-info o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Users
                      <br /> <b>{users && users.length}</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer text-white clearfix small z-1"
                    to="/admin/users"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3  mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Out of Stock
                      <br /> <b>{outOfStock}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
