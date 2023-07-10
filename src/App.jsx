import React, { Component } from 'react'
import { useState } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
class App extends Component {
  // const { search, setSearch } = useState;
  // const {newRobo, setNewRobo} = useState;
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App;