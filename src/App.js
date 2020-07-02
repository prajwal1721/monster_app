import React,{Component} from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list';
import {SearchBox} from './Components/SearchBox/searchbox';
class App extends Component
{
    constructor()
    {
      super();
      this.state={
        monsters:[],
        searchField:""
      };
    }
    componentDidMount()
    {
       fetch('http://jsonplaceholder.typicode.com/users')
       .then(response=>response.json())
       .then(users=>this.setState({monsters:users}));
    }
    render()
    {
      const {monsters, searchField}=this.state;
      const filtered_monsters=monsters.filter(monsters=>monsters.name.toLowerCase().includes(searchField.toLowerCase()));
      return (
        <div className="App">
          <h1>
            Monster
          </h1>
          <SearchBox handleChange={e=>{this.setState({searchField : e.target.value})}} />
          <br/>
          <br/>
          <br/>
           <CardList monsters={filtered_monsters} />
        </div>
      );

    }
}
export default App;
