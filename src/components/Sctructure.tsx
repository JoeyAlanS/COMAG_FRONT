import { Container, Row, Col } from 'react-bootstrap';
import {default as JsonData} from "../data/data.json";
import { Link } from "react-router-dom";


export function Structure()
{
    return(
        <header id='home'>
        <div className='intro'>
          <div className='overlay'>
          <Container >
              <Row>
                <Col   md={{ span: 8, offset: 2 }} className=' intro-text'>
                  <h1>
                    {JsonData ? JsonData.Header.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{JsonData ? JsonData.Header.paragraph : 'Loading'}</p>
                  <Link
                    to="/servicos"
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Conheça nossos serviços
                  </Link>{' '}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </header>
    )
    
}
