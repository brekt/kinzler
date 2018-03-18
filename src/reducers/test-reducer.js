export default (state = [], action) => {
	let newCount;
	switch (action.type) {
		case 'increase':
			newCount = state.testCount + 1;
			return [...state, { testCount: newCount }];
		case 'decrease':
			newCount = state.testCount - 1;
			return [...state, { testCount: newCount }];
		default:
			return state;
	}
};
