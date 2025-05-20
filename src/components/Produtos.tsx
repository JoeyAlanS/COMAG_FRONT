import { useState, useEffect } from 'react';
import { 
  Container, Row, Col, Card, Spinner, Alert, 
  Button, ButtonGroup, Form 
} from 'react-bootstrap';
import { apiService, Product } from '../services/api';
import { Link } from 'react-router-dom';

export function Produtos() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await apiService.getProducts();
        // Garante que todos os produtos têm os campos necessários
        const validatedProducts = data.map(product => ({
          name: product.name || '',
          description: product.description || '',
          category: product.category || 'Outros',
          price: product.price || 0,
          id: product.id || Math.random(),
          image: product.image || '/img/produtos/default-product.jpg'
        }));
        
        setProducts(validatedProducts);
        
        // Extrai categorias únicas
        const uniqueCategories = [...new Set(validatedProducts.map(p => p.category))];
        setCategories(['Todos', ...uniqueCategories]);
        
        setFilteredProducts(validatedProducts);
      } catch (err) {
        console.error('Erro ao carregar produtos:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Filtro por categoria
    if (selectedCategory !== 'Todos') {
      result = result.filter(p => p?.category === selectedCategory);
    }
    
    // Filtro por busca com verificações de segurança
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => {
        const name = p?.name?.toLowerCase() || '';
        const description = p?.description?.toLowerCase() || '';
        return name.includes(term) || description.includes(term);
      });
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm, products]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="my-5">
        {error}
      </Alert>
    );
  }

  return (
    <div id="produtos" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2>Nossos Produtos</h2>
          <p className="lead">Encontre o equipamento ideal para sua empresa</p>
        </div>
        
        {/* Filtros */}
        <div className="mb-4">
          <Row className="g-3 align-items-center">
            <Col md={6}>
              <Form.Control
                type="search"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col md={6}>
              <ButtonGroup className="w-100 flex-wrap">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'primary' : 'outline-primary'}
                    onClick={() => setSelectedCategory(category)}
                    className="text-nowrap m-1"
                  >
                    {category}
                  </Button>
                ))}
              </ButtonGroup>
            </Col>
          </Row>
        </div>
        
        {/* Lista de produtos */}
        {filteredProducts.length > 0 ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredProducts.map((product) => (
              <Col key={product.id}>
                <Card className="h-100 shadow-sm border-0">
                  <div className="ratio ratio-16x9">
                    <Card.Img 
                      variant="top" 
                      src={product.image || '/img/produtos/default-product.jpg'}
                      alt={product.name}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fs-5">{product.name}</Card.Title>
                    <Card.Subtitle className="mb-2">
                      <span className="badge bg-secondary">{product.category}</span>
                      <span className="ms-2 fw-bold text-primary">
                        R$ {product.price.toFixed(2)}
                      </span>
                    </Card.Subtitle>
                    <Card.Text className="flex-grow-1 text-muted small">
                      {product.description}
                    </Card.Text>
                    <div className="d-grid mt-3">
                      <Link 
                        to="/contatos" 
                        state={{ product: product.name }}
                        className="btn btn-primary btn-sm"
                      >
                        Solicitar Orçamento
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Alert variant="info" className="text-center">
            Nenhum produto encontrado com os filtros selecionados.
          </Alert>
        )}
      </Container>
    </div>
  );
}