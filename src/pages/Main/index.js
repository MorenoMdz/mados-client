import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../../services/api';
import { TopDiv, ListWrapper, FiltersButton, BottomCard } from './styles';
import {
  Container,
  SideBar,
  MainContainer,
  SearchInput,
  BodyContainer,
  OrderView,
  OrderViewHeader,
  OverlayLoader,
} from '../../components';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const Main = props => {
  const [orderView, setOrderView] = useState({ active: false, orderId: null });
  const [osStatus, setOsStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
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

  // TODO have all initial fetching in a single effect that toggles a loading
  useEffect(() => {
    const fetchStatuses = async () => {
      const diagStatuses = await api.get('/diagstatus');
      const repairStatuses = await api.get('/repairstatus');
      const diagsArr = Array.from(diagStatuses.data);
      diagsArr.map(st => (st.type = 'diag'));
      const repairsArr = Array.from(repairStatuses.data);
      repairsArr.map(st => (st.type = 'repair'));
      const statuses = diagsArr.concat(repairsArr);
      setOsStatuses(statuses);
    };
    fetchStatuses();
    setLoading(false);
  }, []);

  const applyFilter = (text, statusType, status) => {
    setOrderView({ active: true });
    const { clicked } = activeFilter;
    if (clicked && status === activeFilter.status) {
      setLoading(true);
      searchServiceOrdersRequest('', 'search');
      setActiveFilter({ status: '', clicked: false });
      setLoading(false);
      return;
    }
    searchServiceOrdersRequest(text, 'filter', statusType);
    setLoading(false);
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
      <OverlayLoader loading={loading} />
      <SideBar />
      <BodyContainer>
        {orderView.active ? (
          <TopDiv>
            <SearchInput
              expand={sideBarExpanded}
              width="500px"
              setOrderView={setOrderView}
            />
            {osStatus.map((status, i) => (
              <FiltersButton
                key={status.title}
                color={getBtnColor(i)}
                onClick={() =>
                  applyFilter(status.id, status.type, status.title)
                }
                active={status.title === activeFilter.status}
              >
                {status.title}
              </FiltersButton>
            ))}
          </TopDiv>
        ) : (
          <TopDiv>
            <OrderViewHeader
              expand={sideBarExpanded}
              setOrderView={setOrderView}
            />
          </TopDiv>
        )}
        {orderView.active ? (
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
                        <tr
                          key={so.id}
                          onClick={() =>
                            setOrderView({
                              active: !orderView.active,
                              orderId: so.id,
                            })
                          }
                        >
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
            <BottomCard className="box bottom-full" expand={sideBarExpanded}>
              <h3>list</h3>
            </BottomCard>
          </MainContainer>
        ) : (
          <MainContainer expand={sideBarExpanded}>
            <OrderView
              orderId={/* orderView.orderId */ 28}
              expand={sideBarExpanded}
            />
          </MainContainer>
        )}

        {/* <div className="box bottom-left" />
          <div className="box bottom-right" /> */}
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
