import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

function App() {
  return (
    <div className="container">
      <h1>Hello React! I am here! </h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    /* color: "red", fontSize: "48px", textTransform: "uppercase" */
  };

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2> Our menu</h2>
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price={15}
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={18}
      />
      <Pizza
        name="Pizza Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={6}
      />
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOPen = hour >= openHour && hour <= closeHour;
  console.log(isOPen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry, we're closed!");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open");
}

// function PizzaSpinaci() {
//   return (
//     <div>
//       <img src="pizzas/spinaci.jpg" alt="Pizza spinaci name" />
//       <h3>Pizza Spinaci</h3>
//       <p>Tomato, mozarella, spinach, and ricotta cheese</p>
//     </div>
//   );
// }

// function PizzaFunghi() {
//   return (
//     <div>
//       <img src="pizzas/funghi.jpg" alt="Pizza funghi name" />
//       <h3>Pizza Funghi</h3>
//       <p>Tomato, mozarella, mushrooms, and onion</p>
//     </div>
//   );
// }

// function PizzaSalamino() {
//   return (
//     <div>
//       <img src="pizzas/salamino.jpg" alt="Pizza salamino name" />
//       <h3>Pizza Salamino</h3>
//       <p>Tomato, mozarella, and pepperoni</p>
//     </div>
//   );
// }

// function PizzaProsciutto() {
//   return (
//     <div>
//       <img src="pizzas/prosciutto.jpg" alt="Pizza prosciutto name" />
//       <h3>Pizza Prosciutto</h3>
//       <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
//     </div>
//   );
// }

// function Focaccia() {
//   return (
//     <div>
//       <img src="pizzas/focaccia.jpg" alt="Focaccia name" />
//       <h3>Focaccia</h3>
//       <p>Bread with italian olive oil and rosemary</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before version 18
// React.render(<App />);
