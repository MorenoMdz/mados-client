import styled from 'styled-components';

export const Container = styled.div``;
export const GridTopLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 150px;
  padding: 20px;

  .avatar-btn {
    background-color: transparent !important;
    border: none;
  }
`;

export const AvatarForm = styled.form`
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  color: white;
  padding: 15px;

  position: absolute;
  right: 280px;
  top: 40px;
  width: 400px;
  height: 100px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    width: 80px;
    height: 30px;
    font-weight: bold;
    color: white;
    border: none;
    margin: 0 5px;
  }
  .send-button {
    background: teal;
  }

  .cancel {
    background: orange;
  }

  input {
    width: 300px;
  }

  svg {
    fill: #333;
  }

  animation: slideIn 0.2s forwards;
  @keyframes slideIn {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid #eee;
  width: 320px;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  border-radius: 0;
`;

export const UserForm = styled.form`
  width: 100%;
  height: 100px;
  padding-left: 10px;
  line-height: 1.3rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  button {
    width: 30px;
  }
`;

export const AvatarEditBox = styled.div``;
