import React from 'react'
import { Button, Form, InputGroup, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons"

const RegisterPage1 = () => {
    const history = useHistory()

    const nextPage = () => {
        history.push('/register/2')
    }
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4}>
                    <h1 className="mb-4">Come Register!</h1>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username:</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" placeholder="Enter username" />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password:</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="password" placeholder="Enter password" />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password:</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="password" placeholder="Confirm password" />
                            </InputGroup>
                        </Form.Group>

                        <Button variant="primary" type="submit" block>Next Page</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage1
