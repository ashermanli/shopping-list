import React, {useState} from 'react'

const ListItem = ({item, id, deleteItem}) => {

	return (
		<div>
		<li className='border-2 border-solid mx-2 flex justify-between px-5' key={id}>{item} <button className='border-2 border-solid w-auto h-5' onClick={() => deleteItem(id)}>delete</button></li>
		</div>
	)
}

export default ListItem