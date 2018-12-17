import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

import { Image, ImageWrapper, Area, FullAddress, Price, Wrapper } from './style/product'
import {handleArea, handlePrice} from '../helper';

class Product extends Component {

    render() {
        const { full_address, images, area, price } = this.props.product;
        return (
            <Col md={3} sm={6} xs={12}>
                <Wrapper>
                    <FullAddress>{full_address}</FullAddress>
                    <ImageWrapper IWHeight = "300px">
                        <Image src={images[0]}></Image>
                    </ImageWrapper>
                    <Price>{handlePrice(price)}</Price>
                    <Area>{handleArea(area)}</Area>
                </Wrapper>
            </Col>
        );
    }
}

export default Product;
