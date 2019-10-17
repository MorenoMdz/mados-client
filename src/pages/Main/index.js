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
} from '../../components';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const Main = props => {
  const {
    serviceOrders,
    site: { sideBarExpanded },
    fetchServiceOrdersRequest,
  } = props;

  useEffect(() => {
    fetchServiceOrdersRequest();
  }, [fetchServiceOrdersRequest]);

  console.log('sideBarExpanded', props.site);
  return (
    <Container>
      <SideBar />
      <BodyContainer>
        <SearchInput expand={sideBarExpanded} width="500px" />
        <MainContainer expand={sideBarExpanded}>
          <ListWrapper className="box top-full">
            <table>
              <thead>
                <tr>
                  <th>OS</th>
                  <th>Entrada</th>
                  <th>Cliente</th>
                  <th>Aparelho</th>
                  <th>Problema</th>
                  {/* <th>Diagnóstico</th> */}
                  {/* <th>Valor</th> */}
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {serviceOrders
                  ? serviceOrders.map(so => (
                      <tr key={so.id}>
                        <td>{so.serial_number}</td>
                        <td>{so.created_at}</td>
                        <td>{so.client.name}</td>
                        <td>{so.equipment.name}</td>
                        <td>{so.problem_description}</td>
                        {/* <td>Portugal</td> */}
                        {/* <td>Instituto Superior Novas Profissões - INP</td> */}
                        {/* TODO status filter logic */}
                        <td>{so.osStatus.title}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </ListWrapper>
          <div className="box bottom-full" />
          {/* <div className="box bottom-left" />
          <div className="box bottom-right" /> */}
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
    site: state.site,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceOrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
