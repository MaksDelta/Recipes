import React from 'react';
import { useParams } from 'react-router-dom'; // If using react-router
import useRecipe from '../hooks/useRecipe';

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Отримуємо ID з параметрів URL

  // Перевірка на undefined ID
  if (!id) {
    return <div>Помилка: ID рецепту не знайдено.</div>; // Повертаємо помилку, якщо ID не знайдено
  }

  // Викликаємо хук після перевірки наявності id
  const { data, error, isLoading } = useRecipe(id); // Тепер id гарантовано є рядком

  if (isLoading) {
    return <div>Завантаження...</div>;
  }

  // Додаємо перевірку для помилки
  if (error) {
    const errorMessage = (error as any).message || 'Сталася невідома помилка.';
    return <div>Помилка: {errorMessage}</div>;
  }

  // Якщо дані доступні, відображаємо їх
  return (
    <div>
      <h1>{data?.strMeal || 'Назва не знайдена'}</h1>
      <p>{data?.strInstructions || 'Інструкції не знайдені.'}</p>
    </div>
  );
};

export default RecipePage;
