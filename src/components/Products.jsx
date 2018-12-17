import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Product from './Product';

class Products extends Component {

    render() {
        return (
            <Row>
                {this.props.products.map((product) => (
                    <Link key = {product.id} to={`/${product.id}`}>
                        <Product product = {product} />
                    </Link>
                    )
                )}
            </Row>
        )
    }
}

export default Products;
