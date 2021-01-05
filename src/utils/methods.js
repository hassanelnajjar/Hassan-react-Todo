export function makeTaskUnComplete(lists, taskId, listId) {
	return [
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
	];
}
export function makeTaskComplete(lists, taskId, listId) {
	return [
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
	];
}

export function changeTask(lists, taskId, listId, value) {
	return [
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
	];
}

export function makeSearchForValue(lists, value) {
	return [
		...lists.reduce(
			(total, list, index) => {
				total[index] = {
					...list,
					tasks: list.tasks.filter((task) => task.text.includes(value)),
				};
				return total;
			},
			[{}]
		),
	];
}

export function updateListName(lists, listId, value) {
	return [
		...lists.filter((list) => list.id !== listId),
		{
			...lists.filter((list) => list.id === listId)[0],
			name: value,
		},
	];
}

export function addList(lists) {
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
	return [...lists, newList];
}
export function addTask(lists, listId, value) {
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
	return [...lists.filter((list) => list.id !== listId), newList];
}

export function deleteTask(lists, taskId, listId) {
	return [
		...lists.filter((list) => list.id !== listId),
		{
			...lists.filter((list) => list.id === listId)[0],
			tasks: lists
				.filter((list) => list.id === listId)[0]
				.tasks.filter((task) => task.id !== taskId),
		},
	];
}
