import React from 'react';
import { Grommet, Button } from 'grommet';
import { grommet } from 'grommet/themes';

import PostCard from './PostCard';


const PostList = () => {

    return (
        <Grommet theme={grommet}>
            <Button>Post+</Button>
            <PostCard />
        </Grommet>
    )
}

export default PostList;