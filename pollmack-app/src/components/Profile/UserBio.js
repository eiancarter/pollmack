import React from 'react';
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';

const bioCardContent = {
    padding: "4px 16px 20px 16px",
    boxShadow: "1px 1px 2px 2px lightgrey",
    margin: "15px"
  };

const UserBio = () => {
    return (
        <Grommet theme={grommet}>
            <Box style={ bioCardContent } 
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