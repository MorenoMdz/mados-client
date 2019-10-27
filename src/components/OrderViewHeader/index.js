import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, OrderHeader } from './styles';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const SearchInput = ({ expand }) => {
  return (
    <Container>
      <OrderHeader expand={expand} />
    </Container>
  );
};

SearchInput.propTypes = {
  expand: PropTypes.bool,
};

SearchInput.defaultProps = {
  expand: false,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceOrdersActions, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(SearchInput);
