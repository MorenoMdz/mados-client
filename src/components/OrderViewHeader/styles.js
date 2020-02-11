import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0 10px 20px;
  width: 100%;
  z-index: 20;
`;

export const OrderHeader = styled.div`
  position: relative;
  left: 0;
  width: 940px;
  /* left: ${props => (props.expand ? '100px' : '0px')};
  width: ${props => (props.expand ? '840px' : '940px')}; */
  height: 41px;
  background-color: #253544;
  padding: 0 10px;

  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  b {
    margin-left: 5px;
  }

  .so-number {
    font-size: 1.1rem;
    font-weight: bold;
  }

  .header-wrapper {
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 0 20px;
    font-size: 0.7rem;
  }

  .header-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 200px;
  }

  .header-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 5px 0;
    width: 100px;
    height: 100%;
    button {
      color: #fff;
      font-weight: bold;
      font-size: 0.7rem;
      cursor: pointer;
      text-decoration: underline;
      background-color: transparent;
      border: none;
    }
  }
`;
