import React, {useState} from 'react'

const StoreList = ({title}) =>{

	const [input,setInput] = useState([])

	const handleInput = (e) =>{
		console.log(e.target.value)
		setInput(e.target.value)
	}

	return(
	<div className='h-3/4 mb-20'>
      <h1 className="text-blue-800 text-5xl">{title}</h1>
      <div className="border-2 rounded border-solid border-blue-500 h-full flex flex-col m-2">This is the container for gualmart
	  <input className='border-2 rounded border-solid h-5 w-auto mx-5' type='text' value={input} onChange={handleInput}></input>
	  </div>
    </div>
	)
}

export default StoreList