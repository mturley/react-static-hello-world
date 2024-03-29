import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Router } from '@reach/router';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

const App: React.FunctionComponent = () => (
  <Root>
    <React.Suspense fallback={<em>Loading...</em>}>
      <Router>
        <Routes path="*" />
      </Router>
    </React.Suspense>
  </Root>
);

export default App;
