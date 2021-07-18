import React, { useState } from 'react';
import './homepage.css';
import Joke from '../services/Joke';
import Stories from '../services/stories';
import Tasks from './Tasks';
import Gallery from './gallery';

export default function Homepage() {

  const [userQuery, setUserQuery] = useState('');
  const [display, setDisplay] = useState(true);

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

  const toggleGallery = (() => {
    setDisplay(!display);
  })

  const label = display ? "Hide Gallery" : "Show Gallery";

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
      <Tasks />
      <hr />
      <div>
        {display ? <Gallery /> : null}
      </div>
      <button onClick={toggleGallery}>{label}</button>
      <hr />
      <Stories />
    </div>
  );
}
