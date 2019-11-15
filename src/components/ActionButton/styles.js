import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 3px;
  background-color: ${props => props.color || 'teal'};
  width: ${props => props.width || '100%'};
  height: 25px;
  font-size: 0.8rem;
  font-weight: bold;
  &:disabled {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #333;
    cursor: default;
    justify-content: flex-start;
  }
`;
