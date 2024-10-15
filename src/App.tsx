import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from './components/HomePage';
import RecipePage from './components/RecipePage';
import SelectedRecipesPage from './components/SelectedRecipesPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
      <RecipePage />
      <SelectedRecipesPage />
    </QueryClientProvider>
  );
};

export default App;