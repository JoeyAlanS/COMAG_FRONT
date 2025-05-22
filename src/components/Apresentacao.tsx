

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faToolbox,faHammer,faWind,faHeadset} from "@fortawesome/free-solid-svg-icons";
import {default as JsonData} from '../data/data.json';


export function Features()
{

  //AJEITAR ICONS
    return (
    <div id="features" className='text-center'>

    <Container>
      
      <Row>

        <Col md={{ span: 10, offset: 1 }} className="section-title">
          <br></br>
          <br></br>
          <br></br>
        <p> <h2>O que fazemos?</h2> </p>
        </Col>
     
      {JsonData
        ? JsonData.ServicosHome.map((d, i) => (
            <Col xs={6} md={3} key={`${d.title}-${i}`} className="pb-5">
        {' '}
            {d.icon=='faToolbox'?<FontAwesomeIcon className="pb-4"icon={faToolbox} size="2x" />:''}
            {d.icon=='faHammer'?<FontAwesomeIcon className="pb-4" icon={faHammer} size="2x" />:''}
            {d.icon=='faWind'?<FontAwesomeIcon className="pb-4" icon={faWind} size="2x" />:''}
            {d.icon=='faHeadset'?<FontAwesomeIcon className="pb-4" icon={faHeadset} size="2x" />:''}
          
        <h3>{d.title}</h3>
        <p>{d.text}</p>
            </Col>  ))
        : 'Loading...'}  </Row>
    </Container>
        </div>  
      
    )
}