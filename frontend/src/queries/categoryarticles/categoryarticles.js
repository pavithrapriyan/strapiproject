import gql from "graphql-tag";

const CATEGORIES_Articles_QUERY = gql`  
  query Category($id: ID!) {
    category(id: $id) {
        name
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
  }
`;

export default CATEGORIES_Articles_QUERY;