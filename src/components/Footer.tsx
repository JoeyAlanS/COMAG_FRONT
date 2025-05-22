

import {default as JsonData} from "../data/data.json";
import 'bootstrap-icons/font/bootstrap-icons.css';


export function Footer (): JSX.Element {
    return <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">
                    {JsonData ? JsonData.Footer.title : 'Loading'}
                    </h5>
                <p> {JsonData ? JsonData.Footer.subtitle : 'Loading'}</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><i className="bi bi-whatsapp"></i>  (85) 98103-4391</li>
                    <li><i className="bi bi-geo-alt-fill"></i> Av. Raul Barbosa, 6290</li>
                    <li><i className="bi bi-envelope"></i> consul.barbosa@hotmail.com</li>
                    <li></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contato</h5>
                <ul className="list-unstyled text-uppercase">
                    <li><i className="bi bi-instagram"><a href="#!">Instagram</a></i></li>
                    <li><i className="bi bi-google"></i><a href="#!">Google Business</a></li>
                    <li><i className="bi bi-youtube"></i><a href="#!">YouTube</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2025 Copyright:
        <a href="https://comagcompressores.com"> comagcompressores.com</a>
    </div>

</footer>
}