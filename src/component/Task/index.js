import React from 'react';
import './style.css';
export default function Task(props) {
	const {
		taskText,
		taskId,
		listId,
		isCompleted,
		methods: {
			handleDeleteTask,
			handleInputTask,
			handleCompleted,
			handleUnCompleted,
		},
	} = props;
	return (
		<div className='Task-div'>
			<div className='Task-text-input-div'>
				<button
					className={
						isCompleted ? 'Task-circle-button-completed' : 'Task-circle-button'
					}
					onClick={(e) => handleCompleted(taskId, listId, e)}
				></button>
				<input
					className={
						isCompleted
							? 'Task-text-input Text-input-Completed '
							: 'Task-text-input'
					}
					type='text'
					value={taskText}
					onChange={(e) => handleInputTask(taskId, listId, e)}
				/>
			</div>

			<button
				className='Task-edit-button'
				onClick={(e) => handleUnCompleted(taskId, listId, e)}
			>
				<i className='far fa-check-circle'></i>
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
