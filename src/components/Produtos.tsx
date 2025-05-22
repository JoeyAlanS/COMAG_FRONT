import { useState, useEffect } from 'react';
import {
  Container, Row, Col, Card, Spinner, Alert,
  Form, Dropdown, ButtonGroup, Button
} from 'react-bootstrap';
import { apiService, Product } from '../services/api';
import { Link } from 'react-router-dom';
import { FaFilter, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

export function Produtos() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [reverse, setReverse] = useState(false);

  // Calcula a contagem de produtos por categoria
  const categoryCounts: Record<string, number> = products.reduce((acc, product) => {
    const cat = product.category || 'Outros';
    acc[cat] = (acc[cat] || 0) + 1;
    acc['Todos'] = (acc['Todos'] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

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

    // Filtro por busca
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => {
        const name = p?.name?.toLowerCase() || '';
        const description = p?.description?.toLowerCase() || '';
        return name.includes(term) || description.includes(term);
      });
    }

    // Inverte a ordem se reverse estiver true
    if (reverse) {
      result = result.reverse();
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchTerm, products, reverse]);

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
          <p className="lead">Encontre o equipamento ideal para seu negócio!</p>
        </div>

        {/* Filtros */}
        <div className="mb-4">
          <Row className="align-items-center">
            <Col xs={12} md={9} className="mb-2 mb-md-0">
              <Form.Control
                type="search"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="sm"
                style={{
                  borderRadius: 8,
                  fontSize: 14,
                  height: 36,
                  width: "100%",
                  maxWidth: "100%",
                  background: "#fff"
                }}
              />
            </Col>
            <Col xs={12} md={3} className="d-flex justify-content-md-end justify-content-start gap-2 mt-2 mt-md-0">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  variant="outline-primary"
                  size="sm"
                  style={{
                    borderRadius: 8,
                    minWidth: 44,
                    height: 36,
                    padding: "0 12px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: 14
                  }}
                  id="dropdown-categorias"
                >
                  <FaFilter style={{ marginRight: 6, fontSize: 16 }} />
                  <span style={{ fontWeight: 500 }}>
                    {selectedCategory}
                  </span>
                  <span className="text-muted ms-1" style={{ fontSize: 13 }}>
                    ({categoryCounts[selectedCategory] || 0})
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories.map(category => (
                    <Dropdown.Item
                      key={category}
                      active={selectedCategory === category}
                      onClick={() => setSelectedCategory(category)}
                      style={{ fontSize: 14 }}
                    >
                      {category} <span className="text-muted">({categoryCounts[category] || 0})</span>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Button
                variant="outline-secondary"
                size="sm"
                style={{
                  borderRadius: 8,
                  width: 36,
                  height: 36,
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                title="Inverter visualização"
                onClick={() => setReverse(r => !r)}
              >
                {reverse ? <FaSortAmountUp /> : <FaSortAmountDown />}
              </Button>
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
                      src={
                        product.image.startsWith('data:image') // Check if it's a base64 string
                          ? product.image // Use the base64 string directly
                          : `/img/produtos/${product.image}` // Otherwise, use the image path
                      }
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