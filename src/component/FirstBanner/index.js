import { Link } from 'react-router-dom';

import mine_light from '../../assets/images/mine-light.png';
import banner_img from '../../assets/images/banner-img.png';

import '../../assets/css/stylesheet.css';
import '../../assets/css/all.min.css';

function FirstBanner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-row">
                    <div 
                        className="banner-left" 
// beast find reason start
                        // data-aos="fade-up-right" 
                        // data-aos-easing="ease-out-cubic" 
                        // data-aos-duration="2000"
// beast find reason end
                    >
                        <h1>Enjoy the new <span>mining experience</span> with Foxpool!</h1>
                        <div className="cta-btn" style={{marginTop: `10px`}} >
                            <Link to={'/'}><img src={ mine_light } alt="mine_light" /> <span>Let's start mining now!</span></Link>
                        </div>
                    </div>
                    <div className="banner-right" 
// beast find reason start                    
                    // data-aos="fade-up-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
// beast find reason end
                    ><img src={ banner_img } alt=" banner_img " /></div>
                </div>
            </div>
        </section>
    );
}
  
  export default FirstBanner;
  