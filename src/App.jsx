import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import Product from "./components/product";
import Navbar from './components/navbar';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <Navbar/>
            <div className='product-container'>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            
        </React.Fragment>;
    }
}
 
export default App;