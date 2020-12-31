import React from 'react';
import '../Task/style.css';
export default function Task(props) {
	const {
		methods: { handleAddTask },
		listId,
	} = props;
	return (
		<div className='Task-div'>
			<div className='Task-text-input-div'>
				<input
					className='Task-text-input'
					type='text'
					placeholder='Add a task'
					// value={taskText}
					onKeyPress={(e) => handleAddTask(listId, e)}
				/>
			</div>
		</div>
	);
}
