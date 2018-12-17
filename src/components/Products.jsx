import React, {Component} from 'react';
import { Row } from 'react-bootstrap';

import Product from './Product';


class Products extends Component {

    render() {
        return (
            <Row>
                {this.props.products.map((product) => <Product key = {product.id} product = {product} />)}
            </Row>
        )
    }
}

export default Products;
