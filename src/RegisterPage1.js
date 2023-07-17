import React, { useState, useEffect } from 'react'
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const RegisterPage1 = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }, [username, password]);

    return (
        <Row className="register-page-1">
            <h1 className='text-center'>Come Register!</h1>
            <Col className='mx-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </InputGroup>
                    </Form.Group>

                    <Row className='justify-content-center mt-3'>
                        <Col lg="2">
                            <Link to="/RegisterPage2">
                                <Button className='text-center mx-auto' variant="primary" type="submit">Next Page</Button>
                            </Link>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default RegisterPage1