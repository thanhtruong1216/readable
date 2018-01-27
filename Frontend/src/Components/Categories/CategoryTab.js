import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

function TabContainer(props) {
  return (
    <Typography>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  flexContainer: {
    justifyContent: 'space-between',
    backgroundColor: 'mediumseagreen',
  }
});

class BasicTabs extends React.Component {
  state = {
    value: window.location.pathname,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    console.log({value})
  };

  render() {
    const { classes, categories } = this.props;
    const { value } = this.state;
    return (
      <div className="a">
        <AppBar position="static">
          <Tabs 
            classes={{
              flexContainer: classes.flexContainer,
            }}
            value={value} 
            onChange={this.handleChange}
          >
            <Tab label="Home" value={"/"} component={(props) => <Link to="/" {...props}/>}/>

            {categories.map(cat => 
              <Tab label={cat.name} key={cat.name} value={`/categories/${cat.name}`} component={(props) => <Link to={`/categories/${cat.name}`} {...props}/>}/>
            )}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

BasicTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
    categories: state.categories
  }
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(BasicTabs);
