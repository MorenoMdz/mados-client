import styled from 'styled-components';

export const ClockDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 20px;
  .clock {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  .date {
    font-size: 12px;
  }
`;
