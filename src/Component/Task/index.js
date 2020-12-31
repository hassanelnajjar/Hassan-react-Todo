import React from 'react';
import './style.css';
export default function Task(props) {
	const {
		handleEditTask,
		handleCompleted,
		taskText,
		taskId,
		listId,
		methods: { handleDeleteTask, handleInputTask },
	} = props;
	return (
		<div className='Task-div'>
			<div className='Task-text-input-div'>
				<button
					className='Task-circle-button'
					onClick={handleCompleted}
				></button>
				<input
					className='Task-text-input'
					type='text'
					value={taskText}
					onChange={(e) => handleInputTask(taskId, listId, e)}
				/>
			</div>

			<button className='Task-edit-button' onClick={handleEditTask}>
				<i className='fas fa-pencil-alt'></i>
			</button>
			<button
				className='Task-delete-button'
				onClick={(e) => handleDeleteTask(taskId, listId, e)}
			>
				<i className='far fa-trash-alt'></i>
			</button>
		</div>
	);
}
