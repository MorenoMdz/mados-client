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
  ServiceManager,
} from '../../components';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const Dev = props => {
  const { fetchServiceOrdersRequest } = props;

  useEffect(() => {
    fetchServiceOrdersRequest();
  }, [fetchServiceOrdersRequest]);

  return (
    <Container>
      <SideBar />
      <BodyContainer>
        <SearchInput />
        <MainContainer>
          <ListWrapper className="box top-full">
            <ServiceManager />
          </ListWrapper>
          <div className="box bottom-full" />
          {/* <div className="box bottom-left" />
          <div className="box bottom-right" /> */}
        </MainContainer>
      </BodyContainer>
    </Container>
  );
};

Dev.propTypes = {
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
)(Dev);
