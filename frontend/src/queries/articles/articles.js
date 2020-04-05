import gql from "graphql-tag";

const ARTICLES_QUERY = gql`  
  query Articles {
    articles(limit: 10,sort: "published_at:desc") {
      id
      title
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;  