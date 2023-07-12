import React from 'react'
import {Container, Row, Col, Display} from 'react-bootstrap'
import ViewHistory from './ViewHistory'
import Details from './Details'
// import { } from "@fortawesome/free-solid-svg-icons";

function ProfilePage() {
    return (
        <Container>
            <Row className='text-center mt-5'>
                <Col>
                    <h4 className='display-5'>
                        Details
                    </h4>
                </Col>

                <Col>
                    <h4 className='display-5'>
                        View History
                    </h4>
                </Col>
            </Row>

            {/* place of <Details /> or <ViewHistory.js /> */}

            <Details />
        </Container>
    )
}

export default ProfilePage