import React from 'react';
import './style.css';
export default function Task(props) {
	return (
		<div className='Task-div'>
			<div className='Task-text-input-div'>
				<span class='Task-circle'></span>
				<input className='Task-text-input' type='text' name='' id='' />
			</div>

			<button className='Task-edit-button'>
				<i className='fas fa-pencil-alt'></i>
			</button>
			<button className='Task-delete-button'>
				<i className='far fa-trash-alt'></i>
			</button>
		</div>
	);
}
