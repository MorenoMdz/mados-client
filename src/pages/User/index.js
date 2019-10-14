import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp, FaUpload } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AvatarForm, Input } from './styles';
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
  const [avatar, setAvatarUrl] = useState({ url: '' });
  const [ConfirmAvatar, setConfirmAvatar] = useState(0);
  const { fetchUserRequest, updateUserRequest } = props;
  const { user } = props;

  useEffect(() => {
    fetchUserRequest();
  }, [fetchUserRequest]);

  const handleInputChange = e => {
    setAvatarUrl({ ...avatar, [e.target.name]: e.target.value });
  };

  const handleAvatarUpdate = e => {
    e.preventDefault();
    console.log(avatar);
    updateUserRequest({ userId: user.id, avatarUrl: avatar.url });
  };

  return (
    <Container>
      <SideBar />
      <BodyContainer>
        <SearchInput />
        <MainContainer>
          <h2>Olá, {user.username}</h2>
          {user.avatar_url && <AvatarContainer src={user.avatar_url} />}
          <AvatarForm onSubmit={handleAvatarUpdate}>
            <Input name="url" value={avatar.url} onChange={handleInputChange} />
            <button type="submit">
              <FaUpload color="#222" size={16} />
            </button>
          </AvatarForm>
          <p>Username: </p>
          <p>Email: {user.email}</p>
          <p>Permissions</p>
          {user.permissions && (
            <ul>
              {user.permissions.map(perm => (
                <li key={perm.id}>{perm.name}</li>
              ))}
            </ul>
          )}
          <p>Roles:</p>
          {user.roles && (
            <ul>
              {user.roles.map(perm => (
                <li key={perm.id}>{perm.name}</li>
              ))}
            </ul>
          )}
        </MainContainer>
      </BodyContainer>
    </Container>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
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
