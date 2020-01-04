import React from 'react';
import { Grommet, Button, Box, Stack } from 'grommet';
import { grommet } from 'grommet/themes';

import PostCard from './PostCard';
import CreatePost from './CreatePost';

const postListContent = {
    padding: "4px 16px 20px 16px",
    boxShadow: "1px 1px 2px 2px lightgrey",
    margin: "15px"
  };

const PostList = () => {
    return (
        <Grommet theme={grommet}>
            <Box style={postListContent}
          width='large'
          height='medium'
          justify="center"
          align="center"
          pad="large"
          background="lightgrey"
          round="medium">
                <Button>Post+</Button>
                <CreatePost />
                <Stack anchor="top-right">
                    {/* <Icons.Notification size="large" /> */}
                    <PostCard />
                </Stack>
            </Box>
        </Grommet>
    )
}

export default PostList;