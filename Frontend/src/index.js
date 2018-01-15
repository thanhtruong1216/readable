import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux';
import reducers from './reducers';
import { Route } from 'react-router-dom';
import PostDetail from './Components/Posts/PostDetail';
import CommentDetail from './Components/Comments/CommentDetail';
import CategoryPage from './Components/Categories/CategoryPage';

const history = createHistory()
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
       <Route exact path="/" component={App} />
       <Route path="/categories/:category" component={CategoryPage} /> 
       <Route path="/category/:category/:id" component={PostDetail}/> 
       <Route path="/comment/:id" component={CommentDetail}/>

      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();

/*

       Namespacing

       <Route path="/post/:id" component={CommentDetail}/>
       <Route path="/user/:id" component={CommentDetail}/>
       <Route path="/image/:id" component={CommentDetail}/>


/*


for route in routes:
  if match(current_path, route.path):
    render_view_component(route.component, props={match: match})


def match(current_path, route_path):
  matched examples:
  
  - route_path
  - current_path
  
  - '/'
  - '/'

  - /category
  - /category


  - /comment
  - /comment

  Ex 1: <Route path="/:category" component={CategoryPage} /> 

  Matches:

  - /:catetogory <=> /*
  - /react => component get props match = {params: { category: 'react' } }

  - /:catetogory <=> /*
  - /redux => component get props match = {params: { category: 'redux' } }


  - /:catetogory <=> /*
  - /ca => component get props match = {params: { category: 'ca' } }


  - /:catetogory <=> /*
  - /post_id => component get props match = {params: { category: 'post_id' } }

  - /:catetogory <=> /*
  - /8xf0y6ziyjabvozdd253nd => component get props match = {params: { category: '8xf0y6ziyjabvozdd253nd' } }

  - /:catetogory <=> /*
  - /: => component get props match = {params: { category: ':' } }

  - /:catetogory <=> /*
  - /:/ => component get props match = {params: { category: ':' } }


  - /:catetogory <=> /*
  - /:?query_name=abc => component get props match = {params: { category: ':' }, query: {query_name: 'abc'} }


  Not Matches:

  - /:catetogory <=> /* => 1 route param
  - /abc/def => why? 1 route param vs 2 route params


  Ex 2: <Route path="/category/:category" component={CategoryPage} /> 

  Matches:

  - /category/:catetogory <=> /*
  - /category/react => component get props match = {params: { category: 'react' } }

  - /category/:catetogory <=> /*
  - /category/redux => component get props match = {params: { category: 'redux' } }


  - /category/:catetogory <=> /*
  - /category/ca => component get props match = {params: { category: 'ca' } }


  - /category/:catetogory <=> /*
  - /category/post_id => component get props match = {params: { category: 'post_id' } }

  - /category/:catetogory <=> /*
  - /category/8xf0y6ziyjabvozdd253nd => component get props match = {params: { category: '8xf0y6ziyjabvozdd253nd' } }

  - /category/:catetogory <=> /*
  - /category/: => component get props match = {params: { category: ':' } }

  - /:catetogory <=> /*
  - /category/:/ => component get props match = {params: { category: ':' } }


  - /category/:catetogory <=> /*
  - /:/?query_name=abc => component get props match = {params: { category: ':' }, query: {query_name: 'abc'} }


  Not Matches:

  - /category/:catetogory <=> /* => 1 route param
  - /abc/def => why? not start with /category

  - /category/:catetogory <=> /* => 1 route param
  - /category/def/a/ => why? more than 1 route params
  


*/