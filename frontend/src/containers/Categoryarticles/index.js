import React from "react";  
import { useParams } from "react-router";  
import Query from "../../components/Query";  
import Cards from "../../components/Cards";
import CATEGORIES_Articles_QUERY from "../../queries/categoryarticles/categoryarticles";
import Sidebar from "../../components/Sidebar"


const Cateoryarticle = () => {  
  let { id } = useParams();
  let image = process.env.REACT_APP_BACKEND_URL + "/uploads/7f60f6920a0b45b3a0688e4713947e4f.jpg";

  console.log(id);

  return (
    <Query query={CATEGORIES_Articles_QUERY} id={id}>
      {({ data: { category } }) => {
        console.log(category.articles);
        return (
          <div>
            <div id="banner">
                <div class="card-img-overlay" style={{backgroundImage:`url(${image})`}}>
                    <div className="container">
                        <h4 className="text-capitalize">{category.name}</h4>
                    </div>
                </div>
            </div>

            <div className="article-section">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                          <div class="row row-cols-1 row-cols-md-2">
                              {
                                category.articles.slice(0, 6).map((article, i) => {
                                    return <Cards article={article} />;
                                })
                              }
                          </div>
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

export default Cateoryarticle; 