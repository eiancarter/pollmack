import React from 'react';
import { Grommet, Button } from 'grommet';
import { grommet } from 'grommet/themes';

import PostCard from './PostCard';
import CreatePost from './CreatePost';


const PostList = () => {

    return (
        <Grommet theme={grommet}>
            <Button>Post+</Button>
                <CreatePost />
            <PostCard />
        </Grommet>
    )
}

export default PostList;