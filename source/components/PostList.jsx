import React from 'react';
import PostItem from'./PostItem'

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1>There is no exist items</h1>
        )
    }

    return (
        <div>
            <h1>{title}</h1>
                {posts.map((post, index) =>
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id}></PostItem>
                )}
        </div>
    );
};

export default PostList;