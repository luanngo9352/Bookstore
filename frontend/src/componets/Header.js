import {Navbar,Nav,Container} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap'
import {BsCart,BsFillPersonFill,BsFillHeartFill,BsSearch} from 'react-icons/bs';
const Header = () => {
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
                        <Nav.Link title='Yêu thích'><BsFillHeartFill size={30}/>Yêu thích
                        </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to ='/cart'>
                        <Nav.Link title='Giỏ hàng'><BsCart size={30}/>Giỏ hàng
                        </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to ='/login'>
                        <Nav.Link title='Tài khoản'><BsFillPersonFill size={30}/>Tài khoản
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