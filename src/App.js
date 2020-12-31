import React, { Component } from 'react';
import data from './Utils/data';
import './App.css';
import Header from './Component/Header';
import Container from './Component/Container';
export default class App extends Component {
	state = data;

	handleListNameUpdate = (listId, event) => {
		const {
			target: { value },
		} = event;
		return this.setState((prevState) => ({
			lists: [
				...prevState.lists.filter((list) => list.id !== listId),
				{
					...prevState.lists.filter((list) => list.id === listId)[0],
					name: value,
				},
			],
		}));
	};
	handleSearch = (event) => {
		const {
			target: { value },
		} = event;
		this.setState((prevState) => {
			const foundTasks = {
				...prevState,
				lists: prevState.lists.reduce(
					(total, list, index) => {
						total[index] = {
							...list,
							tasks: list.tasks.filter((task) => task.text.includes(value)),
						};
						return total;
					},
					[{}]
				),
			};
			return value === '' ? data : foundTasks; // edit in local storage or database
		});
	};
	handleDeleteList = (listId) => {
		this.setState((prevState) => ({
			lists: prevState.lists.filter((list) => list.id !== listId),
		}));
	};
	handleInputTask = (taskId, listId, e) => {
		const {
			target: { value },
		} = e;
		e.preventDefault();
		this.setState((prevState) => ({
			...prevState,
			lists: [
				...prevState.lists.filter((list) => list.id !== listId),
				{
					...prevState.lists.filter((list) => list.id === listId)[0],
					tasks: [
						...prevState.lists
							.filter((list) => list.id === listId)[0]
							.tasks.filter((task) => task.id !== taskId),
						{
							...prevState.lists
								.filter((list) => list.id === listId)[0]
								.tasks.filter((task) => task.id === taskId)[0],
							text: value,
						},
					],
				},
			],
		}));
	};
	handleChangeDisplay = () => {
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
					methods={{
						handleSearch: this.handleSearch,
						handleChangeTheme: this.handleChangeTheme,
						handleChangeDisplay: this.handleChangeDisplay,
					}}
				/>
				{this.state.lists.length && (
					<Container
						lists={this.state.lists.sort((a, b) => a.id - b.id)}
						methods={{
							handleDeleteTask: this.handleDeleteTask,
							handleInputTask: this.handleInputTask,
							handleDeleteList: this.handleDeleteList,
							handleListNameUpdate: this.handleListNameUpdate,
						}}
						styles={this.state.display}
					/>
				)}
			</>
		);
	}
}
