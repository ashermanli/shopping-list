import { list } from 'postcss'
import React, {useEffect, useState} from 'react'
import groceryService from '../Services/groceryService'
import ListItem from './ListItem'

const StoreList = ({title,items}) =>{

	const [input,setInput] = useState([])
	const [listItems, setListItems] = useState([])


	//Once the data is fetched and passed to this component, re-render to show the list of items
	useEffect(()=> {
		setListItems(items)
	},[items])


	const handleInput = (e) =>{
		//console.log(e.target.value)
		setInput(e.target.value)
	}

	const addItem = () =>{

		if(input === ''){
			console.log('there is an error')
			return
		}

		let listItem = {
			"content": input, 
			"store": title.replace(/\s+/g, '').toLowerCase()
		}

		groceryService.create(listItem).then(response =>{
			listItem.id = response.id
			setListItems([...listItems,listItem])
		})
		
		setInput('')

	}

	const deleteItem = (id) =>{

		groceryService.remove(id).then(response => {
			console.log(response)
		})

		let filteredList = listItems.filter(item => item.id !== id)
		
		setListItems(filteredList)
		// console.log(filteredList)

		if(filteredList.length === 0){
			setInput('set your items')
		}
	}
 
	return(
	<div className='h-3/4 mb-20 mt-2'>
      <h1 className="text-blue-800 text-5xl">{title}</h1>
      <div className="border-2 rounded-lg border-solid border-blue-500 h-full flex flex-col justify-end align-center m-2">
		<ul>
			{listItems?.map(item => <ListItem key={item.id} item={item.content} id={item.id} deleteItem={()=>deleteItem(item.id)}/>)}
		</ul>
		<div className='flex justify-center align-middle mb-2'>
			<input className='border-2 rounded border-solid border-blue-500 h-5 w-auto mx-5' type='text' value={input} onChange={handleInput}></input>
			<button className='flex border-2 rounded border-solid border-blue-500 h-5 w-16 items-center justify-center' onClick={addItem}><span>Add</span></button>
		</div>
	  </div>
    </div>
	)
}

export default StoreList