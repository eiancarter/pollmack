import React from "react";

import { FormField, TextInput, Box, Grommet, Header, Button } from "grommet";
import { grommet } from "grommet/themes";

  

const HomeNav = () => (
  <Grommet theme={grommet}>
    <Header background="light-4" pad="small"> pollmack
      <Box direction="row" gap="medium">
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
      </Box>
    </Header>
  </Grommet>
);

export default HomeNav;
