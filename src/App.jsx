import React, { Component } from 'react'
import { useState } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
const App = () => {
  const [search, setSearch] = useState('');

  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }
  const filtered = robots.filter(robot => {
    return robot.name.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filtered} />
    </div>
  )
}


export default App;