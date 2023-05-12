import React from "react";
import { Content, Footer, Header } from "./";

export const Home = () => {
  return (
    <div className="home" style={{ position: "relative" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
