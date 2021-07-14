import React, {useState} from 'react';
import './homepage.css';
import Joke from '../services/Joke'
import Stories from '../services/stories'

export default function Homepage() {
    
    const [userQuery, setUserQuery] = useState('');

    const updateUserQuery = event => {
      console.log('userQuery', userQuery);
      setUserQuery(event.target.value);
    }
  
    const handleKeyPress = event => {
      if (event.key === 'Enter') {
        searchQuery();
      }
    }
  
    const searchQuery = () => {
      window.open(`https://google.com/search?q=${userQuery}`, '_blank');
    }
  
    return (
      <div className="App">
        <h1>Hello Kamal</h1>
        <div className='form'>
          <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
          <button onClick={searchQuery}>Search</button>
        </div>
        <hr />
        <Joke />
        <hr />
        <Stories />
      </div>
    );
}
