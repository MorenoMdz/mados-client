import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserActions from '../../store/ducks/user';

import Clock from '../Clock';
import {
  home,
  HamburguerMenu,
  closeButton,
  bell,
  mail,
} from '../../assets/images';

import {
  HeaderContainer,
  RightHeader,
  CustomLink,
  WelcomeBar,
  Toolbar,
  // Clock,
  IndicatorBadge,
  CustomButton,
  ToggleMenu,
} from './styles';

function Header({ user, fetchUserRequest }) {
  const [showMenu, setShowMenu] = useState('');
  useEffect(() => {
    fetchUserRequest();
  }, [fetchUserRequest]);

  const toggleMenu = type => setShowMenu(type);

  return (
    <HeaderContainer>
      <RightHeader>
        <WelcomeBar>
          <CustomLink to="/app" size="30">
            <img src={home} alt="home" />
          </CustomLink>
          <strong>Bem vindo, {user.username}</strong>
          <span>Você tem X Ordens de Serviço aguardando ação</span>
        </WelcomeBar>
        <Clock />
        <Toolbar>
          <CustomButton
            size="22"
            onClick={() => toggleMenu(!showMenu ? 'notifications' : '')}
          >
            <img src={bell} alt="notifications" />
            <IndicatorBadge>5</IndicatorBadge>
          </CustomButton>
          <CustomButton
            size="22"
            onClick={() => toggleMenu(!showMenu ? 'mail' : '')}
          >
            <img src={mail} alt="messages" />
            <IndicatorBadge empty>5</IndicatorBadge>
          </CustomButton>
          <CustomButton
            size="30"
            onClick={() => toggleMenu(!showMenu ? 'burg' : '')}
          >
            {!showMenu ? (
              <img src={HamburguerMenu} alt="menu" />
            ) : (
              <img src={closeButton} alt="menu" className="close" />
            )}
          </CustomButton>
        </Toolbar>
        {showMenu !== '' ? (
          <ToggleMenu className={showMenu ? 'slideIn' : 'slideOut'}>
            <h3>{showMenu}</h3>
            <p>Em construção</p>
            <CustomButton onClick={() => toggleMenu('')}>
              <h3>X</h3>
            </CustomButton>
          </ToggleMenu>
        ) : null}
      </RightHeader>
    </HeaderContainer>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    site: state.site,
  };
};

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
  }),
  site: PropTypes.shape({
    sideBarExpanded: PropTypes.bool.isRequired,
  }).isRequired,
  fetchUserRequest: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: {
    name: 'guest',
    lastName: 'guest',
  },
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
