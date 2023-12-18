import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </li>

                    <li>
                        <Link href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Products</Link>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            {/* <li>
                                <Link to="/admin/products"> All</Link>
                            </li>

                            <li>
                                <Link to="/admin/product"> Create</Link>
                            </li> */}
                        </ul>
                    </li>

                    <li>
                        <Link to="/admin/orderlist"> Orders</Link>
                    </li>

                    <li>
                        <Link to="/admin/users"> Users</Link>
                    </li>

                    <li>
                        <Link to="/admin/reviews"> Reviews</Link>
                    </li>

                </ul>
            </nav>
        </div>
    </>
  )
}

export default Sidebar