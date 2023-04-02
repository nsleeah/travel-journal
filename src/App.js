import React from "react";
import './App.css';
import Nav from "./components/Nav";
import Card from "./components/Card";
import Data from "./components/Data";

function App() {
  const cards = Data.map((item) => {
  return <Card key={item.key} {...item} />;
});

return (
  <div>
    <Nav />
    <section className="cards--block">{cards}</section>
  </div>
);
} 
 

export default App;
