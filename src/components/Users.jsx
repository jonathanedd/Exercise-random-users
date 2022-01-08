import React from 'react';
import axios from 'axios';
import {useState, useEffect } from 'react'
import getNumber from '../Utilities/getNumber';


const Users = () => {

  const [user, setUser ] = useState({});

  useEffect(() => {
    axios.get( `https://jsonplaceholder.typicode.com/users/${getNumber()}`)
        .then(res => setUser(res.data))
  }, [])



  return (
    <div className='card'>
        <h2>{user.name}</h2>
        <ul>
            <li>
                <i>{user.address?.city}</i>
            </li>
            <li>
                <i>{user.phone}</i>
            </li>
            <li>
                <i>{user.email}</i>
            </li>
        </ul>
    </div>
    
    
  );

};

export default Users;