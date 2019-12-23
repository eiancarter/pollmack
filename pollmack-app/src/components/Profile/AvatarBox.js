import React from 'react'; 
import { Box, Heading } from "grommet";

import Avatar from './Avatar';

const AvatarBox = () => {
    return (
        <Box
            width='medium'
            height='medium'
            align='start'
        >
            <Avatar />
            <Heading>Contributor Name</Heading>
            <Heading>Member Since</Heading>
            <Heading>Total Donated</Heading>
            <Heading>Number of Orgs</Heading>
        </Box>
    )
}

export default AvatarBox;