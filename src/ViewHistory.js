import React, { useState, useEffect } from "react";
import { Row, Dropdown, Col, Button } from 'react-bootstrap'
import HistoryBox from './HistoryBox'
import genres from './genres'
import { sortingData, extraSortingData } from "./sortingOptions"
import options from "./options";

function ViewHistory() {

    const [movies, setMovies] = useState([]);
    const data = JSON.parse(localStorage.getItem("data"))

    const [viewedMovies, setViewedMovies] = React.useState(
        ...data.users.map(user=>user.viewedMovies)
    )

    const [currentFilter, setCurrentFilter] = React.useState("")
    const [currentSorting, setCurrentSorting] = React.useState("")

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
                    <Button variant="danger">
                        CLEAR HISTORY
                    </Button>
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
                            sortingData[currentSorting](movies)
                                .map(
                                    (movie) => <HistoryBox theMovie={movie}/>
                                )
                        :
                            extraSortingData[currentSorting](movies, viewedMovies)
                            .map(
                                (movie) => <HistoryBox theMovie={movie}/>
                            )
                :
                    movies
                        .map(
                            (movie) => <HistoryBox theMovie={movie}/>
                        )
            }

        </Row>
    )
}

export default ViewHistory