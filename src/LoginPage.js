import React from 'react'
import { Button, Row, Col, Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons"

const LoginPage = () => {
  return (
    <Row className="login-page">
      <h1 className='text-center'>Login!</h1>
      <Col className='mx-5'>
        <Form>
          <Form.Label>Username:</Form.Label>

          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faUser} />
            </InputGroup.Text>

            <Form.Control type="text" placeholder="Enter username" />
          </InputGroup>

          <Form.Label>Password:</Form.Label>
          <InputGroup>
            <InputGroup.Text>
                            <FontAwesomeIcon icon={faKey} />
            </InputGroup.Text>

            <Form.Control type="password" placeholder="Enter password" />
          </InputGroup>

          <Row className='justify-content-center'>
            <Col lg="1">
              <Button className='text-center mx-auto' variant="primary" type="submit">Login!</Button>
            </Col>
          </Row>
          
        </Form>
      </Col>
      
    </Row>
  )
}

export default LoginPage