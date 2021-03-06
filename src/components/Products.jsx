import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Product from './Product';
import PropTypes from "prop-types";

class Products extends Component {

    render() {
        const { products } = this.props;
        if (!products.length) return null;
        return (
            <Row>
                {products.map((product) => (
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

Products.propTypes = {
    products: PropTypes.array
};
