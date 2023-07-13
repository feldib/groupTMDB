import React from 'react'
import { Button, Form, InputGroup, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faQuestion } from "@fortawesome/free-solid-svg-icons"

const RegisterPage2 = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <h1 className="mb-4">Come Register!</h1>
          <Form>
            <Form.Group controlId="formLanguage">
              <Form.Label>Favourite Language (Optional):</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text><FontAwesomeIcon icon={faLanguage} /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Enter Language" />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formGenre">
              <Form.Label>Favourite Genre (Optional):</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text><FontAwesomeIcon icon={faQuestion} /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control as="select">
                  <option>Choose Genre...</option>
                  <option>Action</option>
                  <option>Adventure</option>
                  <option>Animation</option>
                  <option>Comedy</option>
                  <option>Crime</option>
                  <option>Documentary</option>
                  <option>Drama</option>
                  <option>Family</option>
                  <option>Fantasy</option>
                  <option>History</option>
                  <option>Horror</option>
                  <option>Music</option>
                  <option>Mystery</option>
                  <option>Romance</option>
                  <option>Science Fiction</option>
                  <option>Thriller</option>
                  <option>TV Movies</option>
                  <option>War</option>
                  <option>Western</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit" block>Next Page</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage2
