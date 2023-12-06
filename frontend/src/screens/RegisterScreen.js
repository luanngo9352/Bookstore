import React from 'react'
import { Link } from 'react-router-dom'
import FormContainer from '../componets/FormContainer'
const RegisterScreen = () => {
    
  return (
    // <FormContainer>
    //     <h1>Đăng kí</h1>
    //     <Form onSubmit>
    //         <Form.Group controlId='Name' className='my-3'> 
    //                 <Form.Label>email address</Form.Label>
    //                 <Form.Control 
    //                 type='Name'
    //                 placeholder='Enter name'
    //                 value
    //                 onChange>
    //                 </Form.Control>
    //             </Form.Group>
    //         <Form.Group controlId='email' className='my-3'> 
    //             <Form.Label>email address</Form.Label>
    //             <Form.Control 
    //             type='email'
    //             placeholder='Enter email'
    //             value
    //             onChange>
    //             </Form.Control>
    //         </Form.Group>

    //         <Form.Group controlId='password' className='my-3'> 
    //             <Form.Label>password</Form.Label>
    //             <Form.Control 
    //             type='password'
    //             placeholder='Enter password'
    //             value
    //             onChange>
    //             </Form.Control>
    //         </Form.Group>
    //         <Form.Group controlId=' confirmPassword' className='my-3'> 
    //             <Form.Label> confirm password</Form.Label>
    //             <Form.Control 
    //             type='password'
    //             placeholder='confirm password'
    //             value
    //             onChange>
    //             </Form.Control>
    //         </Form.Group>
    //         <Button type='submit' variant='primary' className='my-3'>Đăng nhập</Button>
    //     </Form>
    //     <Row className='py-3'>
    //         <Col>
    //         Bạn đã có tài khoản?<Link to= '/login'>Đăng nhập</Link>
    //         </Col>
    //     </Row>
    // </FormContainer>
    <>
        <section>
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-12">
                <div class="card text-black" style={{borderRadius: '25px'}}>
                <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                    <div class="col-md-4">

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form class="px-md-4">

                        <div class="d-flex flex-row align-items-center mb-4">
                           
                            <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" class="form-control"  placeholder="Tên tài khoản" />
                            
                            </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                        
                            <div class="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" class="form-control" placeholder="Địa chỉ email" />
                            </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                           
                            <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" class="form-control" placeholder="Mật khẩu" />
                            
                            </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                           
                            <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" class="form-control"   placeholder="Nhập lại mật khẩu"/>
                            
                            </div>
                        </div>

                        {/* <div class="form-check d-flex justify-content-center mb-5">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label class="form-check-label" for="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                        </div> */}

                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-primary btn-lg">Register</button>
                        </div>
                        </form>

                    </div>
                    <div className='col-md-3'></div>
                    <div class="col-md-5  d-flex align-items-center">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid" alt="Sample image" />

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default RegisterScreen  