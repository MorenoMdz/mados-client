import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListWrapper, List, ListHeader } from './styles';
import {
  Container,
  SideBar,
  MainContainer,
  SearchInput,
  BodyContainer,
} from '../../components';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const Admin = props => {
  const { fetchServiceOrdersRequest } = props;

  useEffect(() => {
    fetchServiceOrdersRequest();
  }, [fetchServiceOrdersRequest]);

  const { serviceOrders } = props;
  console.log(serviceOrders);
  return (
    <Container>
      <SideBar />
      <BodyContainer>
        <SearchInput />
        <MainContainer>
          <ListWrapper className="box top-full">
            <h1>Admin</h1>
          </ListWrapper>
          <div className="box bottom-full" />
          {/* <div className="box bottom-left" />
          <div className="box bottom-right" /> */}
        </MainContainer>
      </BodyContainer>
    </Container>
  );
};

Admin.propTypes = {
  serviceOrders: PropTypes.instanceOf(Array).isRequired,
  fetchServiceOrdersRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    serviceOrders: state.serviceOrders.data,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceOrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
