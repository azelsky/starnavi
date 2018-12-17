import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
   padding: 10px;
   display: inline-block;
`;

const FullAddress = styled.h4`
`;

const Image = styled.img`
    width: 100%;
`;

const Price = styled.h3`
    
`;

const Area = styled.p`
    
`;

class Product extends Component {

    render() {
        const { id, full_address,  description, images, area, price} = this.props.product;
        return (
            <Col md={3}>
                <Wrapper>
                    <FullAddress>{full_address}</FullAddress>
                    <Image src={images[0]}></Image>
                    <Price>{ price }</Price>
                    <Area>{ area }</Area>
                </Wrapper>
            </Col>
        );
    }
}

export default Product;
