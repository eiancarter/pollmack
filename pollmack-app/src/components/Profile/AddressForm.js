import React from 'react';
import { Grommet, Form, FormField, Heading, Button } from 'grommet';


const AddressForm = () => {
    return (
        <Grommet>
            <Heading>Enter Address</Heading>
            <Form onSubmit={({ value }) => console.log('Submit: ', value)} size='small'>
                <FormField 
                    label='Address 1'
                    name='address 1'
                />
                <FormField
                    label='Address 2'
                    name='address 2'
                />
                <FormField
                    label='City'
                    name='city'
                />
                <FormField
                    label='State'
                    name='state'
                />
                <FormField
                    label='Zip'
                    name='ZIP'
                />
            </Form>
            <Button type='submit' label='Submit' primary={true} />
        </Grommet>
    )
}

export default AddressForm;