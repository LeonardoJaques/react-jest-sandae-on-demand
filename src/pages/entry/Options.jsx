import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOtions from './ScoopOptions';
import { Row } from 'react-bootstrap';
import ToppingOptions from './ToppingOptions';

function Options({ optionType }) {
  const [items, setItems] = useState([]);

  // optionType is 'scoops'|colheres or 'toppings'|coberturas
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((erro) => {
        //TODO: handle error response
      });
  }, [optionType]);
  //TODO: replace 'null' with ToppingOption when available -> i choose use "&&"
  const ItemComponent = optionType === 'scoops' ? ScoopOtions : ToppingOptions;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{optionItems}</Row>;
}

export default Options;
