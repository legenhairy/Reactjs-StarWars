import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

import logo from './logo.png';

class App extends Component {
  constructor() {
  	super()
  	this.state = {
  		people: [],
  		searchfield: ''
  	}
  	
}
  
  componentDidMount() {
  	fetch('https://swapi.co/api/people/')
  	.then(response => response.json())
  	.then(characters => 
  		this.setState({people: characters.results})
  	)
  }

  onInput = (event) => {
  	this.setState({searchfield: event.target.value});
  }

  render(){
	 const {people, searchfield} = this.state;
	 const filteredCharacters = people.filter(person => {
	 	return person.name.toLowerCase().includes(searchfield.toLowerCase());
	 })
	 if(this.state.people.length === 0) {
	 	return <h1 className='tc'>Loading...Please wait</h1>
	 } else { 
	    return (
	    <div className ='tc App'>	
		  <header className='App-header'>
		  	<img src={logo} className='App-logo' alt='star wars logo' />
		  	<h1 className='title'>Instasearch</h1>
		  </header>
		  <SearchBox searchChange = {this.onInput}/> 
		  <CardList people = {filteredCharacters}/>
	    </div>	
	  );
     }

   }
}

export default App;