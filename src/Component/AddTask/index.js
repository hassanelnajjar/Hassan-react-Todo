import React from 'react';
import '../Task/style.css';
export default function Task(props) {
	const { handleInputTask, taskText } = props;
	return (
		<div className='Task-div'>
			<div className='Task-text-input-div'>
				<input
					className='Task-text-input'
					type='text'
					value={taskText}
					onClick={handleInputTask}
				/>
			</div>
		</div>
	);
}
