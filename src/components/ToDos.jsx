
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getNumber from '../Utilities/getNumber';


const ToDos = () => {
    
    const [toDo, settoDo ] = useState({});

  useEffect(() => {
    axios.get( `https://jsonplaceholder.typicode.com/todos/${getNumber()}`)
        .then(res => settoDo(res.data))
  }, [])



  return (
    <div className='card'>
        <h3>{toDo.title}</h3>
        <p>Completed: {toDo.completed?.toString()}</p>
    </div>
    
    
  );
};

export default ToDos;