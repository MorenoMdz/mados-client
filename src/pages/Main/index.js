import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from './styles';
import {
  Container,
  SideBar,
  MainContainer,
  SearchInput,
  BodyContainer,
} from '../../components';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const Main = props => {
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
          <FaArrowUp color="#fff" size={14} />
          <h1>Main</h1>

          <List>
            {serviceOrders
              ? serviceOrders.map(so => (
                  <li key={so.id}>
                    <p>{so.serial_number}</p>
                    <p>{so.problem_description}</p>
                  </li>
                ))
              : null}
          </List>
          <Link to="/login">Login</Link>
        </MainContainer>
      </BodyContainer>
    </Container>
  );
};

Main.propTypes = {
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
)(Main);
