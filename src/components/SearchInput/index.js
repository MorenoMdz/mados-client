import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Form } from './styles';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const SearchInput = ({
  expand,
  width,
  searchServiceOrdersRequest,
  setOrderView,
}) => {
  const search = e => {
    searchServiceOrdersRequest(e.target.value, 'search');
    setOrderView({ active: true });
  };

  return (
    <Form>
      <Input
        placeholder="buscar"
        expand={expand}
        width={width}
        onChange={e => search(e)}
      />
    </Form>
  );
};

SearchInput.propTypes = {
  expand: PropTypes.bool,
  width: PropTypes.string,
  searchServiceOrdersRequest: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  expand: false,
  width: '500px',
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceOrdersActions, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(SearchInput);
