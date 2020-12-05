import React, { useState } from 'react';
import './Search.css';

export const Search = () => {
  const [userQuery, setUserQuery] = useState('');

  const searchUserQuery = (e) => {
    e.preventDefault();
    window.open(`http://google.com/search?q=${userQuery}`);
  };
  return (
    <>
      <center>
        <form onSubmit={searchUserQuery}>
          <label>Search for stuff</label>
          <input
            id='search'
            type='search'
            placeholder='Search...'
            required
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
          />
          <button type='submit'>Go</button>
        </form>
      </center>
    </>
  );
};
