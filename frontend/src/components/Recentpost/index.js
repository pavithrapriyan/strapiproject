import React from "react";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/articles/articles";
import { Link } from "react-router-dom";

const Recentpost = () => {
    return(
        <div className="recentpost">
            <Query query={ARTICLES_QUERY} id={null}>
                {
                    ({ data: { articles } }) => {
                        return (
                            <div>
                                {
                                    articles.slice(0, 5).map((article, i) => {
                                        return (
                                            <Link to={`/article/${article.id}`}>
                                                <div className="thumnailimage">
                                                    <img src={process.env.REACT_APP_BACKEND_URL + article.image.url} alt="" />
                                                </div>
                                                <div className="Contentarea">
                                                    {article.title}
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        );
                    }
                }
            </Query>
        </div>
    )
};

export default Recentpost;