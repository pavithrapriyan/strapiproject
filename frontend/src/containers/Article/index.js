import React from "react";  
import { useParams } from "react-router";  
import Query from "../../components/Query";  
import ReactMarkdown from "react-markdown";  
import Moment from "react-moment";
import ARTICLE_QUERY from "../../queries/article/article";
import Sidebar from "../../components/Sidebar"


const Article = () => {  
  let { id } = useParams();
  let image = process.env.REACT_APP_BACKEND_URL + "/uploads/7f60f6920a0b45b3a0688e4713947e4f.jpg";
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        return (
          <div>
            <div id="banner">
                <div class="card-img-overlay" style={{backgroundImage:`url(${image})`}}>
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
                                <img src={process.env.REACT_APP_BACKEND_URL + article.image.url} alt={process.env.REACT_APP_BACKEND_URL + article.image.url} />
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
                            <Sidebar />
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