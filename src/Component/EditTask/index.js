import React from 'react';
import './style.css';
export default function EditTask(props) {
	// const {
	// 	taskElement: { text, date, details },
	// 	handleEditTask,
	// } = props;
	return (
		<div className='EditTask-div'>
			<div className='EditTask-Buttons-div'>
				<button className='EditTask-Delete-Button'>
					<i className='far fa-trash-alt'></i>
				</button>
				<button className='EditTask-Close-Button'>
					<i class='far fa-times-circle'></i>
				</button>
			</div>
			<form className='EditTask-form'>
				<label className='EditTask-Label' htmlFor='Task'>
					Task :
					<input
						className='EditTask-TaskText'
						type='text'
						name='Task'
						id='Task'
						// value={text}
					/>
				</label>
				<label className='EditTask-Label' htmlFor='TaskDetails'>
					Task Details :
					<textarea
						className='EditTask-TaskDetails'
						type='text'
						name='TaskDetails'
						id='TaskDetails'
						// value={details}
					></textarea>
				</label>
				<label className='EditTask-Label' htmlFor='TaskDate'>
					Task DateTime :
					<input
						className='EditTask-TaskDate'
						type='date'
						name='TaskDate'
						id='TaskDate'
						// value={date}
					/>
				</label>
				<button
					className='EditTask-submit'
					type='submit'
					// onClick={handleEditTask}
				>
					Edit Task
				</button>
			</form>
		</div>
	);
}
