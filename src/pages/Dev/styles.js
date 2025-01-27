import styled from 'styled-components';

export const Container = styled.div``;
export const ListWrapper = styled.div`
  height: 500px;
  width: 100%;
  padding: 0 !important;
  overflow: auto;

  table {
    display: grid;
    border-collapse: collapse;
    min-width: 100%;
    grid-template-columns:
      minmax(70px, 1fr)
      minmax(80px, 1.2fr)
      minmax(80px, 1fr)
      minmax(80px, 1fr)
      minmax(250px, 3.33fr)
      /* minmax(150px, 1fr) */
      /* minmax(80px, 1fr) */
      minmax(20px, 0.7fr);
  }

  thead,
  tbody,
  tr {
    display: contents;
  }

  th,
  td {
    padding: 5px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th {
    position: sticky;
    top: 0;
    background: #333;
    text-align: left;
    font-weight: normal;
    font-size: 0.9rem;
    color: white;
    position: relative;
  }

  th:last-child {
    border: 0;
  }

  td {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #808080;
  }

  tr:nth-child(even) td {
    background: #f8f6ff;
  }
`;

export const ListHeader = styled.div`
  width: 100%;
`;

export const List = styled.ul``;
