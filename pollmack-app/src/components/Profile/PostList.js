import React from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import { Box } from 'grommet';


const PostList = (props) => {
    return (
        <Box
        width='large'
        height='medium'
        justify="center"
        align="center"
        pad="large"
        round="medium"
        >
            <CreatePost />
            <PostCard />
        </Box>
    )
}

export default PostList;