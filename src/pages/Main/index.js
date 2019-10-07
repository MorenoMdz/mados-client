import React, { Component } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { List } from './styles';
import { Container } from '../../components';

import api from '../../services/api';

class Main extends Component {
  state = {
    serviceOrders: [],
  };

  componentDidMount() {
    console.log('mount');
    // this.fetchServiceOrders();
    const serviceOrders = localStorage.getItem('serviceOrders');
    if (serviceOrders) {
      this.setState({ serviceOrders: JSON.parse(serviceOrders) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { serviceOrders } = this.state;
    if (prevState.serviceOrders !== serviceOrders) {
      localStorage.setItem('serviceOrders', JSON.stringify(serviceOrders));
    }
  }

  fetchServiceOrders = async () => {
    try {
      const response = await api.get('/serviceorders');
      console.log(response);
    } catch (error) {
      console.log(error.toJSON());
    }
  };

  render() {
    const { serviceOrders } = this.state;
    console.log(serviceOrders);
    return (
      <Container>
        <FaArrowUp color="#fff" size={14} />
        <h1>Main</h1>

        <List>
          {serviceOrders
            ? serviceOrders.map(so => <li key={so.id}>{so.serial_number}</li>)
            : null}
        </List>
        <Link to="/login">Login</Link>
      </Container>
    );
  }
}

export default Main;
