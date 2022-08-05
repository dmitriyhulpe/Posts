import React, { useState } from 'react';
import Input from './Input/Input'
import Button from './Button/Button'

const PostForm = ({create}) => {     
    const [post, setPost] = useState({title: '', body: ''})

    const createPost = (event) => {
        event.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <Input
                value={post.title}
                placeholder='Name'
                onChange={event => setPost({...post, title: event.target.value})}>
            </Input>
            <Input value={post.body}
                placeholder='Description'
                onChange={event => setPost({...post, body: event.target.value})}>    
            </Input>
            <Button onClick={createPost}>Create Post</Button>
        </form>   
    );
};

export default PostForm;