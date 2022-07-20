import React, {useEffect, useState} from 'react'
import ListItem from './ListItem'

const StoreList = ({title,items}) =>{

	const [input,setInput] = useState([])
	const [max, setMax] = useState(0)
	const [listItems, setListItems] = useState([])


	//Once the data is fetched and passed to this component, re-render to show the list of items
	useEffect(()=> {
		setListItems(items)
	},[items])


	const handleInput = (e) =>{
		console.log(e.target.value)
		setInput(e.target.value)
	}

	const addItem = () =>{

		if(input === ''){
			console.log('there is an error')
			return
		}

		let listItem = {
			"id":max+1,
			"content": input, 
			"store:": title.replace(/\s+/g, '').toLowerCase()
		}

		setListItems([...listItems,listItem])
		setMax(max+1)
		setInput('')

	}

	const deleteItem = (id) =>{

		let filteredList = items.filter(item => item.id !== id)
		setListItems(filteredList)

		if(filteredList.length === 0){
			setMax(0)
			setInput('set your items')
		}
	}
 
	return(
	<div className='h-3/4 mb-20'>
      <h1 className="text-blue-800 text-5xl">{title}</h1>
      <div className="border-2 rounded border-solid border-blue-500 h-full flex flex-col justify-end align-center m-2">
		<ul>
			{listItems?.map(item => <ListItem key={item.id} item={item.content} id={item.id} deleteItem={()=>deleteItem(item.id)}/>)}
		</ul>
		<div className='justify-self-start'>
			<input className='border-2 rounded border-solid h-5 w-auto mx-5' type='text' value={input} onChange={handleInput}></input>
			<button className='h-5 w-16 self-center' onClick={addItem}>Add</button>
		</div>
	  </div>
    </div>
	)
}

export default StoreList