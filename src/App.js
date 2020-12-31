import React, { Component } from 'react';
import data from './Utils/data';
import './App.css';
import Header from './Component/Header';
import Container from './Component/Container';
export default class App extends Component {
	state = data;
	handleSearch = () => {};
	handleChangeTheme = () => {};
	handleChangeDisplay = () => {
		console.log('clikced');
		this.setState((prevState) => ({
			display: !prevState.display,
		}));
	};
	handleDeleteTask = (taskId, listId, event) => {
		event.preventDefault();
		this.setState((prevState) => ({
			...prevState,
			lists: [
				...prevState.lists.filter((list) => list.id !== listId),
				{
					...prevState.lists.filter((list) => list.id === listId)[0],
					tasks: prevState.lists
						.filter((list) => list.id === listId)[0]
						.tasks.filter((task) => task.id !== taskId),
				},
			],
		}));
	};
	render() {
		return (
			<>
				<Header
					handleSearch={this.handleSearch}
					handleChangeTheme={this.handleChangeTheme}
					handleChangeDisplay={this.handleChangeDisplay}
				/>
				<Container
					lists={this.state.lists.sort((a, b) => a.id - b.id)}
					methods={{ handleDeleteTask: this.handleDeleteTask }}
					styles={this.state.display}
				/>
			</>
		);
	}
}
