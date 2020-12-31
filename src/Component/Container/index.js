import React from 'react';
import './style.css';
import List from '../List';
import AddButton from '../AddButton';
export default function Container(props) {
	const { lists } = props;
	return (
		<div className='Container-Div'>
			<div className='Container-Lists'>
				{' '}
				{lists.map((list) => (
					<List key={list.id} listName={list.name} tasks={list.tasks} />
				))}
			</div>
			<div className='Container-Buttons'>
				<AddButton />
				<AddButton />
			</div>
		</div>
	);
}
