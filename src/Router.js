import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./Hello";
import App from "./List";
import Write from "./Write";

const Router = (props) => {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Hello />} />
          {/* <Route path="/article" element={<App />} />
          <Route path="/write" element={<Write />} /> */}
          {/* <Route path="article/:id" element={< />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };

export default Router;