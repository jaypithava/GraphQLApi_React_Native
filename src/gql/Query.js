import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;

export const Book_QUERY = gql`
  query {
    books {
      id
      title
      author
    }
  }
`;

export const BookDetails_QUERY = gql`
query{
  book(id:6){
    id
    title
    author
  }
}
`;
