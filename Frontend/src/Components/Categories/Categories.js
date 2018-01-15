import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Category from './Category';
import { connect } from 'react-redux';

class Categories extends Component {
	render() {
		const { categories } = this.props;
		return(
			<div className="categories">
				{ categories.map((category, index) => <Category category={ category } key={index}/>) }
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

Categories.proptypes = {
 categories: Proptypes.array.isRequired
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);