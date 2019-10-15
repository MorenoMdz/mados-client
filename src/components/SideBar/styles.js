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
`;

export const SideNav = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const AvatarWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SideLink = styled(Link)`
  width: 150px;
  height: 30px;
  margin: 5px 0;
  background-color: ${props => (props.active ? '#0E2438' : 'transparent')};
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
