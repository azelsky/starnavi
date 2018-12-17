import React, {Component} from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

import {Area, FullAddress, ImageWrapper, Price, Description, H1} from './style/product';
import {handleArea, handlePrice} from '../helper';

class ProductDescription extends Component {

    render() {
        const product = this.props.products.find((product) => product.id.toString() === this.props.match.params.id);
        if (!product) return <H1>Page not Found 404</H1>
        const {full_address, description, area, price, images} = product;
        return (
            <Row>
                <Col md={12}>
                    <Carousel>
                        {images.map((image, id) => (
                            <Carousel.Item key={id}>
                                <ImageWrapper>
                                    <img alt="900x500" src={image} />
                                </ImageWrapper>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <FullAddress>{full_address}</FullAddress>
                    <Description>{description}</Description>
                    <Price>Price: {handlePrice(price)}</Price>
                    {area && <Area>Area: {handleArea(area)}</Area>}

                </Col>
            </Row>
        )
    }
}

export default ProductDescription;

ProductDescription.propTypes = {
    products: PropTypes.array,
    match: PropTypes.object
};