import appReducer from './reducers/index';

export default function main() {
	let state = [
		{author: 'Thanh Thanh', id: 2},
		{author: 'Tan Tan', id:  1}
	];

	const action = {
		type: 'DELETE_POST', author: 'Thanh Thanh'
	};

	const stateAfter = appReducer(state, action)

	// console.log({state, action, stateAfter})
} 