import React, { useState, useEffect } from 'react'

import { usePosts } from './hooks/usePosts'
import { useFetching } from './hooks/useFetching'

import './styles/App.css'

import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import Modal from './components/Modal/Modal'
import Button from './components/Button/Button'
import Loader from './components/Loader'

import PostService from './API/PostService'

const App = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  const [mount, setMount] = useState(false)

  useEffect(() => {
    if (!mount) {
      setMount(true);
      fetchPosts()
    }
  }, [fetchPosts, mount])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(element => element.id !== post.id))
  }

  return (
    <div className='container'>
      <Button style={{marginBottom: '10px'}} onClick={() => {
        setModal(true)
      }}>
        Create post
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}></PostForm>
      </Modal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}>  
      </PostFilter>
      {postError && <h1>An error has occurred ${postError}</h1>}
      {isPostsLoading
        ? <Loader></Loader>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts list'></PostList>
      }
    </div>
  );
};

export default App;