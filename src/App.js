import React, {useState, useEffect} from 'react'
import StoreList from './StoreList'
import logo from './logo.svg';
import './App.css';

const App = () => {
const gualMartList = []
const foodKingList = []
const samsClubList = []



  return (
    <div className="App h-screen">
      <StoreList title='Gualmart'/>
      <StoreList title='Food King'/>
      <StoreList title='Sams Club'/>
    </div>
  );
}

export default App