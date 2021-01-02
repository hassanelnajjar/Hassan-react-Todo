const data = {
	isDeleteAction: { value: false, payload: {} },
	display: true,
	theme: 'light',
	lists: [
		{
			id: 1,
			name: 'Shopping',
			color: 'listColor',
			tasks: [
				{
					id: 1,
					text: 'go to gym',
					date: '31-12-2020 6:00 pm',
					completed: true,
				},
			],
		},
		{
			id: 2,
			name: 'listname',
			color: 'listColor',
			tasks: [
				{
					id: 1,
					text: 'go to gym',
					date: '31-12-2020 6:00 pm',
					completed: false,
				},
				{
					id: 2,
					text: 'go to university',
					date: '31-12-2020 8:00 pm',
					completed: false,
				},
			],
		},
		{
			id: 3,
			name: 'listname2',
			color: 'listColor2',
			tasks: [
				{
					id: 1,
					text: 'go to gym',
					date: '31-12-2020 6:00 pm',
					completed: false,
				},
				{
					id: 2,
					text: 'go to university',
					date: '31-12-2020 8:00 pm',
					completed: false,
				},
			],
		},
	],
};

export default data;
