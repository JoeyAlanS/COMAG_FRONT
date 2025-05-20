// src/components/ErrorPage.tsx
import { useRouteError } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";

export function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <Container className="my-5">
      <Alert variant="danger">
        <h1>Oops!</h1>
        <p>Desculpe, ocorreu um erro inesperado.</p>
        <p>
          <i>{error.message || error.toString()}</i>
        </p>
      </Alert>
    </Container>
  );
}