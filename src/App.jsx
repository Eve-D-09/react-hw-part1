import React, { Component } from "react";
import Heading from "./components/Heading.jsx";
import Product from "./components/Product.jsx";
import "./App.css";

class App extends Component {
  state = { count: 0 };

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const product = {
      title: "Galbani Mozzarella 125g",
      img: "https://www.google.be/url?sa=i&url=https%3A%2F%2Fnamanmarket.com%2Fproducts%2Fgalbani-mozzarella-125g&psig=AOvVaw1trwoOCIG3Nkph8l72Nw36&ust=1684921400548000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCol76Ti_8CFQAAAAAdAAAAABAS",
      price: "2.99 Eur",
    };

    return (
      <>
        <Heading />
        <div className="main-container">
          <Product title={product.title} price={product.price}  img={product.img} />
          <div className="count-container">
            <button className="decrease" onClick={this.decrease}> -  </button>
              
            <div className="count-start">
              <h3>{this.state.count}</h3>
            </div>
            <button className="decrease" onClick={this.increase}> +  </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
