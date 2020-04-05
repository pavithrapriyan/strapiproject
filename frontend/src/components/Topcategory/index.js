import React from "react";
import Query from "../../components/Query";
import CATEGORIES_QUERY from "../../queries/category/categories";
import { Link } from "react-router-dom";

const Topcategory = () => {
return (
<div className="topcategory">
    <ul>
        <Query query={CATEGORIES_QUERY} id={null}>
            {({ data: { categories } }) => {
                            return (
                                <div>
                                    {
                                        categories.slice(0,5).map((category) => {
                                            return (
                                                <li>
                                                    <Link class="text-capitalize" to={`/category/${category.id}`}>
                                                        {category.name}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                            )
                    }
            } 
        </Query>
    </ul>
</div>
)
};

export default Topcategory;