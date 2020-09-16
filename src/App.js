import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

import CategoryProvider from './context/CategoryContext';

function App() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
