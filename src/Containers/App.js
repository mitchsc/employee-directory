import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchField: '',
    }
  }

  componentDidMount() {
    console.log("mounted");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
          return response.json();
      })
      .then(users => {
          this.setState({people : users});
    })
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render(){
    const filteredPeople = this.state.people.filter(person => {
      return person.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    // console.log(filteredPeople);

    return (
      <div className='tc'>
        <h1 className='f1'>Employee Directory</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList people={filteredPeople}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
