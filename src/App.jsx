import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = data.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className='tc'>
      <h1 className='head f1'>Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList data={filtered} />
      </Scroll>
    </div>
  );
};

export default App;