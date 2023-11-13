import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../componets/FormContainer'

const RegisterScreen = () => {
    
  return (
    <FormContainer>
        <h1>Đăng kí</h1>
        <Form onSubmit>
            <Form.Group controlId='Name' className='my-3'> 
                    <Form.Label>email address</Form.Label>
                    <Form.Control 
                    type='Name'
                    placeholder='Enter name'
                    value
                    onChange>
                    </Form.Control>
                </Form.Group>
            <Form.Group controlId='email' className='my-3'> 
                <Form.Label>email address</Form.Label>
                <Form.Control 
                type='email'
                placeholder='Enter email'
                value
                onChange>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password' className='my-3'> 
                <Form.Label>password</Form.Label>
                <Form.Control 
                type='password'
                placeholder='Enter password'
                value
                onChange>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId=' confirmPassword' className='my-3'> 
                <Form.Label> confirm password</Form.Label>
                <Form.Control 
                type='password'
                placeholder='confirm password'
                value
                onChange>
                </Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary' className='my-3'>Đăng nhập</Button>
        </Form>
        <Row className='py-3'>
            <Col>
            Bạn đã có tài khoản?<Link to= '/login'>Đăng nhập</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default RegisterScreen  