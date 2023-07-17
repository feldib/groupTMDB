import React from 'react'
import {Form, InputGroup, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear} from "@fortawesome/free-solid-svg-icons"

function DetailsFormComponent(props) {
    return (
        <>
            <Form.Label>{props.label}</Form.Label>
            <InputGroup>
                <InputGroup.Text>
                    <FontAwesomeIcon icon={props.icon} />
                </InputGroup.Text>

                <Form.Control
                    placeholder={props.placeholder}
                    type={props.type }
                    disabled
                />
                <Button>
                    <FontAwesomeIcon icon={faGear} />
                </Button>    
            </InputGroup>
        </>
    )
}

export default DetailsFormComponent