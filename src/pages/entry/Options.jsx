import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOtions from './ScoopOptions';
import { Row } from 'react-bootstrap';
import ToppingOptions from './ToppingOptions';
import AlertBanner from '../common/AlertBanner';
import { pricePerItem } from '../constants';
import { useOrderDetails } from '../contexts/OrderDetails';

function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDetails, updateItemCount] = useOrderDetails();

  // optionType is 'scoops'|colheres or 'toppings'|coberturas
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true));
    //@ts-ignore
    if (error) {
      return <AlertBanner />;
    }
  }, [error, optionType]);

  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
  const ItemComponent = optionType === 'scoops' ? ScoopOtions : ToppingOptions;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ));
  return (
    <>
      <h2>{title}</h2>
      <p>{pricePerItem[optionType]} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}

export default Options;
