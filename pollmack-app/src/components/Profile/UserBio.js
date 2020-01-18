import React from 'react';
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';


const UserBio = () => {
    return (
        <Grommet theme={grommet}>
            <Box
                width='medium'
                height='medium'
                justify="center"
                align="center"
                pad="xlarge"
                round="medium">Bio
            </Box>
        </Grommet>
    )
}

export default UserBio;