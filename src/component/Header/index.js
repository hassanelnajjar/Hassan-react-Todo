import React from 'react';
import './style.css';
export default function Header(props) {
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
					<button
						onClick={handleChangeTheme}
						className='header-change-theme-button'
					>
						<i className='fas fa-moon'></i>
					</button>
				</div>
			</nav>
		</>
	);
}
