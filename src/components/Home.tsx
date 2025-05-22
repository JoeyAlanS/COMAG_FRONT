import { Container, Row, Col } from 'react-bootstrap';
import {default as JsonData} from "../data/data.json";
import { Link } from "react-router-dom";
import { Sobre } from './Sobre';
import { Features } from './Apresentacao';
import ImgCarousel from './ui/Carousel';
import { Testemunhos } from './Testemunhos';
import { Gallery } from './Gallery';
import { Team } from './Team';
import React from 'react';


export function Home()
{
    return(
        <><header id='home'>
        <div className='intro'>
          <div className='overlay'>
            <Container>
              <Row>
                <Col md={{ span: 8, offset: 2 }} className=' intro-text'>
                  <h1 className="animate__animated animate__fadeInDown">
                    {JsonData ? JsonData.Header.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p className="animate__animated animate__fadeInUp">
                    {JsonData ? JsonData.Header.paragraph : 'Loading'}
                  </p>
                  <Link
                    to="/servicos"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Conheça nossos serviços
                  </Link>{' '}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </header>
      <Features/>
      <ImgCarousel/>
      <Testemunhos/>
      <Gallery/>
      <Sobre/>
      </>
    )
    
}

/*

*/