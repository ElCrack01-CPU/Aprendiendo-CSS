import './components.css'; // Asegúrate de tener el archivo CSS vinculado

export const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram" aria-hidden="true" />
        </a>
      </div>
      <div className="footer-contact">
        <p>
          Contacto: 
          <a href="tel:+1234567890"> +53 58417973 </a> | 
          <a href="mailto:jonathan.quintana.caro@gmail.com"> jonathan.quintana.caro@gmail.com </a>
        </p>
      </div>
    </div>
  );
};


