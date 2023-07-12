import React from 'react'
import {Row, Form, InputGroup, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUser, faKey, faLanguage, faQuestion, faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons"

function Details() {
    return (
        <Row>
            <Form>
                <Form.Label>Username</Form.Label>
                <InputGroup>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>

                    <Form.Control
                        placeholder="[Username]" 
                        type="text" 
                        disabled
                    />
                    <Button>
                        <FontAwesomeIcon icon={faGear} />
                    </Button>    
                </InputGroup>
                
                <Form.Label>Password</Form.Label>
                <InputGroup>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faKey} />
                    </InputGroup.Text>

                    <Form.Control
                        placeholder="[****]" 
                        type="password"
                        disabled 
                    />   
                    <Button>
                        <FontAwesomeIcon icon={faGear} />
                    </Button>  
                </InputGroup>

                <Form.Label>Favourite Language</Form.Label>
                <InputGroup>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faLanguage} />
                    </InputGroup.Text>

                    <Form.Control
                        placeholder="[Favourite language]" 
                        type="text"
                        disabled
                    />    
                    <Button>
                        <FontAwesomeIcon icon={faGear} />
                    </Button>  
                </InputGroup>

                <Form.Label>Favourite Genre</Form.Label>
                <InputGroup>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faQuestion} />
                    </InputGroup.Text>

                    <Form.Control
                        placeholder="[Favourite genre]" 
                        type="text"
                        disabled
                    /> 
                    <Button>
                        <FontAwesomeIcon icon={faGear} />
                    </Button>     
                </InputGroup>

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

                <Form.Label>Voice-To-Text Language</Form.Label>
                <InputGroup>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faHeadphonesSimple} />
                    </InputGroup.Text>

                    <Form.Control
                        placeholder="[Language]" 
                        type="text"
                        disabled
                    />
                    <Button>
                        <FontAwesomeIcon icon={faGear} />
                    </Button>      
                </InputGroup>
            </Form>
        </Row>
    )
}

export default Details