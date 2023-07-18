import React from 'react'
import { Button, Row, Col, Form, InputGroup, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import MovieGalleryBig from './MovieGalleryBig';
import { fetching } from "./Fetching";
import Loader from './Loader';
import SearchFetching from './SearchFetching';
import FilterFetching from './FilterFetching';
import sortingOptions from './sortingOptions'
import genres from './genres'

function Search() {
    const upcomingUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=8d97210e6edd66eb9e967278325836d0"

    const [movies, setMovies] = React.useState([])
    const [currentQueryOrFilter, setCurrentQueryOrFilter] = React.useState()
    const [currentSorting, setCurrentSorting] = React.useState("")

    React.useEffect(() => {
        if(!currentQueryOrFilter){
            fetching(upcomingUrl, setMovies)
        }
    }, [currentQueryOrFilter])

    const searchElement = React.useRef()

    const processQueryOrFilter = async(what, value)=>{
        setCurrentQueryOrFilter(value)
        if(what === "query"){
            await SearchFetching(setMovies, value)
        }else{
            await FilterFetching(setMovies, value)
        }
    }

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
                        
                        <Form.Control 
                            type="text" 
                            placeholder="Search for a movie"
                            ref={searchElement}
                        />
                        <Button
                            onClick={()=>{
                                processQueryOrFilter("query", searchElement.current.value)
                                setCurrentQueryOrFilter(searchElement.current.value)
                            }}
                        >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button> 
                    </InputGroup>  
                </Col>
            </Row>
                
            <Row className='text-center mt-3'>
                <Col>
                    {currentQueryOrFilter &&
                        <p>
                            <span 
                                style={{cursor: "pointer"}}
                                onClick={()=>{
                                    setCurrentQueryOrFilter("")
                                }}
                            >❌</span>
                            {currentQueryOrFilter}
                        </p>
                    }
                </Col>
                <Col>
                    {currentSorting &&
                        <p>
                            <span 
                                style={{cursor: "pointer"}}
                                onClick={()=>{
                                    setCurrentSorting("")
                                }}
                            >❌</span>
                            {currentSorting}
                        </p>
                    }
                </Col>
                    
                <Col>
                    <Dropdown
                        onSelect={(eventKey)=>{
                            processQueryOrFilter("filter", eventKey)
                        }}
                    >
                        <Dropdown.Toggle>Filter</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {genres.map((val)=>{
                                return (
                                    <Dropdown.Item 
                                        href=""
                                        eventKey={val}
                                    >{val}</Dropdown.Item>
                                )
                            })}  
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                    
                <Col>
                    <Dropdown
                        onSelect={(eventKey)=>{
                            setCurrentSorting(eventKey)
                        }}
                    >
                        <Dropdown.Toggle>Sort:</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {sortingOptions.map((val)=>{
                                return (
                                    <Dropdown.Item 
                                        href=""
                                        eventKey={val}
                                    >{val}</Dropdown.Item>
                                )
                            })}  
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>

            <Row>
                <Col>
                    {movies.length === 0 
                        ? <Loader/> 
                        : <MovieGalleryBig movies={movies} sorting={currentSorting}/>
                    }
                </Col>
            </Row>
        </Row>
    )
}

export default Search