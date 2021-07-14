import React from 'react';
import { useFetch } from './hooks';
import * as Constant from '../variables';

function Joke() {
  const { setup, punchline } = useFetch(Constant.Joke_URL, {});

  return (
    <div>
      <h3>Joke of the Session</h3>
      <p>{setup}</p>
      <p><em>{punchline}</em></p>
    </div>
  )
}

export default Joke;