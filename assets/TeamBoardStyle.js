import styled from 'styled-components';

const TeamGroup = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;


  .Team1{
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .team{
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .PlayersList{
    display: grid;
    grid-template-columns: 25% 65%;
    align-items: center;
    align-self: center;

    input{
      height: 20px;
    }

    h4{
      grid-column-start: 1;
      grid-column-end: 2;
      margin 5px 0;
    }
  }

`;

export default TeamGroup;