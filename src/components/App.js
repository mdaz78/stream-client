import React, { Component } from 'react';

import { HashRouter, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

class App extends Component {
  render() {
    return (
      <>
        <h1>Header</h1>
        <HashRouter>
          <>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit' exact component={StreamEdit} />
            <Route path='/streams/delete' exact component={StreamDelete} />
            <Route path='/streams/show' exact component={StreamShow} />
          </>
        </HashRouter>
      </>
    );
  }
}

export default App;
