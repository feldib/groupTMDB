import React, { useState, useEffect } from 'react'
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const RegisterPage3 = () => {
    const [galleryToShow, setGalleryToShow] = useState([]);
    const [languageForHearing, setLanguageForHearing] = useState("");

    useEffect(() => {
        localStorage.setItem('galleryToShow', JSON.stringify(galleryToShow));
        localStorage.setItem('languageForHearing', languageForHearing);
    }, [galleryToShow, languageForHearing]);

    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            setGalleryToShow([...galleryToShow, e.target.value]);
        } else {
            setGalleryToShow(galleryToShow.filter(item => item !== e.target.value));
        }
    }

    return (
        <Row className="register-page-3">
            <h1 className='text-center'>Come Register!</h1>
            <Col className='mx-5'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Choose your galleries:</Form.Label>
                        <Form.Check 
                            type="checkbox"
                            id="gallery1"
                            value="Most Popular"
                            checked={galleryToShow.includes("Most Popular")}
                            onChange={handleCheckboxChange}
                            label="Most Popular"
                        />
                        <Form.Check 
                            type="checkbox"
                            id="gallery2"
                            value="Top Rated"
                            checked={galleryToShow.includes("Top Rated")}
                            onChange={handleCheckboxChange}
                            label="Top Rated"
                        />
                        <Form.Check 
                            type="checkbox"
                            id="gallery3"
                            value="Upcoming"
                            checked={galleryToShow.includes("Upcoming")}
                            onChange={handleCheckboxChange}
                            label="Upcoming"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTTS">
                        <Form.Label>Text-to-Voice Language:</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faHeadphonesAlt} />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Enter Language" value={languageForHearing} onChange={(e) => setLanguageForHearing(e.target.value)} />
                        </InputGroup>
                    </Form.Group>

                    <Row className='justify-content-center mt-3'>
                        <Col lg="2">
                            <Link to="/ProfilePage">
                                <Button className='text-center mx-auto' variant="primary" type="submit">Register!</Button>
                            </Link>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default RegisterPage3