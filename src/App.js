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
  console.log('effect')

  //fetch data will not work if stored into a variable
  groceryService.getAll().then(response => {
    console.log('data fetched')
    console.log(response)
    setItems(response)
  })
  

},[])

console.log('test' ,items)


  return (
    <div className="App h-screen">
      <StoreList title='Gualmart' items={items?items.map(item => item.store === 'walmart'): null }/>
      <StoreList title='Food King'/>
      <StoreList title='Sams Club'/>
      <ListItem></ListItem>
    </div>
  );
}

export default App