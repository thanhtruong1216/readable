import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Category from './Category';
import { connect } from 'react-redux';

class Categories extends Component {
	render() {
		const { categories } = this.props;
		return(
			<div>
				{ categories.map((category, index) => <Category category={category} key={index}/>) }
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
  return {
  }
}

// Categories.proptypes = {
//  name: Proptypes.array.isRequire,
//  path: Proptypes.string.isRequire
// }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);