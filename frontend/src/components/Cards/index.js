import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ article }) => {
        let image = process.env.REACT_APP_BACKEND_URL + article.image.url;
        return (            
                <div class="col mb-4">
                    <div class="card h-100">
                        <Link to={`/article/${article.id}`}>
                        <div className="card-img-top" style={{backgroundImage:`url(${image})`}}></div>
                        <div class="card-body">
                            <div className="cat text-capitalize">{article.category.name}</div>
                            <h5 class="card-title pt-3">{article.title}</h5>
                       </div>
                        </Link>
                    </div>
                </div>
            );
};

export default Cards;