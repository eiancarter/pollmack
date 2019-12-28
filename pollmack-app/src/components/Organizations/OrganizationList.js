import React from 'react';
import { Grommet, Box, Header, Anchor } from 'grommet';
import { grommet } from 'grommet/themes'; 

import OrganizationCard from './OrganizationCard';


const OrganizationList = () => {
    return (
        <Grommet theme={grommet}>
            <Header background="light-4" pad="small"> pollmack
                <Box direction="row" gap="medium">
                    <Anchor label="Home" href="/profile" />
                </Box>
                {/* <ProfileAvatar /> */}
            </Header>
            <Box>
                <OrganizationCard />
            </Box>
        </Grommet>
    )
};

export default OrganizationList;
 
