import React from 'react';
import { Grommet, Form, TextInput, Heading, Button } from 'grommet';


const AddressForm = () => {
    return (
        <Grommet>
            <Heading>Enter Address</Heading>
            <Form>
                <TextInput 
                    placeholder='address 1'
                />
                <TextInput
                    placeholder='address 2'
                />
                <TextInput 
                    placeholder='city'
                />
                <TextInput 
                    placeholder='state'
                />
                <TextInput 
                    placeholder='ZIP'
                />
            </Form>
            <Button>Submit</Button>
        </Grommet>
    )
}

export default AddressForm;