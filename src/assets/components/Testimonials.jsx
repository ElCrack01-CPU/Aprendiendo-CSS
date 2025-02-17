import React, { useState } from 'react';
import './components.css';

export const Testimonials = ({ testimonials }) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);
  
    const handleImageClick = (testimonial) => {
      setCurrentTestimonial(testimonial);
    };
  
    return (
      <div className="testimonials-container">
        <hr />
        <div className="testimonial-comment">
          <p>{currentTestimonial.comment}</p>
          <h3>{currentTestimonial.name}</h3>
        </div>
        <div className="testimonial-carousel">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="carousel-item"
              onClick={() => handleImageClick(testimonial)}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="circular-image-testimonials"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };