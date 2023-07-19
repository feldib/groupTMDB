import React from "react";
import {Row, Col, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function HistoryBox(props) {

    const movie = props.theMovie
    const imageURL = `https://image.tmdb.org/t/p/w500`
    let theCurrentDate = ''
    const data = JSON.parse(localStorage.getItem("data"));

    data.users.forEach(user => {
        if (user.loggedin) {
            user.viewedMovies.forEach(movies => {
                if (movies.url === `/${movie.id}`) {
                    theCurrentDate = movies.currentDate
                }
            })
        }
    })
    
    return (
    
        <Row className='mt-5'>
            <Col>
                <Row classname="movieInfoLine">
                    <Col>
                        <img
                            src={imageURL + movie.poster_path}
                            width="150px"
                            height="220px"
                        />
                    </Col>

                    <Col>
                        <p>
                            {movie.overview}
                        </p>
                        <p><strong>
                          First visited on: {theCurrentDate}
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
    )
}

export default HistoryBox;