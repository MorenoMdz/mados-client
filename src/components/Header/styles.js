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
  height: 60px;
  width: 844px;
  position: relative;
  left: 180px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeBar = styled.div`
  height: 60px;
  width: 544px;

  strong {
    font-size: 12px;
    margin: 0 5px 0 10px;
    padding-bottom: 5px;
  }

  span {
    font-size: 10px;
    padding-bottom: 5px;
  }

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: 15px;
  padding-bottom: 10px;
`;

export const Toolbar = styled.div`
  height: 60px;
  width: 244px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  /* padding-right: 10px; */
  padding-bottom: 10px;

  img {
    /* margin-right: 15px; */
  }
`;

export const Clock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 20px;
  .clock {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  .date {
    font-size: 12px;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: ${props => (props.size ? `${props.size}px` : '24px')};
  }
`;

export const CustomButton = styled.button`
  transition: opacity 0.3s;
  background-color: transparent;
  border: none;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: ${props => (props.size ? `${props.size}px` : '24px')};
  }

  margin-right: 15px;
`;

export const IndicatorBadge = styled.span`
  background-color: #f40b7b;
  position: relative;
  padding: 1px 5px;
  border-radius: 50%;
  right: 10px;
  top: -15px;

  font-weight: bold;
  color: #fff;

  opacity: ${props => (props.empty ? 0 : 1)};
`;
