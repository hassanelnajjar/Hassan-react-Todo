import React from 'react';
import ThemeButton from '../ThemeButton';
import './style.css';
import ProtoType from 'prop-types';

const {
	shape,
	func: { isRequired: funcRequired },
} = ProtoType;

function Header(props) {
	const {
		methods: { handleSearch, handleChangeTheme, handleChangeDisplay },
	} = props;
	return (
		<>
			<nav className='header-nav-bar'>
				<div className='header-user-name'>Hassan</div>
				<div className='header-search-div'>
					<i className='fas fa-search'></i>
					<input
						className='header-search-input'
						type='search'
						name='search'
						id='search'
						placeholder='Search'
						onChange={handleSearch}
					/>
				</div>
				<div className='header-options'>
					<button
						onClick={handleChangeDisplay}
						className='header-change-display-button'
					>
						<i className='fas fa-bars'></i>
					</button>
					<ThemeButton methods={{ handleChangeTheme }} />
				</div>
			</nav>
		</>
	);
}

Header.protoType = {
	methods: shape({
		handleSearch: funcRequired,
		handleChangeTheme: funcRequired,
		handleChangeDisplay: funcRequired,
	}),
};

export default Header;
