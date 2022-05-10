import React from 'react';

function CheckoutItem({ item, handleRemove, index }) {
  return (
    <div className="Checkout-item">
      <div className="Checkout-element">
        <h4>{item.title}</h4>
        <span>
          $
          {item.price}
        </span>
      </div>
      <button type="button" onClick={handleRemove(index)}>
        <i className="fa-solid fa-trash-can" />
      </button>
    </div>
  );
}

export default CheckoutItem;