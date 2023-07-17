import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'

function ProfilePage() {
    const [chosenSubpage, setChosenSubpage] = React.useState("")
    return (
        <Container>
            <Row className='text-center mt-5'>
                <Col>
                    <Link 
                        to="/ProfilePage/Details" 
                        style={{
                            color: "inherit", 
                            textDecoration: "none",
                        }}
                        onClick={()=>{
                            setChosenSubpage("Details")
                        }}
                    >
                        <h4 
                            className={
                                'display-5 ' +
                                (chosenSubpage === "Details" ? "font-weight-bold" : "font-weight-normal")
                            }
                        >
                            View Details
                        </h4>
                    </Link>
                </Col>

                <Col>
                    <Link 
                        to="/ProfilePage/ViewHistory" 
                        style={{
                            color: "inherit", 
                            textDecoration: "none"
                        }}
                        onClick={()=>{
                            setChosenSubpage("History")
                        }}
                    >
                        <h4 
                            className={
                                'display-5 ' +
                                (chosenSubpage === "History" ? "font-weight-bold" : "font-weight-normal")
                            }
                        >
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