import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Write from "./pages/Write";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import View from "./pages/View";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{ box-sizing:border-box;}
  html{
    overflow-x:hidden;
    width:100vw;
    height:100vh;
    background-color:#FCFCFC;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
