import React from 'react';
import './style.css';
import List from '../List';
import AddButton from '../AddButton';
export default function Container(props) {
	const {
		lists,
		methods,
		styles: { display, ...styles },
		isDeleteAction,
	} = props;
	return (
		<div className='Container-Div'>
			<div
				className={isDeleteAction ? 'Container-DeleteList-Overlay' : ''}
			></div>
			<div
				className={
					display ? 'Container-Lists' : 'Container-Lists Container-Lists-Column'
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
								styles={styles}
							/>
						)
				)}
			</div>

			<div className='Container-Buttons'>
				<AddButton handleAddList={methods.handleAddList} />
			</div>
		</div>
	);
}
