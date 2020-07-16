import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  height: 100%;
  width: 100%;

  .search-box {
    width: 30%;

    > * {
      margin: 10px 0;
    }
  }
`;

export const Results = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin-top: 50px;

  .bio-summary {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 30%;

    .profile-pic {
      width: 40%;
      max-width: 300px;
      background-color: #eee;
      border-radius: 4px;
      padding: 10px;

      img {
        width: 100%;
      }
    }

    .strengths {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .table-container {
    display:flex;
    flex-wrap: wrap;
    flex: 1;
  }
`;

export const Empty = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    color: #ccc;
`
