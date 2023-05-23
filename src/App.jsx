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
    if (this.state.count === 0 ) {
      return;
    }
    this.setState({ count: this.state.count - 1 });
    
  };

  render() {
    const product = {
      title: "Galbani Mozzarella 125g",
      img: "https://product.hstatic.net/1000282430/product/galbani-mozzarella-cheese-125g_d8e6611b0c134f6c82be236b8e421b96_master.jpg",
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
