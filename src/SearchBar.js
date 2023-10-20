import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default function SearchBar() {
    return (
        <div style={{ justifyContent: 'center', display: 'flex' }} >
            <InputGroup
                className="mb-3"
                style={{ width: '70rem',margin:'1rem' }}>

                <Form.Control

                    placeholder="Enter search keyword..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button
                    variant="outline-secondary"
                    id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </div>

    )
}
