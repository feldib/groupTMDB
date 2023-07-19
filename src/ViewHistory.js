import React, { useState, useEffect } from "react";
import { Row, Dropdown, Col, Button } from 'react-bootstrap'
import HistoryBox from './HistoryBox'
import genres from './genres'
import { sortingData, extraSortingData } from "./sortingOptions"
import options from "./options";

function ViewHistory() {

    const [movies, setMovies] = useState([])
    const data = JSON.parse(localStorage.getItem("data"))
    const [filteredMovies, setFilteredMovies] = useState([])

    const [viewedMovies, setViewedMovies] = React.useState(
        ...data.users.map(user=>user.viewedMovies)
    )

    const [currentFilter, setCurrentFilter] = React.useState("")
    const [currentSorting, setCurrentSorting] = React.useState("")

    useEffect(()=>{
        if(!currentFilter){
            setFilteredMovies(movies)
        }else{
            setFilteredMovies(
                movies.filter((movie)=>{
                    const includes = movie.genres.map(
                            (obj)=>obj.name
                        ).includes(currentFilter)
                    return includes
                })
            )
        }
    }, [currentFilter])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const responses = await Promise.all(
                    viewedMovies.map(viewedMovie => fetch(
                        `https://api.themoviedb.org/3/movie${viewedMovie.url}`, options
                    ).then(response => response.json()))
                );
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
                    <Dropdown
                        onSelect={(eventKey)=>{
                            setCurrentFilter(eventKey)
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
                            {
                                [
                                    "Rating (lowest to highest)",
                                    "Rating (higher to lowest)",
                                    "Date of viewing (newest to oldest)",
                                    "Date of viewing (oldest to newest)"
                                ].map((val)=>{
                                    return (
                                        <Dropdown.Item 
                                            href=""
                                            eventKey={val}
                                        >{val}</Dropdown.Item>
                                    )
                                })
                            }  
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

            <Row className='text-center mt-3'>
                <Col>
                    {currentFilter &&
                        <p>
                            <span 
                                style={{cursor: "pointer"}}
                                onClick={()=>{
                                    setCurrentFilter("")
                                }}
                            >❌</span>
                            {currentFilter}
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
            </Row>

            {currentSorting !== "" 
                ?
                    Array.from(
                        Object.keys(
                                sortingData
                            )
                        )
                    .includes(currentSorting) 
                        ?
                            sortingData[currentSorting](filteredMovies)
                                .map(
                                    (movie) => <HistoryBox theMovie={movie}/>
                                )
                        :
                            extraSortingData[currentSorting](filteredMovies, viewedMovies)
                            .map(
                                (movie) => <HistoryBox theMovie={movie}/>
                            )
                :
                    filteredMovies
                        .map(
                            (movie) => <HistoryBox theMovie={movie}/>
                        )
            }

        </Row>
    )
}

export default ViewHistory