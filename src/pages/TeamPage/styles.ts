import { styled } from "styled-components";

export const ContainerTeamPage = styled.div`
  width: 100%;
  height: 100vh;

  color: #e2e2e2;
`;

export const WrapperTeamPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ContainerPlayers = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  img {
    width: 150px;
    border: 2px solid #2c2c31;
    border-radius: 5px;
  }
`;

export const ContainerFormer = styled.div`
  h2 {
    text-align: center;
  }
`;

export const ContainerResults = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 8px;

  .table {
    width: 100%;
    border-collapse: collapse;
  }

  .table th,
  .table td {
    padding: 12px;
    text-align: center;
    border: 1px solid #ddd;
  }

  .table th {
    background-color: #f8f8f8;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
  }

  .table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .table tbody td {
    font-size: 16px;
  }
`;

export const ContainerStatistics = styled.div``;
