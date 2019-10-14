import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul``;

export const AvatarForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 300px;
  button {
    width: 30px;
  }
  svg {
    fill: #333;
    /* position: relative;
    right: 25px; */
  }
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  height: 25px;
  border-radius: 0;
`;
