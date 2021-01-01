import React from 'react';
import './style.css';
export default function DeleteList(props) {
	const {
		listName,
		methods: { handleCancelButton, handleDeleteListAfterConfirm },
	} = props;
	return (
		<div className='DeleteList-Div'>
			<div className='DeleteList-AlertText-Div'>
				<p className='DeleteList-AlertText'>
					Do you Want to delete{' '}
					<span class='DeleteList-ListName-Span'>{listName}</span> list ?
				</p>
				<p className='DeleteList-AlertText'>
					All tasks in it will also be deleted
				</p>
			</div>
			<div className='DeleteList-Buttons'>
				<button
					className='DeleteList-Cancel-Button'
					onClick={handleCancelButton}
				>
					Cancel
				</button>
				<button
					className='DeleteList-Delete-Button'
					onClick={handleDeleteListAfterConfirm}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
