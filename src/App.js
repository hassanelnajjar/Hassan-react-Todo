import React, { useState } from 'react';
import data from './utils/data';
import './App.css';
import Header from './component/Header';
import Container from './component/Container';
import DeleteList from './component/DeleteList';
import Footer from './component/Footer';
import {
	addList,
	addTask,
	changeTask,
	deleteTask,
	makeSearchForValue,
	makeTaskComplete,
	makeTaskUnComplete,
	updateListName,
} from './utils/methods';

export default function App() {
	const [isDeleteAction, setIsDeleteAction] = useState(data.isDeleteAction);
	const [isDisplayVertical, setDisplay] = useState(data.display);
	const [theme, setTheme] = useState(data.theme);
	const [lists, setLists] = useState(data.lists);

	const handleListNameUpdate = (listId, event) =>
		setLists(updateListName(lists, listId, event.target.value));

	const handleAddList = () => setLists(addList(lists));

	const handleChangeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
	const handleSearch = (event) =>
		setLists(makeSearchForValue(lists, event.target.value));

	const handleDeleteListAfterConfirm = () => {
		setLists(lists.filter((list) => list.id !== isDeleteAction.payload.listId));
		setIsDeleteAction({ value: false, payload: {} });
	};

	const handleCancelButton = () =>
		setIsDeleteAction({ value: false, payload: {} });

	const handleDeleteList = (listId) =>
		setIsDeleteAction({ value: true, payload: { listId } });

	const handleInputTask = (taskId, listId, e) => {
		if (e.target.value.trim() === '') return;
		e.preventDefault();
		setLists(changeTask(lists, taskId, listId, e.target.value));
	};
	const handleChangeDisplay = () => setDisplay(!isDisplayVertical);

	const handleDeleteTask = (taskId, listId, event) => {
		event.preventDefault();
		setLists(deleteTask(lists, taskId, listId));
	};

	const handleCompleted = (taskId, listId) =>
		setLists(makeTaskComplete(lists, taskId, listId));

	const handleUnCompleted = (taskId, listId) =>
		setLists(makeTaskUnComplete(lists, taskId, listId));

	const handleAddTask = (listId, event) => {
		if (event.key !== 'Enter') return;
		if (event.target.value.trim() === '') return;

		return setLists(addTask(lists, listId, event.target.value));
	};

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
