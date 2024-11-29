import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1>Wellcom to Fast Pizza</h1>;
}
function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />;
      <Pizza />;
      <Pizza />;
    </div>
  );
}
function Footer() {
  return (
    <footer>{new Date().toLocaleDateString()}. We're currently open</footer>
  );
}
function Pizza() {
  return <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
