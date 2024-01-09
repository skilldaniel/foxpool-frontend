import { Link } from 'react-router-dom';

import '../../assets/css/stylesheet.css';
import '../../assets/css/custom.css';

function ConnectFoxPool() {
    return (
        <section className="connect-section" 
// beast find reason start
        style={{backgroundImage: `url("../../assets/images/hightlight-img.jpg")`}}
        // data-aos="fade-up"
// beast find reason end
        >
        <div className="container ">
            <h2>Connect to Foxpool and start mining</h2>
            <p>Regular payments, tutorials, reliable servers, rig monitoring bot. Fully compatible with Nicehash.</p>
            <div className="d-flex justify-content-center "> <Link to={'/'} className="btn btn-primary ">Choose Pool and Start Mining</Link> </div>
        </div>
    </section>
    );
  }
  
  export default ConnectFoxPool;
  