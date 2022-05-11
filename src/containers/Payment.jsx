import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Payment.css';

function Payment() {
  const { state: { cart, buyer }, addNewOrder, handleSumTotal } = useContext(AppContext);
  const navigate = useNavigate();

  const handlePymentSuccess = () => {
    const newOrder = {
      buyer,
      product: cart
    }
    addNewOrder(newOrder);
    navigate('/checkout/success');
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item, index) => (
          <div className="Payment-item" key={index}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-element">
              <h4>Total:</h4>
              <span>
                $
                {' '}
                {handleSumTotal()}
              </span>
            </div>
        <div className="Payment-button">
          <button type='button' onClick={handlePymentSuccess}>
            Boton de pago Paypal
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment; 
