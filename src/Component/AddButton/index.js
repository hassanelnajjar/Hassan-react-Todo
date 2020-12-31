import React from 'react';
import './style.css';
export default function AddButton(props) {
	return (
		<button className='AddButton-Class' onClick={props.handleAddList}></button>
	);
}
