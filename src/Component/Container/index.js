import React from 'react';
import './style.css';
import List from '../List';
import AddButton from '../AddButton';
export default function Container(props) {
	const { lists, methods, styles } = props;
	return (
		<div className='Container-Div'>
			<div
				className={
					styles ? 'Container-Lists' : 'Container-Lists Container-Lists-Column'
				}
			>
				{lists.map(
					(list) =>
						list.tasks && (
							<List
								key={list.id}
								listName={list.name}
								tasks={list.tasks.sort((a, b) => b.id - a.id)}
								listId={list.id}
								methods={methods}
							/>
						)
				)}
			</div>

			<div className='Container-Buttons'>
				<AddButton handleAddList={methods.handleAddList} />
				<AddButton />
			</div>
		</div>
	);
}
