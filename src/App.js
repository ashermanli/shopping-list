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
    <div className="App h-max py-1">
      <StoreList className='bg-inherit'title='Gualmart' items={items?.filter(item => item.store === 'gualmart')}/>
      <StoreList className='h-full'title='Food King' items={items?.filter(item => item.store === 'foodking')}/>
      <StoreList className='h-full'title='Sams Club' items={items?.filter(item => item.store === 'samsclub')}/>
    </div>
  );
}

export default App