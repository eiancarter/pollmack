import React from 'react';
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';

const PostCard = () => {
    return (
        <Grommet theme={grommet}>
            <Box align='center' pad='large'>
                Post Card
            </Box>
        </Grommet>
    );
};

export default PostCard;