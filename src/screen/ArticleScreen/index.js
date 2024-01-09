import { Link } from 'react-router-dom';
import FirstHeader from "../../component/FirstHeader";
import BannerComponent from "../../component/BannerComponent";
import Footer from "../../component/FooterComponent";
import blog_icon from '../../assets/images/blog-icon.png';

function ArticleScreen() {
  return (
    <div>
        <FirstHeader />
        <BannerComponent image={ blog_icon } label="Foxpool Blog" />
        <section className="innerpage-content">
            <div className="container blog-page">
              <div className="row">
                  <div className="col-md-8 m-auto">
                      <h1 className="text-center">7 Reasons of choosing Foxpool</h1>
                      <p className="text-center"><Link to={'/Blog'} className="btn btn-primary"><i className="fas fa-arrow-left"></i> Back to Blog</Link></p>
                      <p className="text-bold-caps mt-4 mb-0">1. Low Fees</p>
                      <p>Mining4Pros was build to make mining accessible to everyone. We want to offer our users a platform to mine as easily as possible. Furthermore, we want to make sure that we can maximize the profit for our users. Therefore we have configured our pools to only charge a 0.1% fee.</p>
                      
                      <p className="text-bold-caps mt-4 mb-0">2. Full Payout</p>
                      <p>In order to create sustainable added value for our miners, all earnings are fully distributed. This can be seen at any time through the transparent design of the pool. We want to be a platform for small miners as well as for professional miners with large mining farms.</p>
                      
                      <p className="text-bold-caps mt-4 mb-0">3. Efficient Mining</p>
                      <p>Our software is constantly improved and kept up to date. Our team of professional developers work very hard to make the pool as efficient and profitable as possible, for our customers.</p>
                      
                      <p className="text-bold-caps mt-4 mb-0">4. Great Support</p>
                      <p>We are always available for you. You can reach us anytime via our chat function and ask your questions, no matter if you are already a customer or not. We will be happy to help you to connect to our pool and answer questions about the functionality of our pool.</p>
                      
                      <p className="text-bold-caps mt-4 mb-0">5. High Performance Server</p>
                      <p>Mining4Pros works with high performance servers to run the pool efficiently and be online at all times for our customers. A wide range of measures have been implemented in order to optimize the mining process and prevent offline times.</p>
                      
                      <p className="text-bold-caps mt-4 mb-0">6. Constant Development</p>
                      <p>Besides the existing currencies on our pool, we work very hard in to offer more and more currencies for you. If you are interested in a specific currency, please feel free to contact us via the chat function and we will check an implementation for you.</p>
                      
                      <p className="text-bold-caps mt-4 mb-0">7. Further Perspective</p>
                      <p>The minimal profits that are generated, are invested in the expansion of our platform. In the near future, we want to provide a staking pool in addition to other currencies for mining. Here we work according to the same principles as with our mining pools.</p>	
                      
                  </div>
              </div>
            </div>
        </section>
        <Footer />
    </div>
  );
}

export default ArticleScreen;
