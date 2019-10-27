import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 0 0 20px;
  width: 100%;
  z-index: 20;
`;

export const OrderHeader = styled.div`
  width: ${props => (props.expand ? '840px' : '940px')};
  position: relative;
  left: ${props => (props.expand ? '100px' : '0px')};
  height: 41px;
  background-color: #253544;
  padding: 0 10px;
`;
