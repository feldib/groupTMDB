import React from 'react'
import { Button, Form, InputGroup, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const RegisterPage3 = () => {
    return (
        <Row className="register-page-3">
          <h1 className='text-center'>Come Register!</h1>
          <Col className='mx-5'>
            <Form>
              <Form.Group className="mb-3" controlId="formGallery">
                <Form.Label>Show Galleries:</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faFilm} />
                  </InputGroup.Text>
                  <InputGroup>
                    <Col>
                      <Form.Check 
                          type="checkbox"
                          id="gallery1"
                          label="Most Popular"
                      />
                      <Form.Check 
                          type="checkbox"
                          id="gallery2"
                          label="Top Rated"
                      />
                      <Form.Check 
                          type="checkbox"
                          id="gallery3"
                          label="Upcoming"
                      />
                    </Col>
                  </InputGroup>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTTS">
                <Form.Label>Text-to-Voice Language:</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faHeadphonesAlt} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Enter Language" />
                </InputGroup>
              </Form.Group>

              <Row className='justify-content-center mt-3'>
                <Col lg="2">
                    <Link to="/ProfilePage">
                        <Button className='text-center mx-auto' variant="primary" type="submit">Register!</Button>
                    </Link>
                </Col>
              </Row>
              
            </Form>
          </Col>
          
        </Row>
    )
}

export default RegisterPage3