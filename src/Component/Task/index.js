import React from 'react';
import './style.css';
export default function Task(props) {
	const {
		handleDeleteTask,
		handleEditTask,
		handleCompleted,
		handleInputTask,
	} = props;
	return (
		<div className='Task-div'>
			<div className='Task-text-input-div'>
				<button class='Task-circle-button' onClick={handleCompleted}></button>
				<input
					className='Task-text-input'
					type='text'
					name=''
					id=''
					onClick={handleInputTask}
				/>
			</div>

			<button className='Task-edit-button' onClick={handleEditTask}>
				<i className='fas fa-pencil-alt'></i>
			</button>
			<button className='Task-delete-button' onClick={handleDeleteTask}>
				<i className='far fa-trash-alt'></i>
			</button>
		</div>
	);
}
