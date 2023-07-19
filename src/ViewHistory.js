import React, { useState, useEffect } from "react";
import { Row, Dropdown, Col, Button } from 'react-bootstrap'
import HistoryBox from './HistoryBox'

function ViewHistory() {

    const [movies, setMovies] = useState([]);
    const arrOfApi = []
    const data = JSON.parse(localStorage.getItem("data"));


    data.users.forEach(user => {
        if (user.viewedMovies.length > 0) {
            user.viewedMovies.forEach(movie => {
                if (!arrOfApi.includes(`https://api.themoviedb.org/3/movie${movie.url}?api_key=8d97210e6edd66eb9e967278325836d0`)) {
                    arrOfApi.push(`https://api.themoviedb.org/3/movie${movie.url}?api_key=8d97210e6edd66eb9e967278325836d0`)
                }
            })
        }
    })

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const responses = await Promise.all(arrOfApi.map(api => fetch(api).then(response => response.json())));
                setMovies(responses);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovies();
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

            <Row className='mt-5'>
                <Col>
                    <Button variant="danger" >
                        CLEAR HISTORY
                    </Button>
                </Col>

            </Row>

            {movies.length === 0 ? "no movies viewed" : movies.map((movie) => <HistoryBox theMovie={movie} />)}

        </Row>
    )
}

export default ViewHistory