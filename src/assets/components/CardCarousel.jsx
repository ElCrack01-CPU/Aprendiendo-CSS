import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch'; // Asegúrate de importar el custom hook
import { fetchProducts } from '../services/GetProductsApi';
import './components.css';

export const CardCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const limit = 5; 
  const { data: cards, loading, error } = useFetch(fetchProducts, currentPage, limit);

  const visibleCards = 3; // Número de tarjetas visibles a la vez

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage * limit >= cards.length;

  // Cambiar al índice anterior
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Cambiar al índice siguiente
  const handleNextClick = () => {
    // Verificar que haya suficientes productos disponibles para la siguiente página
    if (cards.length >= limit) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Obtener las tarjetas visibles basadas en el índice actual
  const getVisibleCards = () => {
    const startIndex = (currentPage - 1) * limit;
    return cards.slice(startIndex, startIndex + visibleCards); // Asegúrate de no sobrepasar el límite de productos
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="card-carousel">
      <hr />
      <div className="carousel-content">
        <div className="card-container">
          <button className='button-card' onClick={handlePrevClick} disabled={isPrevDisabled}><i className="fa fa-arrow-left" /></button>
          {getVisibleCards().map((card) => (
            <div key={card.id} className="card">
              <img src={card.image} alt={card.title} className="circular-image" />
              <p>{card.title}</p>
            </div>
          ))}
          
          <button className='button-card' onClick={handleNextClick} disabled={isNextDisabled}><i className="fa fa-arrow-right" /></button>
        </div>
      </div>
    </div>
  );
};