import React, {Component} from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Hello Nedu',
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log('json response ', data)
      this.setState({monsters: data})
    })
  }
  handleChange = (e) => {
    this.setState({searchField: e.target.value}, () => console.log(this.state))
  }
  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <h1>Monster Gang</h1>
      <SearchBox
      placeholder="search monsters"
      handleChange= {this.handleChange}
      />
      <CardList monsters= {filteredMonsters}>
       
      </CardList>

      </div>
    );
  }
}

export default App;
