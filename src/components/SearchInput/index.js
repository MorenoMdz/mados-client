import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Form } from './styles';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const SearchInput = ({
  placeHolder,
  expand,
  width,
  compact,
  searchServiceOrdersRequest,
  setOrderView,
}) => {
  const search = e => {
    searchServiceOrdersRequest(e.target.value, 'search');
    setOrderView({ active: true });
  };

  return (
    <Form compact={compact}>
      <Input
        placeholder={placeHolder}
        expand={expand}
        width={width}
        onChange={e => search(e)}
      />
    </Form>
  );
};

SearchInput.propTypes = {
  placeHolder: PropTypes.string,
  compact: PropTypes.bool,
  expand: PropTypes.bool,
  width: PropTypes.string,
  searchServiceOrdersRequest: PropTypes.func.isRequired,
  setOrderView: PropTypes.func,
};

SearchInput.defaultProps = {
  placeHolder: 'buscar',
  compact: false,
  expand: false,
  width: '500px',
  setOrderView: () => {},
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceOrdersActions, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(SearchInput);
