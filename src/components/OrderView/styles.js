import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 500px;
  width: 840px;
  padding: 0 !important;
  overflow: auto;
  width: ${props => (props.expand ? '820px' : '920px')};
`;

export const OrderHeader = styled.div`
  height: 30px;
  background: #253544;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #fff;
`;

export const OrderBody = styled.div`
  width: 100%;
  height: calc(50% - 30px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardBody = styled.div`
  width: 50%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  padding-left: 25px;
  color: #fff;
  line-height: 1.6rem;
  background: grey;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
  h5 {
    color: #000;
    width: 430px;
    border-bottom: 1px solid black;
    margin-bottom: 5px;
    position: relative;
    left: -5px;
  }
  strong {
    margin-left: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 350px;
    font-size: 0.9rem;
  }
`;

export const TextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #000;

  /* strong {
    white-space: nowrap;
    max-width: 30ch;
  } */
`;

export const TextAreaDiv = styled.div`
  width: 100%;
  color: #000;
  font-size: 0.8rem;
  p {
    margin-left: 5px;
    flex: 1;
    width: 100%;
    height: 60px;
    background: #efefef;
    padding: 3px 7px;
    overflow: auto;
  }
`;
export const DiagAreaDiv = styled.div`
  width: 100%;
  height: 200px;
  color: #000;
  font-size: 0.8rem;
  background: #efefef;
  overflow: auto;
  margin: 5px auto;
  border: 1px solid black;
  padding: 5px 10px;
`;
