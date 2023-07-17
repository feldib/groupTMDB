import React from 'react'
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons"

const RegisterPage1 = () => {
    return (
        <Row className="register-page-1">
          <h1 className='text-center'>Come Register!</h1>
          <Col className='mx-5'>
            <Form>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faUser} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Enter username" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faKey} />
                  </InputGroup.Text>
                  <Form.Control type="password" placeholder="Enter password" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faKey} />
                  </InputGroup.Text>
                  <Form.Control type="password" placeholder="Enter password" />
                </InputGroup>
              </Form.Group>

              <Row className='justify-content-center mt-3'>
                <Col lg="2">
                  <Button className='text-center mx-auto' variant="primary" type="submit">Next Page</Button>
                </Col>
              </Row>
              
            </Form>
          </Col>
          
        </Row>
    )
}

export default RegisterPage1