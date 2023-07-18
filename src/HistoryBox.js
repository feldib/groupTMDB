import React from "react";
import {Row, Col, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function HistoryBox(props) {

    const movie = props.theMovie
    const imageURL = `https://image.tmdb.org/t/p/w500`

    return (
        <Row className='mt-5'>
            <Col>
                <Row classname="movieInfoLine">
                    <Col>
                        <img
                            src={imageURL + movie.poster_path}
                            width="150px"
                            height="150px"
                            className="border border-black"
                        />
                    </Col>

                    <Col>
                        <p>
                            {movie.overview}
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
    )
}

export default HistoryBox;