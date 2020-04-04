import React from "react";
import Articles from "../../components/Articles";  
import Featured from "../../components/Featured";  

const Home = () => {
    return (
        <div>
            <div className="container pt-5 pb-5">
                <Featured />
                <Articles />
            </div>
        </div>
    );
};

export default Home;