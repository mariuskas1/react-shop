import React, { Component } from 'react';


class ShoppingCart extends Component {
    state = { 
        items: [
            {
                amount:1,
                name:'Tomaten',
                price:4.9
            },
            {
                amount:2,
                name:'Äpfel',
                price:4.9
            }
        ]
     } 

    render() { 
        return <div>
            <h2>Warenkorb</h2>
            { this.props.items.map(item => <div key={item.name}>{item.amount}x {item.name} </div>) }
        </div>;
    }
}
 
export default ShoppingCart;