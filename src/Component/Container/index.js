import React from 'react';
import './style.css';
import List from '../List';
import AddButton from '../AddButton';
export default function Container(props) {
	const { lists, methods, styles } = props;
	return (
		<div className='Container-Div'>
			{console.log(styles)}
			<div
				className={
					styles ? 'Container-Lists' : 'Container-Lists Container-Lists-Column'
				}
			>
				{lists.map((list) => (
					<List
						key={list.id}
						listName={list.name}
						tasks={list.tasks}
						listId={list.id}
						methods={methods}
					/>
				))}
			</div>
			<div className='Container-Buttons'>
				<AddButton />
				<AddButton />
			</div>
		</div>
	);
}
