import React, { useState } from 'react';
import { Button, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import data from './user2';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const user = data.users.find((user) => user.username === username && user.password === password);

    if (user) {
      user.loggedin = true;
      localStorage.setItem('users', JSON.stringify(data.users));
      window.location.href = '/ProfilePage';
    } else {
      setError('User not found or Incorrect Password');
    }
  };

  return (
    <Row className="login-page">
      <h1 className="text-center">Login!</h1>
      <Col className="mx-5">
        <Form onSubmit={handleLogin}>
          <Form.Label>Username:</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faUser} />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </InputGroup>

          <Form.Label>Password:</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faKey} />
            </InputGroup.Text>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </InputGroup>

          <Row className="justify-content-center">
            <Col lg="1">
              <Button className="text-center mx-auto" variant="primary" type="submit">
                Login!
              </Button>
            </Col>
          </Row>

          {error && <p className="text-danger mt-3">{error}</p>}
        </Form>

        <p className="mt-3">
          Don't have an account? <Link to="/RegisterPage1">Register</Link>
        </p>
      </Col>
    </Row>
  );
};

export default LoginPage;