import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import CheckoutItem from '../components/CheckoutItem';
import '../styles/components/Checkout.css';

function Checkout() {
  const {
    state: { cart },
    removeFromCart,
    handleSumTotal
  } = useContext(AppContext);
  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de pedidos' : 'Sin pedidos...'}</h3>
        {cart.map((item, index) => (
          <CheckoutItem item={item} handleRemove={handleRemove} index={index} />
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
