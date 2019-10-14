import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { format } from 'date-fns';

import UserActions from '../../store/ducks/user';

import { M, home, HamburguerMenu, bell, mail } from '../../assets/images';

import {
  HeaderContainer,
  LeftHeader,
  RightHeader,
  CustomLink,
  WelcomeBar,
  Toolbar,
  Clock,
  IndicatorBadge,
  CustomButton,
} from './styles';

function Header({ user, fetchUserRequest }) {
  useEffect(() => {
    fetchUserRequest();
  }, [fetchUserRequest]);

  const clock = format(Date.now(), 'hh:mm');
  const day = format(Date.now(), 'dd/MM/yyyy');

  return (
    <HeaderContainer>
      <LeftHeader>
        <CustomLink to="/" size="36">
          <img src={M} alt="logo" />
        </CustomLink>
      </LeftHeader>
      <RightHeader>
        <WelcomeBar>
          <CustomLink to="/app" size="30">
            <img src={home} alt="home" />
          </CustomLink>
          <strong>Bem vindo, {user.username}</strong>
          <span>Você tem X Ordens de Serviço aguardando ação</span>
        </WelcomeBar>
        <Toolbar>
          <Clock>
            <span className="clock">{clock}</span>
            <span className="date">{day}</span>
          </Clock>
          <CustomLink to="/" size="22">
            <img src={bell} alt="notifications" />
            <IndicatorBadge>5</IndicatorBadge>
          </CustomLink>
          <CustomLink to="/" size="22">
            <img src={mail} alt="messages" />
            <IndicatorBadge empty>5</IndicatorBadge>
          </CustomLink>
          <CustomButton size="30" onClick={() => console.log('clicked')}>
            <img src={HamburguerMenu} alt="menu" />
          </CustomButton>
        </Toolbar>
      </RightHeader>
    </HeaderContainer>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
  }),
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
