import React from 'react';
import './components.css'; // Importamos los estilos CSS

export const Header = ({ userName }) => {
  return (
    <header className="header">
      <div className="user-info">
        <img
          src="https://th.bing.com/th/id/R.90d0f5d9f9112995fd69f4e80fbcd992?rik=tmi2iauHGYFojA&pid=ImgRaw&r=0"
          alt="Foto de Perfil"
          className="profile-pic"
        />
        <span className="user-name">{userName}</span>
      </div>

      {/* Contenedor para el menú de navegación y el botón */}
      <div className="nav-container">
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <button className="logout-btn">Log Out</button>
      </div>
    </header>
  );
};
