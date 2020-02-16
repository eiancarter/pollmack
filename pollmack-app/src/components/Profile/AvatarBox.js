import React from 'react'; 
import { Grommet, Box, Heading, Text } from "grommet";
import { grommet } from 'grommet/themes';
import Avatar from './ProfileAvatar';

const AvatarBox = () => {
    return (
      <Grommet theme={grommet}>
        <Box>
            <Box
                width='medium'
                height='medium'
                justify="center"
                align="center"
                pad="xlarge"
                round="medium"
            >
                <Avatar size="large" />
                <Heading>Veronica Mars</Heading>
                <Text>Member Since: February 2018</Text>
                <Text>Total Donated: $389.00</Text>
                <Text>Candidates Backed: 3</Text>
            </Box>
        </Box>
      </Grommet>
    )
}

export default AvatarBox;