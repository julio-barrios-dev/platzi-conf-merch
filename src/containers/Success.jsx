import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map'
import usePositionAddress from '../hooks/usePositionAddress';
import useIntialState from '../hooks/useInitialState';
import '../styles/components/Success.css';
import '../styles/components/Map.css';

function Success() {

  const { state } = useContext(AppContext);
  const { buyer, coord } = state;
  const location = () => {
    if(coord[0] == undefined) {
      return [0, 0];
    }
    return coord[0];
  }
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0]?.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map data={location()}/>
        </div>
      </div>
    </div>
  );
}

export default Success;
