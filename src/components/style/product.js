import styled from "styled-components";

export const Wrapper = styled.div`
   padding: 10px;
   height: 450px;
   width: 100%;
   background-color: #eee;
   margin-bottom: 10px;
   border-radius: 10px;
   &:hover {
      border: 1px solid #000;
   }
`;

export const ImageWrapper = styled.div`
    overflow: hidden;
    height: ${props => props.IWHeight};
    text-align: center;
`;

export const FullAddress = styled.h6`
    height: 30px;
    text-overflow: ellipsis; 
    white-space: nowrap;
    overflow: hidden;
    padding: 5px;
`;

export const Image = styled.img`
    
`;

export const Price = styled.h3`
    
`;

export const Area = styled.p`
    
`;

export const Description = styled.p`
    font-size: 14px;
`;

export const H1 = styled.h1`
    
`;

export const Rating = styled.h4`
    
`;