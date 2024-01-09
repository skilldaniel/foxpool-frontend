import { Link } from 'react-router-dom';

import blog1 from '../../assets/images/blog1.jpeg';

function BlogBody() {
  return (
        <section className="innerpage-content">
            <div className="container blog-page">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <Link to={'/articles'} className="navbar-brand">
                            <div className="blog-box">
                            <div><img src={ blog1 } className="img-fluid" alt="blog1" /></div>
                            <h3>7 Reasons of choosing Foxpool</h3>
                            <p className="m-0">August 2021 - Foxpool Manager</p>
                            <p className="mt-2 mb-0">Read Full Article <i className="fas fa-arrow-right"></i></p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default BlogBody;
