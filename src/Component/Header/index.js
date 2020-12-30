import React from 'react';
import './style.css';
export default function Header(props) {
	const { handleSearch, handleChangeTheme, handleChangeDisplay } = props;
	return (
		<>
			<nav className='header-nav-bar'>
				<div className='header-user-name'>Hassan</div>
				<div className='header-search-div'>
					<i class='fas fa-search'></i>
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
						<i class='fas fa-bars'></i>
					</button>
					<button
						onChange={handleChangeTheme}
						className='header-change-theme-button'
					>
						<i class='fas fa-moon'></i>
					</button>
				</div>
			</nav>
		</>
	);
}
