import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Categories extends Component {
	state = {
		categories: null
	}
	componentDidMount() {
		fetch('http://localhost:3001/categories', { headers: { 'Authorization': 'whatever-you-want' }})
		.then(results => results.json())
		.then(({categories}) => {
			this.setState({categories})
			console.log(categories)
		})
	}
	render() {
		const { categories } = this.state;
		const categoriesElements = categories && categories.map((category) => {
			return(
				<div key={category.path}>
					<div>{category.name}</div>
					<div>{category.path}</div>
				</div>
			)
		})
		return(
			<div>
				<div>{categoriesElements}</div>
			</div>
		);
	}
}

Categories.proptypes = {
	name: Proptypes.array.isRequire,
	path: Proptypes.string.isRequire
}
export default Categories;