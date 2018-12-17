import React, {Component} from 'react';
import axios from 'axios';
import { Grid } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Products from './components/Products'
import ProductDescription from './components/ProductDescription'
import { H1 } from './components/style/product'

class App extends Component {
    state = {
        products: undefined
    };

    componentDidMount() {
        axios.get(`http://demo4452328.mockable.io/properties`)
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
                        {!this.state.products && <H1>Loading...</H1>}
                        {this.state.products && <Route exact path="/" render={() => <Products products = {this.state.products}/>}/>}
                        {this.state.products && <Route path="/:id" render={({match}) => <ProductDescription match ={match} products = {this.state.products} />}/>}
                    </Grid>
                </div>
            </Router>
        );
    }
}

export default App;
