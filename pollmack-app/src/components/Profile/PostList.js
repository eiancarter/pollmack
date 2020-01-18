import React from 'react';
import { Grommet, Box, Stack } from 'grommet';
import { grommet } from 'grommet/themes';

import PostCard from './PostCard';
import CreatePost from './CreatePost';


const PostList = () => {
    return (
        <Grommet theme={grommet}>
            <Box
            width='large'
            height='medium'
            justify="center"
            align="center"
            pad="large"
            round="medium"
            background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)">
                <CreatePost />
                <Stack anchor="top-right">
                    <PostCard />
                </Stack>
            </Box>
        </Grommet>
    )
}

export default PostList;