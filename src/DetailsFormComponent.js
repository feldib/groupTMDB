import React from 'react'
import {Form, InputGroup, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faCheck} from "@fortawesome/free-solid-svg-icons"

function DetailsFormComponent(props) {
    const [isDisabled, setIsDisabled] = React.useState(true)
    const input = React.useRef()
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
                    ref={input}
                    disabled={isDisabled}
                />
                <Button 
                    onClick={()=>{
                        setIsDisabled(!isDisabled)
                    }}
                >
                    <FontAwesomeIcon 
                        icon={isDisabled ? faGear : faCheck} 
                    />
                </Button>    
            </InputGroup>
        </>
    )
}

export default DetailsFormComponent