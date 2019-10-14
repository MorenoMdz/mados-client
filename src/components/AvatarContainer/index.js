import React from 'react';
import PropTypes from 'prop-types';

import { AvatarWrapper, AvatarImg } from './styles';
import logo from '../../assets/images/user.svg';

const AvatarContainer = props => {
  const { src, user } = props;
  return (
    <AvatarWrapper>
      <AvatarImg src={src} alt="avatar" />
      <strong>{user.username}</strong>
      <div>
        <span>Loja: </span>
        <strong>todo</strong>
      </div>
    </AvatarWrapper>
  );
};

AvatarContainer.propTypes = {
  src: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
  }),
};
AvatarContainer.defaultProps = {
  src: logo,
  user: {
    name: 'guest',
    lastName: 'guest',
  },
};

export default AvatarContainer;

// TODO avatar source size programmatically
