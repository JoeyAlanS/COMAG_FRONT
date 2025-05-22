import {default as JsonData} from "../data/data.json";
import 'bootstrap-icons/font/bootstrap-icons.css';


export function Footer (): JSX.Element {
    return <footer className="page-footer font-small blue pt-4">
          <hr className="mb-4 mt-0 w-100" style={{ borderColor: '#FFFFFF' }} />
    <div className="container-fluid ">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 text-center text-md-center">
                <h3 className="text-uppercase fs-2">
                    {JsonData ? JsonData.Footer.title : 'Loading'}
                    </h3>
                <p> {JsonData ? JsonData.Footer.subtitle : 'Loading'}</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contato</h5>
                <ul className="list-unstyled">
                    <li><i className="bi bi-whatsapp"></i>  (85) 98103-4391</li>
                    <li><i className="bi bi-whatsapp"></i>  (85) 98836-2269</li>
                    <li><i className="bi bi-geo-alt-fill"></i> Av. Raul Barbosa, 6290</li>
                    <li><i className="bi bi-envelope"></i> consul.barbosa@hotmail.com</li>
                    <li></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Redes Sociais</h5>
                <ul className="list-unstyled ">
                    <li>
                      <a href="#!" className="text-decoration-none text-dark">
                        <i className="bi bi-instagram m-1"></i> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-decoration-none text-dark">
                        <i className="bi bi-google m-1"></i> Google Business
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-decoration-none text-dark">
                        <i className="bi bi-youtube m-1"></i> YouTube
                      </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-2 w-100" style={{ borderColor: '#FFFFFF' }} />
    <div className="footer-copyright text-center py-3">© 2025 Copyright:
        <a href="https://comagcompressores.com"> comagcompressores.com</a>
    </div>

</footer>
}