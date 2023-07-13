import React from 'react'
import { Button, Form } from 'react-bootstrap'

const RegisterPage3 = () => {
  return (
    <div className="register-page-3">
      <h1>Come Register!</h1>
      <Form>
        <Form.Group>
          <Form.Label>Show Galleries (Optional):</Form.Label>
          <Form.Check type="checkbox" label="Most Popular" />
          <Form.Check type="checkbox" label="Top Rated" />
          <Form.Check type="checkbox" label="Upcoming" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Voice-to-text Language (Optional):</Form.Label>
          <Form.Control type="text" placeholder="Enter Language" />
        </Form.Group>

        <Button variant="primary" type="submit">Finish Registration</Button>
      </Form>
    </div>
  )
}

export default RegisterPage3