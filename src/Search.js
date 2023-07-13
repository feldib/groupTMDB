import React from 'react'
import { Button, Row, Col, Form, InputGroup, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import MovieGalleryBig from './MovieGalleryBig';
import { fetching } from "./Fetching";



function Search() {
    const moviesUrl1 = "https://api.themoviedb.org/3/movie/upcoming?api_key=8d97210e6edd66eb9e967278325836d0"

    const [movies1, setMovies1] = React.useState([]);

    React.useEffect(() => {
        fetching(moviesUrl1, setMovies1)
    }, [])

    return (
        <Row className="login-page">
            <Row>
                <Col>
                    <h1 className='text-center'>Login!</h1>
                </Col>
            </Row>

            <Row className='mt-3 mx-5'>
                <Col>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faFilm} />
                        </InputGroup.Text>
                        
                        <Form.Control type="text" placeholder="Search for a movie" />
                        <Button>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button> 
                    </InputGroup>  
                </Col>
            </Row>
                
            <Row className='mt-3'>
                <Col>
                    <p>❌Query</p>
                    <p>❌Query</p>
                </Col>
                    
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
                            <Dropdown.Item href="">Release date</Dropdown.Item>
                            <Dropdown.Item href="">Movie name</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>

            <Row>
                <Col>
                    <MovieGalleryBig movies={movies1}/>
                </Col>
            </Row>
        </Row>
    )
}

export default Search