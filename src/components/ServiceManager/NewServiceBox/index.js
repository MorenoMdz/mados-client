import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Body,
  Form,
  Input,
  InputArea,
  Actions,
  ErrorMessage,
  SuccessMessage,
} from './styles';
import { ActionButton } from '../..';
import api from '../../../services/api';

const NewServiceBox = ({ close, type }) => {
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    obs: '',
  });
  const [message, setMessage] = useState({
    error: '',
    success: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!newService.title) return setMessage({ error: 'Titulo obrigatorio' });
    if (!newService.description)
      return setMessage({ error: 'Descrição obrigatória' });
    if (!newService.obs) return setMessage({ error: 'Observação obrigatória' });
    try {
      await api.post(`/${type}`, newService);
      setMessage({
        error: '',
        success: 'Salvo com Sucesso',
      });
      setNewService({
        title: '',
        description: '',
        obs: '',
      });
      return true;
    } catch (err) {
      setMessage({ error: 'Erro ao salvar' });
    }
  }

  return (
    <Container>
      <Header>
        <span>Adicionar novo</span>
      </Header>
      <Body>
        {message.error && <ErrorMessage>{message.error}</ErrorMessage>}
        {message.success && <SuccessMessage>{message.success}</SuccessMessage>}
        <Form onSubmit={e => handleSubmit(e)}>
          <Input
            placeholder="Título"
            value={newService.title}
            onChange={e =>
              setNewService({ ...newService, title: e.target.value })
            }
          />
          <InputArea
            placeholder="Descrição"
            value={newService.description}
            onChange={e =>
              setNewService({
                ...newService,
                description: e.target.value,
              })
            }
          />
          <InputArea
            placeholder="Observações"
            height="80px"
            value={newService.obs}
            onChange={e =>
              setNewService({ ...newService, obs: e.target.value })
            }
          />
          <Actions>
            <ActionButton type="submit" width="80px" color="#26C89F">
              Adicionar
            </ActionButton>
            <ActionButton width="80px" color="#3D5AFE" onClick={close}>
              Cancelar
            </ActionButton>
          </Actions>
        </Form>
      </Body>
    </Container>
  );
};

NewServiceBox.defaultProps = {
  close: () => {},
};

NewServiceBox.propTypes = {
  close: PropTypes.func,
};

export default NewServiceBox;
