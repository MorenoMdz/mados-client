import React from 'react';
import PropTypes from 'prop-types';

import { AvatarWrapper, AvatarImg } from './styles';
import defaultUser from '../../assets/images/user.svg';

const AvatarContainer = props => {
  const { src, size, user } = props;
  return (
    <AvatarWrapper>
      <AvatarImg src={src || defaultUser} alt="avatar" size={size} />
      <strong>{user.username}</strong>
    </AvatarWrapper>
  );
};

AvatarContainer.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
  }),
};

AvatarContainer.defaultProps = {
  src: defaultUser,
  size: '64',
  user: {
    name: 'guest',
    lastName: 'guest',
  },
};

export default AvatarContainer;
