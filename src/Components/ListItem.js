import React, {useState} from 'react'

const ListItem = ({item, id, deleteItem}) => {

	return (
		<div className='my-2'>
		<li className='border-2 border-solid border-blue-500 rounded mx-2 px-1 flex justify-between items-center h-10' key={id}>{item}<div><button className='border-2 border-solid border-blue-500 rounded hover:bg-blue-500 hover:text-white'> Acquired</button> <button className='border-2 border-solid border-red-500 rounded' onClick={() => deleteItem(id)}>delete</button></div></li>
		</div>
	)
}

export default ListItem