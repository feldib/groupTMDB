import React from 'react'
import {Row, Form, InputGroup} from 'react-bootstrap'
import { faUser, faKey, faLanguage, faQuestion, faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons"
import DetailsFormComponent from './DetailsFormComponent'

function Details() {
    return (
        <Row>
            <Form>
                <DetailsFormComponent 
                    label = "Username"
                    icon = {faUser}
                    placeholder = "[Username]"
                    type = "text"
                />
                
                <DetailsFormComponent 
                    label = "Password"
                    icon = {faKey}
                    placeholder = "[****]" 
                    type = "password"
                />

                <DetailsFormComponent 
                    label = "Favourite Language"
                    icon = {faLanguage}
                    placeholder = "[Favourite language]"
                    type = "text"
                />

                <DetailsFormComponent 
                    label = "Favourite Genre"
                    icon = {faQuestion}
                    placeholder = "[Favourite genre]"
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
                    />
                    <Form.Check
                        inline
                        label="Top rated"
                        name="galleries"
                        type="switch"
                        id="topRated"
                    />
                    <Form.Check
                        inline
                        label="Upcoming"
                        name="galleries"
                        type="switch"
                        id="upcoming"
                    />            
                </InputGroup>

                <DetailsFormComponent 
                    label = "Voice-To-Text Language"
                    icon = {faHeadphonesSimple}
                    placeholder = "[Language]" 
                    type = "text"
                />
            </Form>
        </Row>
    )
}

export default Details