import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SideBarContainer, SideNav, SideLink } from './styles';
import { AvatarContainer } from '..';

import { dashboard, admin, statistics, cog } from '../../assets/images';

function SideBar(props) {
  const { user } = props;
  return (
    <SideBarContainer>
      <AvatarContainer
        src={user.avatar_url && user.avatar_url}
        alt="avatar"
        user={user}
      />
      <SideNav>
        <SideLink to="/app" active="true">
          <img src={dashboard} alt="" />
          <span>Dashboard</span>
        </SideLink>
        <SideLink to="/reports">
          <img src={statistics} alt="" />
          <span>Relatórios</span>
        </SideLink>
        <SideLink to="/admin">
          <img src={admin} alt="" />
          <span>Admin</span>
        </SideLink>
        <SideLink to="/config">
          <img src={cog} alt="" />
          <span>Configurações</span>
        </SideLink>
      </SideNav>
    </SideBarContainer>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

SideBar.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    avatar_url: PropTypes.string,
  }),
};

SideBar.defaultProps = {
  user: {
    name: 'guest',
    lastName: 'guest',
  },
};

export default connect(mapStateToProps)(SideBar);
