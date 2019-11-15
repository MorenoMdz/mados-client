import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Preview,
  Body,
  List,
  Input,
  Actions,
  ListButton,
} from './styles';
import { ActionButton } from '..';
import NewServiceBox from './NewServiceBox';
import api from '../../services/api';

const ServiceManager = ({ type, serviceOrderId }) => {
  const [servicesFound, setServicesFound] = useState([]);
  const [servicesFiltered, setServicesFiltered] = useState([]);
  const [servicesSelected, setServicesSelected] = useState([]);
  const [showNewBox, setShowNewBox] = useState(false);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState('');

  useEffect(() => {
    const fetchServiceOrder = async () => {
      const serviceOrder = await api.get(`/serviceorders/${serviceOrderId}`);
      const spreadServices = serviceOrder.data[type].flat();
      const cleanServicers = spreadServices.map(
        service =>
          (service = {
            id: service.id,
            title: service.title,
            obs: service.obs,
          })
      );
      setServicesSelected(cleanServicers);
    };
    fetchServiceOrder();
  }, [type, serviceOrderId]);

  useEffect(() => {
    const matchServices = servicesFound.filter(service =>
      service.title.includes(filter)
    );
    setServicesFiltered(matchServices);
  }, [filter, servicesFound]);

  const fetchServices = async text => {
    const { data } = await api.get(`${type}`);
    const cleanServicers = data.map(
      service =>
        (service = {
          id: service.id,
          title: service.title,
          obs: service.obs,
        })
    );
    const filteredServices = cleanServicers.filter(
      service =>
        !JSON.stringify(servicesSelected).includes(JSON.stringify(service)) ||
        cleanServicers.includes(text)
    );
    setServicesFound(filteredServices);
  };

  const selectService = service => {
    if (!servicesSelected.includes(service))
      setServicesSelected([...servicesSelected, service]);
  };

  const removeService = service => {
    setServicesSelected(
      servicesSelected.filter(item => item.id !== service.id)
    );
  };

  const updateServices = async () => {
    const serviceIds = servicesSelected.map(service => service.id);
    const payload = { diagnostics: serviceIds };
    await api.put(`/serviceorders/${serviceOrderId}`, payload);
  };

  return (
    <Container>
      {showNewBox && (
        <NewServiceBox close={() => setShowNewBox(false)} type={type} />
      )}
      <Header>
        <span>Selecione os serviços</span>
      </Header>
      <Preview>
        <List>
          {servicesSelected && servicesSelected.length > 0 ? (
            servicesSelected.map(service => (
              <li key={service.id}>
                {service.title} || id {service.id}
                <ListButton
                  onClick={() => removeService(service)}
                  color="#D50000"
                >
                  <b>-</b>
                </ListButton>
              </li>
            ))
          ) : (
            <li> Nada selecionado </li>
          )}
        </List>
        <Actions>
          <ActionButton width="80px" color="#26C89F" onClick={updateServices}>
            Salvar
          </ActionButton>
          <ActionButton width="80px" color="#F40B7B">
            Cancelar
          </ActionButton>
        </Actions>
      </Preview>
      <Body>
        <Actions>
          <Input
            placeholder="Filtro"
            compact
            onChange={e => setFilter(e.target.value)}
          />
          <ActionButton width="80px" color="#26C89F" onClick={fetchServices}>
            Todos
          </ActionButton>
          <ActionButton
            width="80px"
            color="#3D5AFE"
            onClick={() => setShowNewBox(true)}
          >
            Novo
          </ActionButton>
        </Actions>
        <List>
          {servicesFiltered.map(service => (
            <li key={service.id}>
              <span className="service-title">{service.title}</span>
              <span className="service-obs">{service.obs}</span>
              {servicesSelected.includes(service) ? (
                <ListButton
                  onClick={() => removeService(service)}
                  color="#D50000"
                >
                  <b>-</b>
                </ListButton>
              ) : (
                <ListButton
                  onClick={() => selectService(service)}
                  color="#26C89F"
                >
                  <b>+</b>
                </ListButton>
              )}
            </li>
          ))}
        </List>
      </Body>
    </Container>
  );
};

ServiceManager.defaultProps = {
  type: 'diagnostics',
  serviceOrderId: 28,
};

ServiceManager.propTypes = {
  type: PropTypes.string,
  serviceOrderId: PropTypes.number,
};

export default ServiceManager;
