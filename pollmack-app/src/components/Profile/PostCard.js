import React from 'react';
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';


const PostCard = () => {
    return (
        <Grommet theme={grommet}>
            <Box 
                // pad={{ horizontal: 'xsmall' }}
                width="large" 
                align="center" 
                pad="large"
            >Post Card Displays Here
            </Box>
        </Grommet>
    );
};

export default PostCard;