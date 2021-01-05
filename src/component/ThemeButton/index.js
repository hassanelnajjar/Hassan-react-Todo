import React from 'react';
import './style.css';
import ProtoType from 'prop-types';

const {
	shape,
	func: { isRequired: funcRequired },
} = ProtoType;

function ThemeButton(props) {
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

ThemeButton.protoType = {
	methods: shape({
		handleChangeTheme: funcRequired,
	}),
};

export default ThemeButton;
