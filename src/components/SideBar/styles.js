import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.div`
  width: 150px;
  height: 800px;
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
  height: 800px;
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
    padding-left: 5px;
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
`;

export const SideLink = styled(Link)`
  max-width: 150px;
  height: 30px;
  margin: 5px 0;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  img {
    margin-left: 10px;
  }
  span {
    padding: 0 10px;
  }
  &.active {
    background-color: #0e2438;
    font-weight: bold;
    text-decoration: underline;
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
`;
