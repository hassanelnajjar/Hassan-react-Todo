import React, { Component } from 'react';
import Task from '../Task';
import AddTask from '../AddTask';
import './style.css';
export default class List extends Component {
	state = {
		color: '#fff',
	};
	changeColor = () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		this.setState(() => ({ color: `#${randomColor}` }));
	};
	render() {
		const {
			listName,
			listId,
			tasks,
			methods: { handleDeleteList, handleListNameUpdate, ...methods },
		} = this.props;
		const style = {
			backgroundColor: this.state.color,
		};

		return (
			<div className='List-div' style={style}>
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
						onChange={(e) => handleListNameUpdate(listId, e)}
					/>
					<button
						className='List-Change-Color-Button'
						onClick={this.changeColor}
					>
						<i className='fas fa-paint-brush'></i>
					</button>
					<button
						className='List-Delete-Button'
						onClick={(e) => handleDeleteList(listId, e)}
					>
						<i className='far fa-trash-alt'></i>
					</button>
				</div>
				<div className='List-Tasks-Container'>
					<AddTask listId={listId} methods={methods} taskText={'Add Task'} />
					{tasks.map((task) => (
						<Task
							key={task.id}
							taskText={task.text}
							taskId={task.id}
							listId={listId}
							isCompleted={task.completed}
							methods={methods}
						/>
					))}
				</div>
			</div>
		);
	}
}
