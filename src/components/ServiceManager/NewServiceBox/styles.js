import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  min-height: 250px;
  z-index: 50;
  border: 2px solid black;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 10px;
  background-color: #09355a;
  color: #fff;
  font-weight: bold;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: #eee;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #eee;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  overflow: auto;
  padding: 0 10px;
  background-color: #ddd;
  /* border: 1px solid black; */
  button,
  input {
    margin: 0 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  position: relative;
  height: 30px;
  background-color: #fff;
  padding: 0 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 5px 0 5px 0;
  /* border: 1px solid black; */
`;

export const InputArea = styled.textarea`
  width: 100%;
  position: relative;
  height: 70px;
  background-color: #fff;
  padding: 5px 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 5px 0 5px 0;
  font-size: 0.8rem;
  border: none;
`;

export const ErrorMessage = styled.span`
  width: 100%;
  height: 30px;
  background-color: #fff;
  border: 2px, solid, orange;
  color: orange;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SuccessMessage = styled.span`
  width: 100%;
  height: 30px;
  background-color: #fff;
  border: 2px, solid, teal;
  color: teal;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
