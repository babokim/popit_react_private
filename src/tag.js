import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import TagPostsPage from './components/list/TagPostsPage';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/tag/:tag" component={TagPostsPage} />
    </div>
  </Router>, rootElement);