import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, OrderHeader } from './styles';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const SearchInput = ({
  expand,
  setOrderView,
  serviceOrder: { os_number, created_at, store, priority },
}) => {
  // TODO Loading
  return (
    <Container>
      <OrderHeader expand={expand}>
        <span className="so-number">{os_number || 'loading...'}</span>
        <div className="header-wrapper">
          <div className="header-card">
            <span>
              Loja: <b>{store && store.name}</b>{' '}
            </span>
            <span>
              Entrada: <b>{created_at && created_at}</b>
            </span>
          </div>
          <div className="header-card">
            <span>
              Prioridade: <b>{priority && priority.title}</b>
            </span>
            <span>Status: TODO </span>
          </div>
        </div>
        <div className="header-actions">
          <button type="button" onClick={() => setOrderView({ active: true })}>
            Voltar{' '}
          </button>
          <button type="button">Histórico </button>
        </div>
      </OrderHeader>
    </Container>
  );
};

SearchInput.propTypes = {
  expand: PropTypes.bool,
};

SearchInput.defaultProps = {
  expand: false,
};

// check if there needs to be a re fetch or not
const mapStateToProps = state => ({
  serviceOrder: state.serviceOrders.order,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceOrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
