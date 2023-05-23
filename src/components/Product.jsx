import React, { Component } from 'react';


class Product extends Component {
    // state = {  } 
    render() { 
       
        return (
            <>
            <div className="product">
              <p>{this.props.title}</p>
              <p>{this.props.price}</p>
              <img src={this.props.img}/>
            </div>
            </>
        );
    }
}
 
export default Product;