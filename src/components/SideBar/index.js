import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SiteActions from '../../store/ducks/site';

import {
  SideBarContainer,
  SideBarContainerCompact,
  ToggleBtn,
  AvatarWrapper,
  SideNav,
  SideLink,
} from './styles';
import { AvatarContainer } from '..';

import { dashboard, admin, statistics, cog } from '../../assets/images';

function SideBar(props) {
  const currentPage = props.location.pathname;
  const {
    user,
    site: { sideBarExpanded },
    siteUpdateRequest,
  } = props;

  // siteUpdateRequest({ sideBarExpanded: true });

  const toggleSideBar = () =>
    siteUpdateRequest({ sideBarExpanded: !sideBarExpanded });
  // const toggleSideBar = () => seExpanded(!expanded);
  return (
    <>
      {sideBarExpanded ? (
        <SideBarContainer>
          <ToggleBtn onClick={toggleSideBar}>{'<<<'}</ToggleBtn>
          <Link to="/user">
            <AvatarWrapper expand="true">
              <AvatarContainer
                src={user.avatar_url && user.avatar_url}
                alt="avatar"
                user={user}
                size="64"
              />
            </AvatarWrapper>
          </Link>
          <SideNav>
            <SideLink
              to="/app"
              className={currentPage === '/app' ? 'active' : null}
            >
              <img src={dashboard} alt="" />
              <span>Dashboard</span>
            </SideLink>
            <SideLink
              to="/reports"
              className={currentPage === '/reports' ? 'active' : null}
            >
              <img src={statistics} alt="" />
              <span>Relatórios</span>
            </SideLink>
            <SideLink
              to="/admin"
              className={currentPage === '/admin' ? 'active' : null}
            >
              <img src={admin} alt="" />
              <span>Admin</span>
            </SideLink>
            <SideLink
              to="/config"
              className={currentPage === '/config' ? 'active' : null}
            >
              <img src={cog} alt="" />
              <span>Configurações</span>
            </SideLink>
          </SideNav>
        </SideBarContainer>
      ) : (
        <SideBarContainerCompact>
          <ToggleBtn onClick={toggleSideBar}>{'>>>'}</ToggleBtn>
          <Link to="/user">
            <AvatarWrapper>
              <AvatarContainer
                src={user.avatar_url && user.avatar_url}
                alt="avatar"
                size="34"
              />
            </AvatarWrapper>
          </Link>
          <SideNav>
            <SideLink
              to="/app"
              className={currentPage === '/app' ? 'active' : null}
            >
              <img src={dashboard} alt="" />
            </SideLink>
            <SideLink
              to="/reports"
              className={currentPage === '/reports' ? 'active' : null}
            >
              <img src={statistics} alt="" />
            </SideLink>
            <SideLink
              to="/admin"
              className={currentPage === '/admin' ? 'active' : null}
            >
              <img src={admin} alt="" />
            </SideLink>
            <SideLink
              to="/config"
              className={currentPage === '/config' ? 'active' : null}
            >
              <img src={cog} alt="" />
            </SideLink>
          </SideNav>
        </SideBarContainerCompact>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    site: state.site,
  };
};

SideBar.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    avatar_url: PropTypes.string,
  }),
  site: PropTypes.shape({
    sideBarExpanded: PropTypes.bool.isRequired,
  }).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  siteUpdateRequest: PropTypes.func.isRequired,
};

SideBar.defaultProps = {
  user: {
    name: 'guest',
    lastName: 'guest',
  },
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(SiteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideBar));
