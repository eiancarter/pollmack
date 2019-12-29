import React from 'react';
import { Grommet, Box, Paragraph, Heading } from 'grommet';
import { grommet } from 'grommet/themes';

const OrganizationCard = () => {
    return (
        <Grommet theme={grommet}>
            <Heading>Political Organizations</Heading>
            <Box align='center'>
                <Box border='all' align='center'>
                    <Heading>Organization Name</Heading>
                    <Heading>Member Since</Heading>
                    <Paragraph>Total Donations</Paragraph>    
                </Box>
                <Box border='all' align='center'>
                    <Heading>Organization Name</Heading>
                    <Heading>Member Since</Heading>
                    <Paragraph>Total Donations</Paragraph>
                </Box>
                <Box border='all' align='center'>
                    <Heading>Organization Name</Heading>
                    <Heading>Member Since</Heading>
                    <Paragraph>Total Donations</Paragraph>
                </Box>
            </Box>
            <Heading>Social Organizations</Heading>
            <Box align='center'>
                <Box border='all' align='center'>
                    <Heading>Organization Name</Heading>
                    <Heading>Member Since</Heading>
                    <Paragraph>Total Donations</Paragraph>
                </Box>
                <Box border='all' align='center'>
                    <Heading>Organization Name</Heading>
                    <Heading>Member Since</Heading>
                    <Paragraph>Total Donations</Paragraph>
                </Box>
                <Box border='all' align='center'>
                    <Heading>Organization Name</Heading>
                    <Heading>Member Since</Heading>
                    <Paragraph>Total Donations</Paragraph>
                </Box>
            </Box>
        </Grommet>
    )
};

export default OrganizationCard;