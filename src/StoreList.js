import React, {useState} from 'react'

const StoreList = ({title}) =>{

	const [input,setInput] = useState([])
	const [max, setMax] = useState(0)
	const [items,setItems] = useState([])

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
			"item": input
		}

		setItems([...items,listItem])
		setMax(max+1)
		setInput('')

	}

	const deleteItem = (id) =>{

		let filteredList = items.filter(item => item.id !== id)

		setItems(filteredList)
	}
 
	return(
	<div className='h-3/4 mb-20'>
      <h1 className="text-blue-800 text-5xl">{title}</h1>
      <div className="border-2 rounded border-solid border-blue-500 h-full flex flex-col align-center m-2">
	  <ul>
		  {items.map(item => <li>{item.item} <button onClick={() => deleteItem(item.id)}>delete</button></li>)}
	  </ul>
		<input className='border-2 rounded border-solid h-5 w-auto mx-5' type='text' value={input} onChange={handleInput}></input>
		<button className='h-5 w-16 self-center' onClick={addItem}>Click me </button>
	  </div>
    </div>
	)
}

export default StoreList