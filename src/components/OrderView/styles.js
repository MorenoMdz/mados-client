import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 650px;
  padding: 0 !important;
  overflow: auto;
  width: ${props => (props.expand ? '820px' : '920px')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const OrderContainer = styled.div`
  height: 500px;
  width: 100%;
`;

export const OrderHeader = styled.div`
  height: 25px;
  width: 100%;
  background: #253544;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #fff;
  font-size: 0.8rem;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    padding-right: 5px;
    font-size: 0.8rem;
    color: #fff;
  }
`;

export const OrderSection = styled.div`
  width: 100%;
  /* height: calc(50% - 30px); */
  height: 280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  small {
    color: #333;
  }
`;

export const OrderSectionCompact = styled.div`
  width: 100%;
  height: calc(15% - 30px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: #eee;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    padding: 25px 5px 0 0;
  }
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
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
  h5 {
    color: #000;
    width: 330px;
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

export const BottomCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 160px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  width: ${props => (props.expand ? '820px' : '920px')};
`;

export const FooterCard = styled.div`
  width: 49%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    width: 49%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 5px;
    /* margin: 0 auto; */
  }
`;

export const FooterHeader = styled.span`
  position: relative;
  left: -5px;
  height: 20px;
  width: 100%;
  background: #253544;
  padding: 3px 10px;
  color: #fff;
  font-size: 0.8rem;
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 3px;
  background-color: ${props => props.color || 'teal'};
  width: ${props => props.width || '100%'};
  height: 25px;
  font-size: 0.8rem;
  &:disabled {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #333;
    cursor: default;
    justify-content: flex-start;
  }
`;

export const DiagCard = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;

  .left {
    justify-content: flex-start;
  }
  .right {
    justify-content: flex-end;
  }
`;
