import { useNavigate } from 'react-router-dom';
import {Badge,Navbar,Nav,Container, NavDropdown} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap'
import {BsCart,BsFillPersonFill,BsFillHeartFill,BsSearch} from 'react-icons/bs';
import { useLogoutMutation } from '../slices/usersApiSlice';
import {logout} from '../slices/authSlice';
import { useSelector, useDispatch} from 'react-redux'; 
const Header = () => {
    const { cartItems} = useSelector((state) => state.cart );
   const { userInfo} = useSelector ((state) => state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [logoutApiCall]= useLogoutMutation();
   const logoutHandler = async () =>{
    try {
        await logoutApiCall().unwrap()
        dispatch(logout())
        navigate('/login')
    } catch (err){
        console.log(err)
    
   }
}
  return (
    <header>
        <Navbar bg = "dark" variant='dark' expand= "lg" collapseOnSelect>
            <Container className='justify-content-center align-items-center gap-3'>
                <LinkContainer to = '/'>
                <Navbar.Brand>
                    Book Store Future
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                        <div className="input-group input-group-sm px-3" style={{maxWidth: "400px"}}>
                            <input type="text" className="form-control py-2" placeholder="Nhập tên sách" aria-label="Nhâp tên sách" aria-describedby="basic-addon2"/>
                            <span className="input-group-sreach " id="basic-addon2"><BsSearch size={15}/></span>
                        </div>
                    <Nav className="ms-auto">
                        <LinkContainer to = '/favorite'>
                        <Nav.Link title='Yêu thích'><BsFillHeartFill size={20}/>
                        </Nav.Link>
                        </LinkContainer>
                        <div className='container cart' style={{ position: "relative"}}>
                        <LinkContainer to ='/cart'>
                        <Nav.Link title='Giỏ hàng'>       
                           {
                             cartItems.length > 0 && (
                                <Badge pill bg ='success'  style={{ position: 'absolute',top: '-4px', left: '30px',zIndex: '11'}}>
                                {cartItems.reduce((a,c) =>a +c.qty , 0) }
                                </Badge>
                                ) 
                             }
                            <BsCart  size={20} style={{ zIndex: '10'}}/>
                        </Nav.Link>
                        </LinkContainer>
                        </div>
                        {userInfo ? (
                            <NavDropdown title = {userInfo.name} id = 'username'>
                                <LinkContainer to = '/profile'>
                                <NavDropdown.Item>Thông tin cá nhân</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to = '/listorder'>
                                <NavDropdown.Item>Thông tin đơn hàng</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Đăng xuất
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (<LinkContainer to ='/login'>
                        <Nav.Link title='Tài khoản'><BsFillPersonFill size={20}/>
                        </Nav.Link>
                        </LinkContainer>)
                        }
                                        {/* Admin Links */}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                <LinkContainer to='/admin/dashboard'>
                                    <NavDropdown.Item>Dasbord</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/orderlist'>
                                    <NavDropdown.Item>Orders</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/userlist'>
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>
                                </NavDropdown>
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header