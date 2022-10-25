import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super()

    this.state= {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then( response => response.json())
      .then(users => this.setState(() => {
        return {monsters: users}
      }))
  }
  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    this.setState(() => {
      return {searchField}
    })
  } 
  render(){

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonstersArray = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    
    return (
      <div className="App">
        <SearchBox onChangeHandler = {onSearchChange} 
          placeholder="Search for monsters" className ="search-box"/>
        <CardList monsters = {filteredMonstersArray}/>
      </div>
    );
  }
}

export default App;
