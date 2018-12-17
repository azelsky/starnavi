import React, {Component} from 'react';
import axios from 'axios';
import {Grid} from 'react-bootstrap';

import Products from './components/Products'

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
        console.log(this.state.products);
        return (
            <Grid>
                {this.state.products && <Products products = {this.state.products}/>}
            </Grid>
        );
    }
}

export default App;
