import React from "react";
import Recentpost from "../Recentpost";
import Topcategory from "../Topcategory";

const Sidebar = () =>{
    return (
        <div className="sidebar">
                <h4 className="heading-sidebar">Recent Post</h4>
                <Recentpost />
                <h4 className="heading-sidebar mt-4 mb-3">Top Category</h4>
                <Topcategory />
        </div>
    );
};

export default Sidebar;