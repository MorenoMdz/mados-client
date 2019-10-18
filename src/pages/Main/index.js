import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TopDiv, ListWrapper, FiltersButton } from './styles';
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
    searchServiceOrdersRequest,
  } = props;

  useEffect(() => {
    fetchServiceOrdersRequest();
  }, [fetchServiceOrdersRequest]);

  const applyFilter = filter => {
    // filter over all SO to match @filter
    searchServiceOrdersRequest(filter);
    // return filteredServiceOrders
  };
  // have an indicator that a filter is active, click ones to activate (pressed button) click again to deactivate

  return (
    <Container>
      <SideBar />
      <BodyContainer>
        <TopDiv>
          <SearchInput expand={sideBarExpanded} width="500px" />
          <FiltersButton color="#26C89F" onClick={() => applyFilter(1)}>
            filter
          </FiltersButton>
          <FiltersButton color="#45A1EB" onClick={() => applyFilter(2)}>
            filter
          </FiltersButton>
          <FiltersButton color="#F97D37" onClick={() => applyFilter(3)}>
            filter
          </FiltersButton>
          <FiltersButton color="#607D8B">filter</FiltersButton>
          <FiltersButton color="#FF5370">filter</FiltersButton>
        </TopDiv>
        <MainContainer expand={sideBarExpanded}>
          {/* <RightMenu /> */}
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
  site: PropTypes.shape({
    sideBarExpanded: PropTypes.bool.isRequired,
  }).isRequired,
  fetchServiceOrdersRequest: PropTypes.func.isRequired,
  searchServiceOrdersRequest: PropTypes.func.isRequired,
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
