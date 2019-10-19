import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
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
  const [osStatus, setOsStatuses] = useState([]);
  const [activeFilter, setActiveFilter] = useState({ clicked: false });
  const {
    serviceOrders,
    site: { sideBarExpanded },
    fetchServiceOrdersRequest,
    searchServiceOrdersRequest,
  } = props;

  useEffect(() => {
    fetchServiceOrdersRequest();
  }, [fetchServiceOrdersRequest]);

  useEffect(() => {
    const fetchStatuses = async () => {
      const diagStatuses = await api.get('/diagstatus');
      const repairStatuses = await api.get('/repairstatus');
      const diagsArr = Array.from(diagStatuses.data);
      diagsArr.map(st => {
        const status = st;
        status.type = 'diag';
      });
      const repairsArr = Array.from(repairStatuses.data);
      repairsArr.map(st => {
        const status = st;
        status.type = 'repair';
      });
      const statuses = diagsArr.concat(repairsArr);
      setOsStatuses(statuses);
    };
    fetchStatuses();
  }, []);

  const applyFilter = (text, statusType, status) => {
    const { clicked } = activeFilter;
    if (clicked && status === activeFilter.status) {
      searchServiceOrdersRequest('', 'search');
      setActiveFilter({ status: '', clicked: false });
      return;
    }
    searchServiceOrdersRequest(text, 'filter', statusType);
    setActiveFilter({ status, clicked: true });
  };

  const getBtnColor = id => {
    if (id === 0) return '#26C89F';
    if (id === 1) return '#45A1EB';
    if (id === 2) return '#F97D37';
    if (id === 3) return '#FF5370';
    return '#333';
  };

  return (
    <Container>
      <SideBar />
      <BodyContainer>
        <TopDiv>
          <SearchInput expand={sideBarExpanded} width="500px" />
          {osStatus.map((status, i) => (
            <FiltersButton
              key={status.title}
              color={getBtnColor(i)}
              onClick={() => applyFilter(status.id, status.type, status.title)}
              active={status.title === activeFilter.status}
            >
              {status.title}
            </FiltersButton>
          ))}
        </TopDiv>
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
                        {/* <td>{so.client.name}</td> */}
                        <td>{so.repairStatus.title}</td>
                        <td>{so.diagStatus.title}</td>
                        <td>{so.problem_description}</td>
                        {/* <td>Portugal</td> */}
                        {/* <td>Instituto Superior Novas Profissões - INP</td> */}
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
