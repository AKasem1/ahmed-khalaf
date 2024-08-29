import React from 'react';

const PricingPackage = ({ grade, price, details }) => {
  return (
    <div className="pricing-package">
      <div className="price">
        <img src="https://atheer.co.il/wp-content/uploads/2022/09/Math-111-624x374-1.png" alt="price tag" />
      </div>
      <h3>{grade}</h3>
      <ul className="details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <button className="subscribe-btn">{price}</button>
    </div>
  );
};

export default PricingPackage;