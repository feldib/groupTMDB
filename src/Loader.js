import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

function Loader() {
    return (
        <Container className="text-center mt-3">
            <h1 >Loading...
                <Spinner animation="border" variant="info" role="status" />
            </h1>
        </Container>
    );
}

export default Loader;