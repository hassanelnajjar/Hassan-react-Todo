import React, { useState } from 'react';
import data from './utils/data';
import './App.css';
import Header from './component/Header';
import Container from './component/Container';
import DeleteList from './component/DeleteList';
import Footer from './component/Footer';
export default function App() {
	const [isDeleteAction, setIsDeleteAction] = useState(data.isDeleteAction);
	const [isDisplayVertical, setDisplay] = useState(data.display);
	const [theme, setTheme] = useState(data.theme);
	const [lists, setLists] = useState(data.lists);

	const handleListNameUpdate = (listId, event) =>
		setLists([
			...lists.filter((list) => list.id !== listId),
			{
				...lists.filter((list) => list.id === listId)[0],
				name: event.target.value,
			},
		]);
	const handleSearch = (event) =>
		setLists([
			...lists.reduce(
				(total, list, index) => {
					total[index] = {
						...list,
						tasks: list.tasks.filter((task) =>
							task.text.includes(event.target.value)
						),
					};
					return total;
				},
				[{}]
			),
		]);

	const handleDeleteListAfterConfirm = () => (
		setLists(lists.filter((list) => list.id !== isDeleteAction.payload)),
		setIsDeleteAction({ value: false, payload: {} })
	);

	const handleCancelButton = () =>
		setIsDeleteAction({ value: false, payload: {} });

	const handleDeleteList = (listId) =>
		setIsDeleteAction({ value: true, payload: { listId } });

	const handleInputTask = (taskId, listId, e) => {
		const {
			target: { value },
		} = e;
		if (value.trim() === '') return;
		e.preventDefault();
		setLists([
			...lists.filter((list) => list.id !== listId),
			{
				...lists.filter((list) => list.id === listId)[0],
				tasks: [
					...lists
						.filter((list) => list.id === listId)[0]
						.tasks.filter((task) => task.id !== taskId),
					{
						...lists
							.filter((list) => list.id === listId)[0]
							.tasks.filter((task) => task.id === taskId)[0],
						text: value,
					},
				],
			},
		]);
	};
	const handleChangeDisplay = () => setDisplay(!isDisplayVertical);

	const handleDeleteTask = (taskId, listId, event) => (
		event.preventDefault(),
		setLists([
			...lists.filter((list) => list.id !== listId),
			{
				...lists.filter((list) => list.id === listId)[0],
				tasks: lists
					.filter((list) => list.id === listId)[0]
					.tasks.filter((task) => task.id !== taskId),
			},
		])
	);

	const handleCompleted = (taskId, listId) =>
		setLists([
			...lists.filter((list) => list.id !== listId),
			{
				...lists.filter((list) => list.id === listId)[0],
				tasks: [
					...lists
						.filter((list) => list.id === listId)[0]
						.tasks.filter((task) => task.id !== taskId),
					{
						...lists
							.filter((list) => list.id === listId)[0]
							.tasks.filter((task) => task.id === taskId)[0],
						completed: true,
					},
				],
			},
		]);

	const handleUnCompleted = (taskId, listId) =>
		setLists([
			...lists.filter((list) => list.id !== listId),
			{
				...lists.filter((list) => list.id === listId)[0],
				tasks: [
					...lists
						.filter((list) => list.id === listId)[0]
						.tasks.filter((task) => task.id !== taskId),
					{
						...lists
							.filter((list) => list.id === listId)[0]
							.tasks.filter((task) => task.id === taskId)[0],
						completed: false,
					},
				],
			},
		]);

	const handleAddTask = (listId, event) => {
		if (event.key !== 'Enter') return;
		const {
			target: { value },
		} = event;
		if (value.trim() === '') return;

		const currentList = lists.filter((list) => list.id === listId)[0];
		const currentMaxId = currentList.tasks.reduce(
			(total, task) => (total > task.id ? total : task.id),
			-Infinity
		);
		const newTask = {
			id: currentMaxId + 1,
			completed: false,
			date: '31-12-2020', // default
			text: value,
		};
		const newList = {
			...currentList,
			tasks: [...currentList.tasks, newTask],
		};

		return setLists([...lists.filter((list) => list.id !== listId), newList]);
	};

	const handleAddList = () => {
		const currentMaxId = lists.reduce(
			(total, task) => (total > task.id ? total : task.id),
			-Infinity
		);
		const newList = {
			id: currentMaxId + 1,
			name: `listName${currentMaxId + 1}`,
			tasks: [],
			color: 'listColor',
		};
		return setLists([...lists, newList]);
	};

	const handleChangeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

	return (
		<div className='AppContainer' data-theme={theme}>
			<Header
				methods={{
					handleSearch,
					handleChangeDisplay,
					handleChangeTheme,
				}}
			/>

			{isDeleteAction.value ? (
				<DeleteList
					listName={
						lists.filter((list) => list.id === isDeleteAction.payload.listId)[0]
							.name
					}
					methods={{
						handleCancelButton,
						handleDeleteListAfterConfirm,
					}}
				/>
			) : null}
			{lists.length && (
				<Container
					lists={lists.sort((a, b) => a.id - b.id)}
					methods={{
						handleDeleteTask,
						handleInputTask,
						handleDeleteList,
						handleListNameUpdate,
						handleCompleted,
						handleUnCompleted,
						handleAddTask,
						handleAddList,
					}}
					styles={{ display: isDisplayVertical, theme }}
					isDeleteAction={isDeleteAction.value}
				/>
			)}
			<Footer />
		</div>
	);
}
