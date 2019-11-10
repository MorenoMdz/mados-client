import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.width || '250px'};
  height: 100%;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column !important;
  padding: 3px;
  overflow: auto;
`;

export const DayList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  span {
    padding: 0 10px;
    background-color: #09355a;
    width: 100%;
    color: #fff;
    font-size: 0.7rem;
    line-height: 1.1rem;
    font-weight: bold;
  }

  li {
    padding: 0 20px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }
  li:nth-child(odd) {
    background: #fff;
  }
  li:nth-child(even) {
    background: #eee;
  }
`;
