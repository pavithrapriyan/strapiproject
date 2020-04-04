import React from "react";  
import { useParams } from "react-router";  
import Query from "../../components/Query";  
import ReactMarkdown from "react-markdown";  
import Moment from "react-moment";

import ARTICLE_QUERY from "../../queries/article/article";
import { Link } from "react-router-dom";

const Article = () => {  
  let { id } = useParams();
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        return (
          <div>
            <div id="banner">
                <div class="card-img-overlay">
                    <div className="container">
                        <h4>{article.title}</h4>
                    </div>
                </div>
            </div>

            <div className="article-section">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="image-featured">
                                <img src={"http://localhost:1337" + article.image.url} alt={"http://localhost:1337" + article.image.url} />
                            </div>
                            <div className="date-tags">
                                <div className="mr-auto">
                                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                                </div>
                                <span className="text-capitalize">{article.category.name}</span>
                            </div>
                            <h5 class="card-title pt-3">{article.title}</h5>
                            <ReactMarkdown source={article.content} />
                        </div>
                        <div className="col-4">
                            <div className="sidebar">
                                <h4 className="heading-sidebar">Recent Post</h4>
                                <div className="recentpost">
                                    <Link to="">
                                        <div className="thumnailimage">
                                            <img src="http://localhost:1337/uploads/7f60f6920a0b45b3a0688e4713947e4f.jpg" alt="" />
                                        </div>
                                        <div className="Contentarea">
                                            Top Free And Paid Guest Posting Sites List 2020
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="thumnailimage">
                                            <img src="http://localhost:1337/uploads/7f60f6920a0b45b3a0688e4713947e4f.jpg" alt="" />
                                        </div>
                                        <div className="Contentarea">
                                            Top Free And Paid Guest Posting Sites List 2020
                                        </div>
                                    </Link>
                                </div>
                                <h4 className="heading-sidebar mt-4 mb-3">Top Category</h4>
                                <div className="topcategory">
                                    <ul>
                                        <li>
                                            <Link to="">
                                                Trends
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Trends
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Trends
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article; 