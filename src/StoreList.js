import React from 'react'

const StoreList = ({title}) =>{
	return(
	<div className='h-3/4 mb-20'>
      <h1 className="text-blue-800 text-5xl">{title}</h1>
      <div className="border-2 rounded border-solid border-blue-500 h-full flex m-2">This is the container for gualmart</div>
    </div>
	)
}

export default StoreList