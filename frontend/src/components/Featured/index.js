import React from "react";  
import Query from "../Query";  
import ARTICLES_QUERY from "../../queries/articles/articles";
import { Link } from "react-router-dom";

const Featured = () => {  
  return (
    <div>
      <Query query={ARTICLES_QUERY} id={null}>
        {({ data: { articles } }) => {
          return (
            <div className="herosection">
                <div className="row">
                    {
                    articles.slice(0, 1).map((article, i) => {
                        let image = process.env.REACT_APP_BACKEND_URL + article.image.url;
                        return (
                            <div class="col col-6 mb-6">
                                <Link to={`/article/${article.id}`}>
                                    <div className="mainherosec" style={{backgroundImage:`url(${image})`}}>
                                            <h4>{article.title}</h4>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                    }
                    <div class="col col-6 mb-6">
                        <div className="rightsec">
                            {
                                articles.slice(1, 3).map((article, i) => {
                                    let image = process.env.REACT_APP_BACKEND_URL + article.image.url;
                                    return (
                                        <Link to={`/article/${article.id}`}>
                                            <div className="mainherosec" style={{backgroundImage:`url(${image})`}}>
                                                    <h4>{article.title}</h4>
                                            </div>
                                        </Link>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            );
          }
        }
      </Query>
    </div>    
  );
};

export default Featured;  