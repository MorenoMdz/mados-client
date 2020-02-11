import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #0a3e69 0%, #000000 100%);
  position: absolute;
  top: 0;
  padding-top: 60px;
  color: #fff;
  z-index: 20;
  a {
    width: 150px;
  }
`;

export const SideBarContainerCompact = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #0a3e69 0%, #000000 100%);
  position: absolute;
  top: 0;
  padding-top: 60px;
  color: #fff;
  z-index: 20;
  a {
    width: 50px;
  }
`;

export const LogoContainer = styled.div`
  background-color: #222;
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const SideNav = styled.div`
  max-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const AvatarWrapper = styled.div`
  width: ${props => (props.expand ? '150px' : '40px;')};
  height: ${props => (props.expand ? '150px' : '50px;')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const SideLink = styled(Link)`
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  color: #fff;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    width: 100%;

    img {
      margin: 0 auto;
    }
  }

  span {
    padding: 0 10px;
  }

  &.active {
    background-color: #0e2438;
    font-weight: bold;
    text-decoration: underline;
  }

  :hover {
    opacity: 0.5;
  }
`;

export const ToggleBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
  height: 30px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  img {
    width: 20px;
    margin-right: -10px;
  }
`;
