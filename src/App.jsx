import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import Product from "./components/product";
import Navbar from './components/navbar';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {
        items: [], 
      };
    
      addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        let existingItem = this.state.items.find( item => item.name == name);
        if (existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push({
                amount, name, price
            });
        }
        this.setState({items: currentItems})

      };

    render() { 
        return <React.Fragment>
            <Navbar/>
            <div className='main-container'>
                <div className='product-container'>
                    <Product onAdd={() => this.addItem(1, 'Tomaten', 2.99)} title="Tomaten" description="Füge Tomaten zu deinem Warenkorb hinzu"/>
                    <Product onAdd={() => this.addItem(1, 'Gurken', 2.99)} title="Gurken" description="Füge Gurken zu deinem Warenkorb hinzu"/>
                    <Product onAdd={() => this.addItem(1, 'Äpfel', 2.99)} title="Äpfel" description="Füge Äpfel zu deinem Warenkorb hinzu"/>
                    <Product onAdd={() => this.addItem(1, 'Birnen', 2.99)} title="Birnen" description="Füge Birnen zu deinem Warenkorb hinzu"/>
                </div>
                <ShoppingCart items={this.state.items}/>
            </div>
            
            
        </React.Fragment>;
    }
}
 
export default App;