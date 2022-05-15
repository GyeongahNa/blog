import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./Hello";
import List from "./List";
import Write from "./Write";
import Detail from "./Detail";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/article" element={<List />} />
        <Route path="/article/write" element={<Write />} />
        <Route path="article/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
