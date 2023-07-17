import React from 'react'
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faFilm } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const RegisterPage2 = () => {
    return (
        <Row className="register-page-2">
            <h1 className='text-center'>Come Register!</h1>
            <Col className='mx-5'>
                <Form>

                    <Form.Group className="mb-3" controlId="formLanguage">
                        <Form.Label>Language:</Form.Label>
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faLanguage} /></InputGroup.Text>
                            <Form.Control type="text" placeholder="Enter Language" />
                        </InputGroup>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formGenre">
                        <Form.Label>Favourite Genre:</Form.Label>
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faFilm} /></InputGroup.Text>
                            <Form.Control as="select" defaultValue="">
                                <option value="" disabled>Select Genre...</option>
                                <option value="genre1">Action</option>
                                <option value="genre2">Adventure</option>
                                <option value="genre3">Animation</option>
                                <option value="genre4">Comedy</option>
                                <option value="genre5">Crime</option>
                                <option value="genre6">Documentary</option>
                                <option value="genre7">Drama</option>
                                <option value="genre8">Family</option>
                                <option value="genre9">Fantasy</option>
                                <option value="genre10">History</option>
                                <option value="genre11">Horror</option>
                                <option value="genre12">Music</option>
                                <option value="genre13">Mystery</option>
                                <option value="genre14">Romance</option>
                                <option value="genre15">Science Fiction</option>
                                <option value="genre16">Thriller</option>
                                <option value="genre17">TV Movie</option>
                                <option value="genre18">War</option>
                                <option value="genre19">Western</option>
                            </Form.Control>
                        </InputGroup>
                    </Form.Group>

                    <Row className='justify-content-center mt-3'>
                        <Col lg="2">
                            <Link to="/RegisterPage3">
                                <Button className='text-center mx-auto' variant="primary" type="submit">Next Page</Button>
                            </Link>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default RegisterPage2