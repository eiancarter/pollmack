import React from "react";

import { FormField, TextInput, Grommet, Button } from "grommet";

 const HomeLogin = () => {
    return (
        <Grommet>
            <FormField direction='row' htmlFor='text-input'>
                <TextInput
                id='email-input'
                placeholder='email'
                />
                <TextInput
                id='password-input'
                placeholder='password'
                />
                <Button>Log In</Button>
            </FormField>
        </Grommet>
    )
}

export default HomeLogin;