import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Gallery queries={["Harry Potter", "Lord of the Rings", "Star Wars"]} />
      <Footer />
    </div>
  );
}

export default App;
