import React, { useState, useEffect } from 'react'
import { Row, Form, InputGroup } from 'react-bootstrap'
import { faUser, faKey, faLanguage, faQuestion, faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons"
import DetailsFormComponent from './DetailsFormComponent'
import data from './user2'

function Details() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [languageForMovie, setLanguageForMovie] = useState("")
    const [favouriteGenre, setFavouriteGenre] = useState("")
    const [galleryToShow, setGalleryToShow] = useState([])
    const [languageForHearing, setLanguageForHearing] = useState("")
    const [currentUserIndex, setCurrentUserIndex] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users')) || data.users
        const currentUserIndex = parseInt(localStorage.getItem('currentUserIndex')) || 0
        setCurrentUserIndex(currentUserIndex) // Set the current user index state
        const currentUser = users.find(user => user.loggedin)
        if (currentUser) {
            setUsername(currentUser.username)
            setPassword(currentUser.password)
            setLanguageForMovie(currentUser.languageForMovie)
            setFavouriteGenre(currentUser.favouriteGenre)
            setGalleryToShow(currentUser.galleryToShow)
            setLanguageForHearing(currentUser.languageForHearing)
            setLoggedIn(true);
        }
    }, [])

    const saveToLocalStorage = (key, value) => {
        let users = JSON.parse(localStorage.getItem('users')) || data.users
        users[currentUserIndex][key] = value
        localStorage.setItem('users', JSON.stringify(users))
    }

    if (!loggedIn) {
        return <h3>User not found or not logged in.</h3>
    }

    return (
        <Row>
            <Form>
                <DetailsFormComponent
                    label="Username"
                    icon={faUser}
                    placeholder={username || "[Username]"}
                    type="text"
                    stateFunction={setUsername}
                    saveFunction={saveToLocalStorage}
                    stateKey='username'
                />

                <DetailsFormComponent
                    label="Password"
                    icon={faKey}
                    placeholder={password || "[****]"}
                    type="password"
                    stateFunction={setPassword}
                    saveFunction={saveToLocalStorage}
                    stateKey='password'
                />

                <DetailsFormComponent
                    label="Favourite Language"
                    icon={faLanguage}
                    placeholder={languageForMovie || "[Favourite language]"}
                    type="text"
                    stateFunction={setLanguageForMovie}
                    saveFunction={saveToLocalStorage}
                    stateKey='languageForMovie'
                />

                <DetailsFormComponent
                    label="Favourite Genre"
                    icon={faQuestion}
                    placeholder={favouriteGenre || "[Favourite genre]"}
                    type="text"
                    stateFunction={setFavouriteGenre}
                    saveFunction={saveToLocalStorage}
                    stateKey='favouriteGenre'
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
                    label="Voice-To-Text Language"
                    icon={faHeadphonesSimple}
                    placeholder={languageForHearing || "[Language]"}
                    type="text"
                    stateFunction={setLanguageForHearing}
                    saveFunction={saveToLocalStorage}
                    stateKey='languageForHearing'
                />
            </Form>
        </Row>
    )
}

export default Details