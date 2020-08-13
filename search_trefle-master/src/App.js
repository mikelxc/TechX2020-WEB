import React from 'react';
import SearchContainer from './routes/search/containers/SearchContainer';
import Home from './routes/home/Home';
import { Router } from '@reach/router';

function App() {
  return (
    <Router>
        <Home path = "/"/>
        <SearchContainer path = "/search"/>
    </Router>
  );
}

export default App;
