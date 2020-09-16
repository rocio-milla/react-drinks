import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

import CategoryProvider from './context/CategoryContext';
import RecipesProvider from './context/RecipesContext';
import ModalProvider from './context/ModalContext';
import RecipesList from './components/RecipesList';

function App() {
  return (
    <CategoryProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipesList />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoryProvider>
  );
}

export default App;
