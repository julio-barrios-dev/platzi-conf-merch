import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';


const usePositionAddress = (address) => {

  const { addCoord,test } = useContext(AppContext);

  const [map, setMap] = useState([0, 0]);
  const API = `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITION_STACK}&query=${address}`;

  
  useEffect(() => {
       fetch(API)
        .then(response => response.json())
        .then(dataLocation => {
          let data = dataLocation.data
          let lat = data[0].latitude;
          let long = data[0].longitude;
          const locati = [lat, long];
          addCoord(locati);
          test();
          setMap(locati);
        })
        .catch(error => console.log(error))
      },[]);
      return map;
    
};

export default usePositionAddress;