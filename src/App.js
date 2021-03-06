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

useEffect(() => {
  //fetch data will not work if stored into a variable
  groceryService.getAll().then(response => {
    setItems(response)
  })
  

},[])



  return (
    <div className="App h-screen">
      <StoreList title='Gualmart' items={items?.filter(item => item.store === 'walmart')}/>
      <StoreList title='Food King' items={items?.filter(item => item.store === 'foodking')}/>
      <StoreList title='Sams Club' items={items?.filter(item => item.store === 'sams')}/>
    </div>
  );
}

export default App