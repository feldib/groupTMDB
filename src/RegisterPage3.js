import React from 'react'
import { Button, Form, InputGroup, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons"

const RegisterPage3 = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <h1 className="mb-4">Come Register!</h1>
          <Form>
            <Form.Group controlId="formGalleries">
              <Form.Label>Show Galleries (Optional):</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text><FontAwesomeIcon icon={faQuestion} /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Check type="checkbox" label="Most Popular" />
                <Form.Check type="checkbox" label="Top Rated" />
                <Form.Check type="checkbox" label="Upcoming" />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formVoiceTextLanguage">
              <Form.Label>Voice-to-text Language (Optional):</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text><FontAwesomeIcon icon={faHeadphonesAlt} /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Enter Language" />
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit" block>Finish Registration</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage3