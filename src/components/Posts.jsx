
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import getNumber from '../Utilities/getNumber';

const Posts = () => {
    
    const [posts, setPosts ] = useState({});

  useEffect(() => {
    axios.get( `https://jsonplaceholder.typicode.com/posts/${getNumber()}`)
        .then(res => setPosts(res.data))
  }, [])



  return (
    <div className='card'>
        <h3>{posts.title}</h3>
        <p>{posts.body}</p>
    </div>
    
    
  );
};

export default Posts;