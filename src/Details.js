import React, { useState, useEffect } from 'react'
import {Row, Form, InputGroup} from 'react-bootstrap'
import { faUser, faKey, faLanguage, faQuestion, faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons"
import DetailsFormComponent from './DetailsFormComponent'

function Details() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [languageForMovie, setLanguageForMovie] = useState(null);
    const [favouriteGenre, setFavouriteGenre] = useState(null);
    const [galleryToShow, setGalleryToShow] = useState(null);
    const [languageForHearing, setLanguageForHearing] = useState(null);

    useEffect(() => {
        setUsername(localStorage.getItem('username'));
        setPassword(localStorage.getItem('password'));
        setLanguageForMovie(localStorage.getItem('languageForMovie'));
        setFavouriteGenre(localStorage.getItem('favouriteGenre'));
        setGalleryToShow(JSON.parse(localStorage.getItem('galleryToShow')));
        setLanguageForHearing(localStorage.getItem('languageForHearing'));
    }, []);

    return (
        <Row>
            <Form>
                <DetailsFormComponent 
                    label = "Username"
                    icon = {faUser}
                    placeholder = {username || "[Username]"}
                    type = "text"
                />
                
                <DetailsFormComponent 
                    label = "Password"
                    icon = {faKey}
                    placeholder = {password || "[****]"} 
                    type = "password"
                />

                <DetailsFormComponent 
                    label = "Favourite Language"
                    icon = {faLanguage}
                    placeholder = {languageForMovie || "[Favourite language]"}
                    type = "text"
                />

                <DetailsFormComponent 
                    label = "Favourite Genre"
                    icon = {faQuestion}
                    placeholder = {favouriteGenre || "[Favourite genre]"}
                    type = "text"
                />

                <Form.Label>Choose Galleries</Form.Label>
                <InputGroup>
                    <Form.Check
                        inline
                        label="Most popular"
                        name="galleries"
                        type="switch"
                        id="mostPopular"
                        checked={galleryToShow && galleryToShow.includes("Most Popular")}
                    />
                    <Form.Check
                        inline
                        label="Top rated"
                        name="galleries"
                        type="switch"
                        id="topRated"
                        checked={galleryToShow && galleryToShow.includes("Top Rated")}
                    />
                    <Form.Check
                        inline
                        label="Upcoming"
                        name="galleries"
                        type="switch"
                        id="upcoming"
                        checked={galleryToShow && galleryToShow.includes("Upcoming")}
                    />            
                </InputGroup>

                <DetailsFormComponent 
                    label = "Voice-To-Text Language"
                    icon = {faHeadphonesSimple}
                    placeholder = {languageForHearing || "[Language]"} 
                    type = "text"
                />
            </Form>
        </Row>
    )
}

export default Details