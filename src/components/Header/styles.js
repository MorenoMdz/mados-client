import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 1024px;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  img {
    width: 50px;
    margin-right: 10px;
  }
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
