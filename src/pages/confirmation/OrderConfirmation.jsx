import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useOrderDetails } from '../../contexts/OrderDetails';

function OrderConfirmation({ setOrderPhase }) {
  const [, , resetOrder] = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function axiosCall() {
      const call = await axios
        .post('http://localhost:3030/order')
        .then((response) => {
          setOrderNumber(response.data.orderNumber);
        })
        .catch((error) => {
          //TODO: handle error here
        });
      return call;
    }
    // Execute the created function directly
    axiosCall();
  }, []);

  function handleClick() {
    // clear the order details
    resetOrder();
    // send back to order page
    setOrderPhase('inProgress');
  }

  if (orderNumber) {
    return (
      <div style={{ textAling: 'center' }}>
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p style={{ fontSize: '25%' }}>
          as per our terms and coditions, nothing will happen now
        </p>
        <Button onClick={handleClick}>Create new order</Button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default OrderConfirmation;
