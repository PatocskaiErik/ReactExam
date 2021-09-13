import React, { useEffect, useState } from 'react';
import './style.css';
import Bootstrap, { Button } from 'react-bootstrap';

export default function App() {
  const CurrencyConverter = () => {
    const [forint, setForint] = useState('');
    const [euro, setEuro] = useState('');
    const [dollar, setDollar] = useState('');
  };
  const getRate = (first, second) => {
    axios({
      method: 'GET',
      url: ``
    })
      .then(response => {
        console.log(response.data);

        setRate(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      Forint(HUF)
      <br />
      <input type="number" min="0" />
    </div>
  );
}
