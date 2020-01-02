import React from 'react';
import { Grommet, Button, Box } from 'grommet';
import { grommet } from 'grommet/themes';

import PostCard from './PostCard';
import CreatePost from './CreatePost';


const PostList = () => {

    return (
        <Grommet theme={grommet}>
            <CreatePost />
            <Button>Post+</Button>
            <Box>
                <PostCard />
            </Box>
        </Grommet>
    )
}

export default PostList;