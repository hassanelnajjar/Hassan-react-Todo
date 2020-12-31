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

	handleCompleted = (taskId, listId) => {
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
							completed: true,
						},
					],
				},
			],
		}));
	};
	handleUnCompleted = (taskId, listId) => {
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
							completed: false,
						},
					],
				},
			],
		}));
	};

	handleAddTask = (listId, event) => {
		if (event.key !== 'Enter') return;
		const {
			target: { value },
		} = event;
		this.setState((prevState) => {
			const currentList = prevState.lists.filter(
				(list) => list.id === listId
			)[0];
			const currentMaxId = currentList.tasks.reduce(
				(total, task) => (total > task.id ? total : task.id),
				-Infinity
			);
			const newTask = {
				id: currentMaxId + 1,
				completed: false,
				date: '31-12-2020',
				text: value,
			};
			const newList = {
				...currentList,
				tasks: [...currentList.tasks, newTask],
			};
			return {
				...prevState,
				lists: [
					...prevState.lists.filter((list) => list.id !== listId),
					newList,
				],
			};
		});
	};

	handleAddList = () => {
		this.setState((prevState) => {
			const currentMaxId = prevState.lists.reduce(
				(total, task) => (total > task.id ? total : task.id),
				-Infinity
			);
			const newList = {
				id: currentMaxId + 1,
				name: `listname${currentMaxId + 1}`,
				task: [],
				color: 'listColor',
			};
			return {
				lists: [...prevState.lists, newList],
			};
		});
	};
	render() {
		return (
			<>
				<Header
					methods={{
						handleSearch: this.handleSearch,
						handleChangeDisplay: this.handleChangeDisplay,
					}}
				/>
				{console.log(this.state.lists)}
				{this.state.lists.length && (
					<Container
						lists={this.state.lists.sort((a, b) => a.id - b.id)}
						methods={{
							handleDeleteTask: this.handleDeleteTask,
							handleInputTask: this.handleInputTask,
							handleDeleteList: this.handleDeleteList,
							handleListNameUpdate: this.handleListNameUpdate,
							handleCompleted: this.handleCompleted,
							handleUnCompleted: this.handleUnCompleted,
							handleAddTask: this.handleAddTask,
							handleAddList: this.handleAddList,
						}}
						styles={this.state.display}
					/>
				)}
			</>
		);
	}
}
