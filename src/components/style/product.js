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
    max-height: 300px;
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