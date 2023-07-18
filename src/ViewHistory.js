import React from 'react'
import {Row, Dropdown, Col, Button} from 'react-bootstrap'
import HistoryBox from './HistoryBox'


function ViewHistory(props) {
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
                <HistoryBox urlArray={props.urlArray}/>
        </Row>
    )
}

export default ViewHistory