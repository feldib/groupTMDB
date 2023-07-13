import React from 'react'
import {Row, Dropdown, Col, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function ViewHistory() {
    return (
        <Row className='mt-5'>
           <Row>
                <h1>
                    THE MOVIES VIEWED
                </h1>
           </Row>
           <Row className='mt-5'>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle>Filter</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="">Choose Genre...</Dropdown.Item>
                            <Dropdown.Item href="">Choose Genre...</Dropdown.Item>
                            <Dropdown.Item href="">Choose Genre...</Dropdown.Item>
                            <Dropdown.Item href="">Choose Genre...</Dropdown.Item>
                            <Dropdown.Item href="">Choose Genre...</Dropdown.Item>
                            <Dropdown.Item href="">Choose Genre...</Dropdown.Item>
                            <Dropdown.Item href="">Choose Genre...</Dropdown.Item>
                            <Dropdown.Item href="">Choose Genre...</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                <Col>
                    <Dropdown>
                            <Dropdown.Toggle>Sort:</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="">Rating</Dropdown.Item>
                                <Dropdown.Item href="">Viewed date</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                </Col>
           </Row>

           <Row className='mt-5'>
                <Col>
                    <Button variant="danger">
                        CLEAR HISTORY
                    </Button>
                </Col>
           </Row>
           
           <Row className='mt-5'>
                <Col>
                    <Row classname="movieInfoLine">
                        <Col>
                            <img 
                                src="https://png.pngtree.com/png-vector/20190816/ourmid/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg" 
                                width="150px"
                                height="150px"
                                className="border border-black"
                            />
                        </Col>

                        <Col>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            </p>
                            <p><strong>
                                Viewed on 23.01.2021
                            </strong></p>
                        </Col>

                        <Col>
                            <Button variant="danger">
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </Col>
                    </Row>
                    
                    <Row classname="movieInfoLine">
                        <Col>
                            <img 
                                src="https://png.pngtree.com/png-vector/20190816/ourmid/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg" 
                                width="150px"
                                height="150px"
                                className="border border-black"
                            />
                        </Col>

                        <Col>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            </p>
                            <p><strong>
                                Viewed on 23.01.2021
                            </strong></p>
                        </Col>

                        <Col>
                            <Button variant="danger">
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </Col>
                    </Row>
                </Col>
           </Row>
        </Row>
    )
}

export default ViewHistory