import React, { useState, useEffect } from "react";
import {Row, Col, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function HistoryBox(props) {

    const [movies, setMovies] = useState('');
    const urlArray = props.urlArray;
    const arrOfApi = []


    // useEffect(() => {
    //     fetching2(movieURL, setMovies)
    // }, []);

    return (
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

                    {urlArray.map((url) => arrOfApi.push(`https://api.themoviedb.org/3/movie${url}?api_key=8d97210e6edd66eb9e967278325836d0`))}
                    {console.log(urlArray)}
                    {console.log(arrOfApi)}


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