import React, {Component} from 'react';
import axios from 'axios';
import { Grid } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Products from './components/Products';
import ProductDescription from './components/ProductDescription';
import {Preloader} from "./components/Preloader";

import { baseUrl } from "./constants";

class App extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        axios.get(`${baseUrl}properties`)
            .then(res => {
                const products = res.data.data;
                this.setState({products});
            })
    }

    render() {
        return (
            <Router>
                <div>
                    <Grid>
                        {!this.state.products.length && <Preloader/>}
                        <Route exact path="/" render={() => <Products products = {this.state.products}/>}/>
                        <Route path="/:id" render={({match}) => <ProductDescription match ={match} products = {this.state.products} />}/>
                    </Grid>
                </div>
            </Router>
        );
    }
}

export default App;
