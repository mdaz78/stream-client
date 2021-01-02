import React, { Component } from 'react';

import { HashRouter, Route } from 'react-router-dom';

import Header from './Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

class App extends Component {
  render() {
    return (
      <div className='ui container'>
        <HashRouter>
          <>
            <Header />
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit' exact component={StreamEdit} />
            <Route path='/streams/delete' exact component={StreamDelete} />
            <Route path='/streams/show' exact component={StreamShow} />
          </>
        </HashRouter>
      </div>
    );
  }
}

export default App;
