import React from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';


const PostList = (props) => {
    return (
        <div>
            <CreatePost />
            <PostCard />
        </div>
    )
}

export default PostList;