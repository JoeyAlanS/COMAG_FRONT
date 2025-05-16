import React from 'react';
import Container from 'react-bootstrap/Container'

interface WrappingContainerProps {
    children: React.ReactNode;
    backgroundColor?: string;
    margin?: string;
    maxWidth?:string;
    maxHeight?: string;
    height?: string;
  }


export function WrappingContainer({
    children,
    margin = "100px",
    maxWidth = "100%",
    maxHeight = "85%",
    height="85%",

}: WrappingContainerProps){
    return (
        <Container style={{
            margin, 
            maxWidth, 
            maxHeight, 
            height
            }}>
            {children}
        </Container>
    );
}

export default WrappingContainer;