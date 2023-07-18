import React, { useState } from 'react'
import {Form, InputGroup, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faCheck} from "@fortawesome/free-solid-svg-icons"

function DetailsFormComponent(props) {
    const [isDisabled, setIsDisabled] = useState(true)
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
                        if(!isDisabled) {
                            let inputValue = input.current.value;
                            props.stateFunction(inputValue);
                            props.saveFunction(props.stateKey, inputValue); // Save the changes to local storage
                        }
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