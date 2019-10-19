import React from 'react';
import PropTypes from 'prop-types';

import { Container, OrderHeader } from './styles';

const OrderView = ({ orderId }) => {
  return (
    <Container>
      <OrderHeader>Order View</OrderHeader>
      {orderId ? <span>{orderId}</span> : <span>No Order Requested</span>}
    </Container>
  );
};

OrderView.propTypes = {
  orderId: PropTypes.number,
};

OrderView.defaultProps = {
  orderId: '',
};

export default OrderView;
