import React from 'react';
import { Grommet, Button, Box, Stack, Text } from 'grommet';
import { grommet } from 'grommet/themes';

import PostCard from './PostCard';
import CreatePost from './CreatePost';


const PostList = () => {
    
    return (
        <Grommet theme={grommet}>
            <Button>Post+</Button>
            <CreatePost />
            <Stack anchor="top-right">
                {/* <Icons.Notification size="large" /> */}
                <PostCard />
            </Stack>
        </Grommet>
    )
}

export default PostList;