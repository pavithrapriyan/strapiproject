import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../../components/Nav";
import Article from "../Article";
import Home from "../Home";
import Footer from "../../components/Footer";

function App() {  
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/article/:id" component={Article} exact />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;  