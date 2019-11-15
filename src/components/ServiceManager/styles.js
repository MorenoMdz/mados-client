import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5px;
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

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  overflow: auto;
  padding: 10px;
  background-color: #ddd;
  margin: 10px 0;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height || '50px'};
  overflow: auto;
  padding: 0 10px;
  margin: 5px;
  background-color: #eee;
  button,
  input {
    margin: 0 10px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #fff;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  overflow: auto;

  li {
    padding: 0 20px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex: 1; */
    height: 30px;
    min-height: 30px;

    & .service-title {
      width: 30%;
    }
    & .service-obs {
      width: 50%;
    }
  }
  li:nth-child(odd) {
    background: #eee;
  }
  li:nth-child(even) {
    background: #fff;
  }
`;

export const Input = styled.input`
  width: ${props => props.width};
  position: relative;
  height: 30px;
  background-color: #efefef;
  padding: 0 10px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  margin: 10px 0 10px 0;
  width: 40%;
`;

export const ListButton = styled.button.attrs({ type: 'button' })`
  width: 30px;
  height: 23px;
  background-color: ${props => props.color};
  padding: 10 10px;
  cursor: pointer;
  color: #fff;
  opacity: 0.8;
  border-radius: 3px;
  &:disabled {
    border: none;
    cursor: default;
    opacity: 0;
  }
`;
