import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/Landing';
import EditPage from './pages/edit';
import CreatePage from './pages/create';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/Create' element={<CreatePage/>} />
        <Route path='/Edit/:id' element={<EditPage/>} />
      </Routes>
    </Suspense>
  );
}

export default App;