import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../componets/FormContainer'

const LoginScreen = () => {
    
  return (
    <FormContainer>
        <h1>Đăng nhập</h1>
        <Form onSubmit>
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
            <Button type='submit' variant='primary' className='my-3'>Đăng nhập</Button>
        </Form>
        <Row className='py-3'>
            <Col>
            khach hang moi?<Link to= '/register'>Đăng kí</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginScreen  