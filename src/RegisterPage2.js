import React from 'react'
import { Button, Form } from 'react-bootstrap'

const RegisterPage2 = () => {
  return (
    <div className="register-page-2">
      <h1>Come Register!</h1>
      <Form>
        <Form.Group>
          <Form.Label>Favourite Language (Optional):</Form.Label>
          <Form.Control type="text" placeholder="Enter Language" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Favourite Genre (Optional):</Form.Label>
          <Form.Control as="select">
            <option>Choose Genre...</option>
            <option>Choose Genre...</option>
            <option>Choose Genre...</option>
            <option>Choose Genre...</option>
            <option>Choose Genre...</option>
            <option>Choose Genre...</option>
            <option>Choose Genre...</option>
            <option>Choose Genre...</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">Next Page</Button>
      </Form>
    </div>
  )
}

export default RegisterPage2