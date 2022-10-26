import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then( response => response.json())
     .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonstersArray = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
          });
    setFilteredMonsters(newFilteredMonstersArray)
  }, [monsters, searchField])

 const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)

}
  return (
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler = {onSearchChange} 
          placeholder="Search for monsters" className ="monsters-search-box"/>
        <CardList monsters = {filteredMonsters}/>
      </div>
  );
}

// class App extends Component {

//   constructor(){
//     super()

//     this.state= {
//       monsters: [],
//       searchField: ''
//     }
//   }
//   componentDidMount(){
//      fetch('https://jsonplaceholder.typicode.com/users')
//      .then( response => response.json())
//       .then(users => this.setState(() => {
//         return {monsters: users}
//       }))
//   }
//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return {searchField}
//     })
//   } 
//   render(){

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonstersArray = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });
    
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler = {onSearchChange} 
//           placeholder="Search for monsters" className ="monsters-search-box"/>
//         <CardList monsters = {filteredMonstersArray}/>
//       </div>
//     );
//   }
// }

export default App;
