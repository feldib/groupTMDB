import React from 'react'
import { Button, Form } from 'react-bootstrap'

const RegisterPage1 = () => {
  return (
    <div className="register-page-1">
      <h1>Come Register!</h1>
      <Form>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" />
        </Form.Group>

        <Button variant="primary" type="submit">Next Page</Button>
      </Form>
    </div>
  )
}

export default RegisterPage1