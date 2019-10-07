import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #222;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
