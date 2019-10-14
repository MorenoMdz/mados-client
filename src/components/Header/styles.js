import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 60px;
  width: 1024px;
  background-color: #fff;
  top: 0px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

export const LeftHeader = styled.div`
  background-color: #222;
  width: 180px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const RightHeader = styled.div`
  background-color: orange;
  height: 60px;
  width: 844px;
  position: relative;
  left: 180px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Login = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 36px;
  }
`;
