import React from 'react';
import { Grommet, Box, Paragraph } from 'grommet';
import { grommet } from 'grommet/themes';

 
const OrganizationCard = (props) => {
    return (
        <Grommet theme={grommet}>
            <Box align='center' key={props.id}>
                <Box border='all' align='center'>
                    <Paragraph>Name: {props.name}</Paragraph>
                    <Paragraph>Party: {props.party}</Paragraph>
                    <Paragraph>Office: {props.office}</Paragraph>
                    <Paragraph>District: {props.district}, {props.state}</Paragraph>    
                    <Paragraph>Status: {props.status}</Paragraph>    
                    <Paragraph>Organization: {props.organization}</Paragraph> 
                </Box>
            </Box>
            {/* <Heading>Social Organizations</Heading>
            <Box align='center'>
                <Box border='all' align='center'>
                    <Heading>Organization Name</Heading>
                    <Heading>Member Since</Heading>
                    <Paragraph>Total Donations</Paragraph>
                </Box>
            </Box> */}
        </Grommet>
    )
};

export default OrganizationCard;