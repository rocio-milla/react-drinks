import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

import CategoryProvider from './context/CategoryContext';
import RecipesProvider from './context/RecipesContext';

function App() {
  return (
    <CategoryProvider>
      <RecipesProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
        </div>
      </RecipesProvider>
    </CategoryProvider>
  );
}

export default App;
