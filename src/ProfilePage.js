import React from 'react'
import {Container, Row, Col, Display} from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'
import ViewHistory from './ViewHistory'
import Details from './Details'
// import { } from "@fortawesome/free-solid-svg-icons";

function ProfilePage() {
    return (
        <Container>
            <Row className='text-center mt-5'>
                <Col>
                    <Link to="/ProfilePage/Details">
                        <h4 className='display-5'>
                            Details
                        </h4>
                    </Link>
                </Col>

                <Col>
                    <Link to="/ProfilePage/ViewHistory">
                        <h4 className='display-5'>
                            View History
                        </h4>
                    </Link>
                </Col>
            </Row>

            {/* place of <Details /> or <ViewHistory.js /> */}

            <Outlet />
        </Container>
    )
}

export default ProfilePage