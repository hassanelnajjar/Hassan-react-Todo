import React, { Component } from 'react';
import data from './utils/data';
import './App.css';
import Header from './component/Header';
import Container from './component/Container';
import DeleteList from './component/DeleteList';
import Footer from './component/Footer';
export default class App extends Component {
	state = data;

	handleListNameUpdate = (listId, event) => {
		const {
			target: { value },
		} = event;
		// if (value.trim() === ' ') {
		// 	return;
		// }
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
	handleDeleteListAfterConfirm = () => {
		this.setState((prevState) => {
			const { listId } = prevState.isDeleteAction.payload;
			return {
				lists: prevState.lists.filter((list) => list.id !== listId),
				isDeleteAction: { value: false, payload: {} },
			};
		});
	};

	handleCancelButton = () => {
		this.setState(() => {
			return {
				isDeleteAction: { value: false, payload: {} },
			};
		});
	};

	handleDeleteList = (listId) => {
		console.log('delete list');
		this.setState(() => ({
			isDeleteAction: { value: true, payload: { listId } },
		}));
	};

	handleInputTask = (taskId, listId, e) => {
		const {
			target: { value },
		} = e;
		if (value.trim() === '') return;
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
		if (value.trim() === '') return;
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
				tasks: [],
				color: 'listColor',
			};
			return {
				lists: [...prevState.lists, newList],
			};
		});
	};

	handleChangeTheme = () => {
		this.setState((prevState) => ({
			theme: prevState.theme === 'dark' ? 'light' : 'dark',
		}));
	};
	render() {
		return (
			<div className='AppContainer' data-theme={this.state.theme}>
				<Header
					methods={{
						handleSearch: this.handleSearch,
						handleChangeDisplay: this.handleChangeDisplay,
						handleChangeTheme: this.handleChangeTheme,
					}}
				/>

				{this.state.isDeleteAction.value ? (
					<DeleteList
						listName={
							this.state.lists.filter(
								(list) => list.id === this.state.isDeleteAction.payload.listId
							)[0].name
						}
						methods={{
							handleCancelButton: this.handleCancelButton,
							handleDeleteListAfterConfirm: this.handleDeleteListAfterConfirm,
						}}
					/>
				) : null}
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
						styles={{ display: this.state.display, theme: this.state.theme }}
						isDeleteAction={this.state.isDeleteAction.value}
					/>
				)}
				<Footer />
			</div>
		);
	}
}
