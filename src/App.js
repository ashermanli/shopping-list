import React, {useState, useEffect} from 'react'
import StoreList from './Components/StoreList'
import ListItem from './Components/ListItem'
import groceryService from './Services/groceryService'
import logo from './logo.svg';
import './App.css';

const App = () => {
const gualMartList = []
const foodKingList = []
const samsClubList = []
const [items, setItems] = useState([])



  return (
    <div className="App h-screen">
      <StoreList title='Gualmart' items={items}/>
      <StoreList title='Food King'/>
      <StoreList title='Sams Club'/>
      <ListItem></ListItem>
    </div>
  );
}

export default App