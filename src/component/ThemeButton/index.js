import React from 'react';
import './style.css';

export default function ThemeButton(props) {
	const {
		methods: { handleChangeTheme },
	} = props;
	return (
		<label className='ThemeButton-label' htmlFor='ThemeButton-button'>
			<input
				className='ThemeButton-button'
				type='checkbox'
				name='ThemeButton-button'
				id='ThemeButton-button'
				onClick={handleChangeTheme}
			/>
			<span className='ThemeButton-background'></span>
			<span className='ThemeButton-span'></span>
		</label>
	);
}
