import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  return (
    <Container className="py-5">
      {/* Product Image and Details */}
      <Row className="mb-5">
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={6}>
          <h2 className="mb-3">{product.name}</h2>
          <h4 className="text-primary mb-4">R$ {product.price.toFixed(2)}</h4>
          <p className="text-muted">{product.description}</p>
          <Button variant="primary" className="mt-3">
            Comprar Agora
          </Button>
        </Col>
      </Row>

      {/* Related Products Carousel */}
      <h3 className="mb-4">Produtos Relacionados</h3>
      <Carousel>
        {relatedProducts.map((relatedProduct) => (
          <Carousel.Item key={relatedProduct.id}>
            <div className="d-flex justify-content-center">
              <img
                src={relatedProduct.image}
                alt={relatedProduct.name}
                className="img-fluid rounded shadow"
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
            </div>
            <Carousel.Caption>
              <h5>{relatedProduct.name}</h5>
              <p>R$ {relatedProduct.price.toFixed(2)}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default ProductDetails;