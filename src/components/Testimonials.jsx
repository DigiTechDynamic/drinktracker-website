import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Chen',
      location: 'New York, NY',
      image: 'user-2',
      text: "As someone who struggled with tracking my alcohol intake, DrinkSmart has been a game-changer. The app's insights have helped me make healthier choices.",
      rating: 4
    },
    {
      name: 'Michael Chen',
      location: 'New York, NY',
      image: 'user-2',
      text: "As someone who struggled with tracking my alcohol intake, DrinkSmart has been a game-changer. The app's insights have helped me make healthier choices.",
      rating: 4
    },
  ];

  return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img src={`/images/${testimonial.image}.jpg`} alt={testimonial.name} />
          <h3>{testimonial.name}</h3>
          <p className="location">{testimonial.location}</p>
          <p className="quote">"{testimonial.text}"</p>
          <div className="rating">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;