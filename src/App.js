import './App.css';
import Users from './components/Users';
import ToDos from './components/ToDos';
import Posts from './components/Posts';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';

function App() {
  
const [component, setComponent ] = useState( <Users />);
const [type, setType ] = useState ('user');

useEffect(() => {
  switch (type) {
    case 'user':
      setComponent(<Users />);
      break;
    case 'Posts':
      setComponent(<Posts />);
      break;
     default:
       setComponent(<ToDos />)
      break;
  }
}, [type])


  return(
      <div>
        <button onClick={() => setType('user')}>User</button>
        <button onClick={() => setType('Posts')}>Posts</button>
        <button onClick={() => setType('ToDos')}>to Do's</button>
        {component}
      </div>
  )
}                                   



export default App;
