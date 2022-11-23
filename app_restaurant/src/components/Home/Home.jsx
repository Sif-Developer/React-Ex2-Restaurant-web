import React from "react";

const Home = (props) => {
  const dishes = [
    {
      id: 1,
      name: "plato 1",
      description: "Este es el plato 1",
      price: 10,
    },
    {
      id: 2,
      name: "plato 2",
      description: "Este es el plato 2",
      price: 20,
    },
    {
      id: 3,
      name: "plato 3",
      description: "Este es el plato 3",
      price: 15,
    },
  ];

  const dishesL = dishes.map((dish) => (
    <span> {dish.description}: {dish.name} Price: {dish.price} </span>
  ));

  return (
    <div className="home-title">
      <div className="home-products"> This are our products</div>
      {dishesL}
    </div>
  );
};

export default Home;
