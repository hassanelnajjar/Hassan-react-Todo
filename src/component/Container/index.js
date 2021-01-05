import React from 'react';
import './style.css';
import List from '../List';
import AddButton from '../AddButton';
import ProtoType from 'prop-types';

const {
	array: { isRequired: arrayRequired },
	object: { isRequired: objectRequired },
	shape,
	bool: { isRequired: boolRequired },
	string: { isRequired: stringRequired },
} = ProtoType;

function Container(props) {
	const {
		lists,
		methods,
		styles: { display, theme },
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
								styles={{ display, theme }}
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

Container.protoType = {
	lists: arrayRequired,
	methods: objectRequired,
	styles: shape({
		display: boolRequired,
		theme: stringRequired,
	}),
	isDeleteAction: objectRequired,
};

export default Container;
