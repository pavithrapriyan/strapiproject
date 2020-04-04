import React from "react";  
import Query from "../Query";  
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faYoutube,faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {  
  return (
    <header>     
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
          <div className="container">
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
              <Link to={"/"} className="navbar-brand"><FontAwesomeIcon icon={faHome} /> a!blog</Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                  {categories.map((category) => {
                    return (
                    <li class="nav-item">
                      <Link to={`/category/${category.id}`} className="nav-link text-capitalize">{category.name}</Link>
                    </li>
                    );
                  })}
                </ul>
                <span class="navbar-text">
                  <ul className="socialmedialink">
                    <li><Link to={"/"}><FontAwesomeIcon icon={faFacebook} size="2x" /></Link></li>  
                    <li><Link to={"/"}><FontAwesomeIcon icon={faTwitter} size="2x" /></Link></li>
                    <li><Link to={"/"}><FontAwesomeIcon icon={faInstagram} size="2x" /></Link></li>
                    <li><Link to={"/"}><FontAwesomeIcon icon={faYoutube} size="2x" /></Link></li>
                  </ul>
                </span>
              </div>
            </nav>
          </div>
          );
        }}
      </Query>
    </header>
  );
};

export default Nav;  