import styled from 'styled-components';

export const Input = styled.input`
  width: ${props => props.width};
  position: relative;
  left: ${props => (props.expand ? '120px' : '20px')};
  height: 30px;
  background-color: #efefef;
  padding: 0 10px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  margin: ${props => (props.compact ? '10px 0 10px 5px' : '20px 0 20px 10px')};
  width: 100%;
`;
