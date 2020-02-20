import gql from 'graphql-tag';

export const GET_CONTINENTS = gql`
  {
    continents {
      code
      name
    }
  }
`;

export const GET_CONTINENT = gql`
  query getContinent($code: String) {
    continent(code: $code) {
      name
      countries {
        code
        name
        emoji
      }
    }
  }
`;
