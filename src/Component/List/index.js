import React from 'react';
import Task from '../Task';
import AddTask from '../AddTask';
import './style.css';
export default function List(props) {
	const {
		handleAddList,
		handleDeleteList,
		handleChangeListColor,
		listName,
		listId,
		tasks,
		methods,
	} = props;
	// onClick on list-add-task-button-div just change display to none
	return (
		<div className='List-div'>
			<div className='List-header'>
				<div className='List-AddTask-Button-Div'>
					<span className='List-plus-symbol'>
						<i className='fas fa-plus'></i>
					</span>
					<button className='List-AddTask-button'>Add a task</button>
				</div>

				<input
					className='List-TaskName-input'
					type='text'
					value={listName}
					onChange={handleAddList}
					// placeholder='new task'
				/>
				<button
					className='List-Change-Color-Button'
					onClick={handleChangeListColor}
				>
					<i className='fas fa-paint-brush'></i>
				</button>
				<button className='List-Delete-Button' onClick={handleDeleteList}>
					<i className='far fa-trash-alt'></i>
				</button>
			</div>
			<div className='List-Tasks-Container'>
				<AddTask
					handleInputTask={() => console.log('edit')}
					taskText={'Add Task'}
				/>
				{tasks.map((task) => (
					<Task
						key={task.id}
						taskText={task.text}
						taskId={task.id}
						listId={listId}
						methods={methods}
					/>
				))}
			</div>
		</div>
	);
}
