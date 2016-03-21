import App from './components/App';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import About from './components/About'
import Posts from './components/Posts';
import PostContainer from './containers/postContainer';
import Post from './components/Post';
import { render } from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

module.exports = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
        <Route name="about" path="/about" component={About}/>
        <Route name="posts" component={Posts}>
          <Route path="/posts/:postId" component={PostContainer}/>
        </Route>
      </Route>
    </Router>);