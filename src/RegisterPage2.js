import React, { useState, useEffect } from 'react'
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faFilm } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const RegisterPage2 = () => {
    const [languageForMovie, setLanguageForMovie] = useState("");
    const [favouriteGenre, setFavouriteGenre] = useState("");

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUserIndex = localStorage.getItem('currentUserIndex') || 0;
        let newUser = {...users[currentUserIndex], languageForMovie, favouriteGenre};
        users[currentUserIndex] = newUser;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUserIndex', currentUserIndex);
    }, [languageForMovie, favouriteGenre]);

    return (
        <Row className="register-page-2">
            <h1 className='text-center'>Come Register!</h1>
            <Col className='mx-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="formLanguage">
                        <Form.Label>Language:</Form.Label>
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faLanguage} /></InputGroup.Text>
                            <Form.Control type="text" placeholder="Enter Language" value={languageForMovie} onChange={(e) => setLanguageForMovie(e.target.value)} />
                        </InputGroup>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formGenre">
                        <Form.Label>Favourite Genre:</Form.Label>
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faFilm} /></InputGroup.Text>
                            <Form.Control as="select" value={favouriteGenre} onChange={(e) => setFavouriteGenre(e.target.value)}>
                            <option value="" disabled>Select Genre...</option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Animation">Animation</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Crime">Crime</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Drama">Drama</option>
                                <option value="Family">Family</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="History">History</option>
                                <option value="Horror">Horror</option>
                                <option value="Music">Music</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Romance">Romance</option>
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="Thriller">Thriller</option>
                                <option value="TV Movie">TV Movie</option>
                                <option value="War">War</option>
                                <option value="Western">Western</option>
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