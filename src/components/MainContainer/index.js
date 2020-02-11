import styled from 'styled-components';

const MainContainer = styled.div`
  height: 660px;
  background-color: #fff;
  z-index: 20;
  position: relative;
  width: 940px;
  left: 20px;
  /* width: ${props => (props.expand ? '840px' : '940px')};
  left: ${props => (props.expand ? '120px' : '20px')}; */
  /* margin: 0 auto; */

  padding: 10px;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  color: #444;

  .box {
    background-color: #eee;
    color: #222;
    padding: 20px;
  }

  .top-left {
    grid-column: 1 / 6;
    grid-row: 1/2;
  }

  .top-full {
    grid-column: 1 / 7;
    grid-row: 1/2;
  }
  .panel-right {
    grid-column: 6;
    grid-row: 1 / 7;
  }
  .bottom-full {
    grid-column: 1 / 7;
    grid-row: 2 / 6;
  }
  .bottom-left {
    grid-column: 1/6;
    grid-row: 2 / 6;
  }
  .bottom-right {
    grid-column: 1/6;
    grid-row: 6 / 7;
  }
`;

export default MainContainer;
