import React from "react";

import { FormField, TextInput, Grommet, Button } from "grommet";

const homeLogin = {
    display: 'flex',
    flexDirection: 'row',
    height: '12vh'
};
const homeButton = {
    background: 'navy',
    borderRadius: '6px',
    color: 'white',
    textAlign: 'center',
    padding: '5px',
    fontSize: '1rem'
  };
  
 const HomeLogin = () => {
    return (
        <Grommet>
            <FormField style={homeLogin} htmlFor='text-input'>
                <TextInput
                id='email-input'
                placeholder='email'
                type=''
                />
                <TextInput
                id='password-input'
                placeholder='password'
                type='password'
                />
                <Button style={homeButton}>Log In</Button>
            </FormField>
        </Grommet>
    )
}

export default HomeLogin;