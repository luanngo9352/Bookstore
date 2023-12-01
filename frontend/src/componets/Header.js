import {Badge,Navbar,Nav,Container} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap'
import {BsCart,BsFillPersonFill,BsFillHeartFill,BsSearch} from 'react-icons/bs';
import { useSelector } from 'react-redux'; 
const Header = () => {
    const { cartItems} = useSelector((state) => state.cart )
   
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
                            <input type="text" class="form-control py-2" placeholder="Nhập tên sách" aria-label="Nhâp tên sách" aria-describedby="basic-addon2"/>
                            <span className="input-group-text " id="basic-addon2"><BsSearch size={15}/></span>
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
                        <LinkContainer to ='/login'>
                        <Nav.Link title='Tài khoản'><BsFillPersonFill size={20}/>
                        </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header