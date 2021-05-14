import './App.css';
import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "../../routes";

const App = () => {
  const routes = useRoutes();

  return (
      <Router>
        <section>
          {routes}
        </section>
      </Router>
  )
}

export default App;
