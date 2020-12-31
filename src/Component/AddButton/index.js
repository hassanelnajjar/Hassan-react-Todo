import React from 'react';
import './style.css';
export default function AddButton(props) {
	console.log(props.handleAddList);
	return (
		<button className='AddButton-Class' onClick={props.handleAddList}></button>
	);
}
