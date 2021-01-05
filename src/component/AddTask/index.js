import React from 'react';
import '../Task/style.css';
import ProtoType from 'prop-types';
const {
	shape,
	number: { isRequired: numberRequired },
	func: { isRequired: funcRequired },
} = ProtoType;
function Task(props) {
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

Task.propTypes = {
	listId: numberRequired,
	methods: shape({
		handleAddTask: funcRequired,
	}),
};
export default Task;
