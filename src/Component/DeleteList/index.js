import React from 'react';
import './style.css';
export default function DeleteList() {
	return (
		<div className='DeleteList-Div'>
			<div className='DeleteList-AlertText-Div'>
				<p className='DeleteList-AlertText'>Are you sure ?</p>
			</div>
			<div className='DeleteList-Buttons'>
				<button className='DeleteList-Cancel-Button'>Cancel</button>
				<button className='DeleteList-Delete-Button'>Delete</button>
			</div>
		</div>
	);
}
