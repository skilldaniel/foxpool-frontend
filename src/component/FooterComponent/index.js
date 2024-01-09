import { Link } from 'react-router-dom';

import logo_footer from '../../assets/images/logo-footer.png';
import icon_fb from '../../assets/images/icon-fb.png';
import icon_instagram from '../../assets/images/icon-instagram.png';
import icon_twitter from '../../assets/images/icon-twitter.png';
import icon_youtube from '../../assets/images/icon-youtube.png';

function Footer() {
    return (
        <footer className="main-footer ">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-4 ">
                        <div className="logo"><Link to={'/'}><img src={ logo_footer } alt="logo_footer" /></Link></div>
                        <div className="copyright ">© 2021 Foxpool. All rights reserved.</div>
                        <div className="social-links ">
                            <ul>
                                <li>
                                    <Link to={'/'}><img src={ icon_fb } alt=" icon_fb " /></Link>
                                </li>
                                <li>
                                    <Link to={'/'}><img src={ icon_instagram } alt=" icon_instagram " /></Link>
                                </li>
                                <li>
                                    <Link to={'/'}><img src={ icon_twitter } alt=" icon_twitter " /></Link>
                                </li>
                                <li>
                                    <Link to={'/'}><img src={ icon_youtube } alt=" icon_youtube " /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8 ">
                        <div className="row ">
                            <div className="col-md-3 pt-4">
                                <h5>Products</h5>
                                <ul>
                                    <li> <Link to={'/'}>App Download</Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3 pt-4">
                                <h5>Services</h5>
                                <ul>
                                    <li> <Link to={'/apidocument'}>API Docs</Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3 pt-4">
                                <h5>Help</h5>
                                <ul>
                                    <li> <a href="https://www.youtube.com/channel/UCsTABJa13t8D_gyenDaFEuA/featured">Mining Turorials</a> </li>
                                    <li> <Link to={'/FAQ'} >FAQ</Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3 pt-4">
                                <h5>Contact Us</h5>
                                <ul>
                                    <li> <Link to={'/contactUs'} >Contact & Partnerships</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
  