// import logo from './logo.svg';
import './App.css';
import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount() {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersJson = await usersResponse.json();
    this.setState({ monsters: usersJson });
  }

  // Learning comment: this happens because arrow functions' this is not
  // set by the calling function, but the calling function's this is used
  // instead. if a calls b and b calls handleChange, this is the same as
  // this in b, which is set by a.
  handleChange = (e) => {
    this.setState( { searchField: e.target.value });
  };

  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Galore</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={ this.handleChange }
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
