import {Navbar,Nav,Container} from 'react-bootstrap';
import {BsCart,BsFillPersonFill,BsFillHeartFill,BsSearch} from 'react-icons/bs';
const Header = () => {
  return (
    <header>
        <Navbar bg = "dark" variant='dark' expand= "lg" collapseOnSelect>
            <Container className='justify-content-center align-items-center gap-3'>
                <Navbar.Brand href='/'>
                    Book Store Future
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                        <div className="input-group input-group-sm px-3" style={{maxWidth: "400px"}}>
                            <input type="text" class="form-control py-2" placeholder="Nhập tên sách" aria-label="Nhâp tên sách" aria-describedby="basic-addon2"/>
                            <span className="input-group-text " id="basic-addon2"><BsSearch size={15}/></span>
                        </div>
                    <Nav className="ms-auto">
                        <Nav.Link title='Yêu thích' href= '/favorite'><BsFillHeartFill size={30}/></Nav.Link>
                        <Nav.Link title='Giỏ hàng' href='/cart'><BsCart size={30}/></Nav.Link>
                        <Nav.Link title='Tài khoản' href='/login'><BsFillPersonFill size={30}/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header