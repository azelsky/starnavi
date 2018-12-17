import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import { Image, ImageWrapper, Area, FullAddress, Price, Wrapper } from './style/product'

class Product extends Component {

    handleArea(area) {
        return area && `${area} sq. fr.`
    }

    handlePrice(price) {
        return `$${price.toString().replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ")}`;
    }

    render() {
        const { full_address, images, area, price } = this.props.product;
        return (
            <Col md={3}>
                <Wrapper>
                    <FullAddress>{full_address}</FullAddress>
                    <ImageWrapper>
                        <Image src={images[0]}></Image>
                    </ImageWrapper>
                    <Price>{this.handlePrice(price)}</Price>
                    <Area>{this.handleArea(area)}</Area>
                </Wrapper>
            </Col>
        );
    }
}

export default Product;
