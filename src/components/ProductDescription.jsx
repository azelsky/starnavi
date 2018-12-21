import React, {Component} from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

import {Area, FullAddress, ImageWrapper, Price, Description, Rating} from './style/product';
import {handleArea, handlePrice, handleRating} from '../helper';
import {PageNotFound} from "./PageNotFound";

class ProductDescription extends Component {

    render() {
        const { products, match } = this.props;
        if (!products.length) return null;
        const product = products.find((product) => product.id.toString() === match.params.id);
        if (products.length && !product) return <PageNotFound />;
        const {full_address, description, area, price, images, rating} = product;
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
                    {rating && <Rating>Rating: {handleRating(rating)}</Rating>}
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