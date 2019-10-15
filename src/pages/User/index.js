import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaLink, FaWindowClose } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  GridTopLeft,
  AvatarForm,
  UserForm,
  Input,
  AvatarEditBox,
} from './styles';
import {
  Container,
  SideBar,
  MainContainer,
  SearchInput,
  BodyContainer,
  AvatarContainer,
} from '../../components';

import UserActions from '../../store/ducks/user';

const User = props => {
  const [showMenu, setShowMenu] = useState('');
  const [avatar, setAvatarUrl] = useState({ url: '' });
  const [ConfirmAvatar, setConfirmAvatar] = useState(0);
  const { fetchUserRequest, updateUserRequest } = props;
  const { user } = props;

  useEffect(() => {
    fetchUserRequest();
  }, [fetchUserRequest]);

  const toggleAvatarInput = type => {
    setShowMenu(type);
  };

  const handleInputChange = e => {
    setAvatarUrl({ ...avatar, [e.target.name]: e.target.value });
  };

  const handleAvatarUpdate = e => {
    e.preventDefault();
    updateUserRequest({ userId: user.id, avatarUrl: avatar.url });
    setShowMenu('');
  };

  return (
    <Container>
      <SideBar />
      <BodyContainer>
        <SearchInput />
        <MainContainer>
          <GridTopLeft className="box top-left">
            <UserForm>
              <div>
                <h4>Olá,</h4>
                <strong>{user.username}</strong>
              </div>
              <div>
                <p>Email: {user.email}</p>
                <p>Telefone: {user.phone}</p>
              </div>
              <div>
                <p>Roles:</p>
                {user.roles && (
                  <ul>
                    {user.roles.map(role => (
                      <li key={role.id}>{role.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </UserForm>
            <button
              type="button"
              onClick={() => toggleAvatarInput('show')}
              className="avatar-btn"
            >
              <AvatarContainer
                src={user.avatar_url}
                size="78"
                onClick={() => toggleAvatarInput('show')}
              />
            </button>
            {showMenu !== '' ? (
              <AvatarEditBox>
                <AvatarForm onSubmit={handleAvatarUpdate}>
                  <div>
                    <Input
                      name="url"
                      type="url"
                      value={avatar.url}
                      onChange={handleInputChange}
                      placeholder="Insira o link para uma imagem"
                      required
                    />
                  </div>
                  <div>
                    <button type="submit" className="send-button">
                      Enviar
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleAvatarInput('')}
                      className="cancel"
                    >
                      Cancelar
                    </button>
                  </div>
                </AvatarForm>
              </AvatarEditBox>
            ) : null}
          </GridTopLeft>
          <div className="box panel-right" />
          <div className="box bottom-left" />
          <div className="box bottom-right" />
        </MainContainer>
      </BodyContainer>
    </Container>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    avatar_url: PropTypes.string,
    permissions: PropTypes.instanceOf(Array),
    roles: PropTypes.instanceOf(Array),
  }).isRequired,
  fetchUserRequest: PropTypes.func.isRequired,
  updateUserRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
