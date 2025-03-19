import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import Product from "./components/product";
import Navbar from './components/navbar';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <Navbar/>
            <div className='main-container'>
                <div className='product-container'>
                    <Product title="Tomaten" description="Füge Tomaten zu deinem Warenkorb hinzu"/>
                    <Product title="Gurken" description="Füge Gurken zu deinem Warenkorb hinzu"/>
                    <Product title="Äpfel" description="Füge Äpfel zu deinem Warenkorb hinzu"/>
                    <Product title="Birnen" description="Füge Birnen zu deinem Warenkorb hinzu"/>
                </div>
                <ShoppingCart/>
            </div>
            
            
        </React.Fragment>;
    }
}
 
export default App;