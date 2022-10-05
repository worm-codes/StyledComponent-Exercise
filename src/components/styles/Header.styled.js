import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
  /* h1 {  it is inside element effects h1s inside of Header
    color: red;
  } */

  /* &:hover { you can do opearations with &
    background-color: black;
  } */
`;
