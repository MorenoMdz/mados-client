import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListWrapper } from './styles';
import {
  Container,
  SideBar,
  MainContainer,
  SearchInput,
  BodyContainer,
  ServiceBox,
} from '../../components';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const Reports = props => {
  const { fetchServiceOrdersRequest, serviceOrder } = props;

  useEffect(() => {
    fetchServiceOrdersRequest();
  }, [fetchServiceOrdersRequest]);
  console.log('so', serviceOrder);
  return (
    <Container>
      <SideBar />
      <BodyContainer>
        <SearchInput />
        <MainContainer>
          <ListWrapper className="box top-full">
            <h1>Reports</h1>
            <ServiceBox serviceOrder={serviceOrder} />
          </ListWrapper>
          <div className="box bottom-full" />
          {/* <div className="box bottom-left" />
          <div className="box bottom-right" /> */}
        </MainContainer>
      </BodyContainer>
    </Container>
  );
};

Reports.propTypes = {
  serviceOrder: PropTypes.instanceOf(Object).isRequired,
  fetchServiceOrdersRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    serviceOrder: state.serviceOrders.order,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceOrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);
