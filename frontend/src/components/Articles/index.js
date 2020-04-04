import React from "react";  
import Query from "../Query";  
import Cards from "../Cards";
import ARTICLES_QUERY from "../../queries/articles/articles";

const Articles = () => {  
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col mb-2">
          <h3 className="heading">Latest Blog</h3>
        </div>
      </div>
      <Query query={ARTICLES_QUERY} id={null}>
        {({ data: { articles } }) => {
          return (
            <div class="row row-cols-1 row-cols-md-3">
                {
                  articles.slice(0, 9).map((article, i) => {
                      return <Cards article={article} />;
                  })
                }
            </div>
            );
          }
        }
      </Query>
    </div>    
  );
};

export default Articles;  