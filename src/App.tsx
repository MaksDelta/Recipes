import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RecipesPage from './pages/RecipesPage';
import RecipePage from './pages/RecipePage';
import SelectedRecipesPage from './pages/SelectedRecipesPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<RecipesPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
            <Route path="/selected-recipes" element={<SelectedRecipesPage selectedRecipes={[]} />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    );
  };

  export default App;
