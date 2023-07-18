import React, { useState, useEffect } from "react";
import {Row, Dropdown, Col, Button} from 'react-bootstrap'
import HistoryBox from './HistoryBox'


function ViewHistory(props) {
    const [movies, setMovies] = useState([]);
    const urlArray = props.urlArray;
    const arrOfApi = []


    useEffect(() => {
        arrOfApi.map((api) => {
            fetch(api)
            .then(response => response.json())
            .then(response => setMovies([...movies, response]))
            .catch(err => console.error(err));
        }) 
    }, []);
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

           {urlArray.map((url) => arrOfApi.push(`https://api.themoviedb.org/3/movie${url}?api_key=8d97210e6edd66eb9e967278325836d0`))}
                    {console.log(urlArray)}
                    {console.log(arrOfApi)}
                    {console.log(movies)}

           <Row className='mt-5'>
                <Col>
                    <Button variant="danger">
                        CLEAR HISTORY
                    </Button>
                </Col>

           </Row>

           {movies.length === 0 ? "no movies viewed" : movies.map((movie) => <HistoryBox theMovie={movie}/>) }
                
        </Row>
    )
}

export default ViewHistory