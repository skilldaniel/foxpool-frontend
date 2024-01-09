import FirstHeader from "../../component/FirstHeader";
import BannerComponent from "../../component/BannerComponent";
import Footer from "../../component/FooterComponent";
import email_icon from '../../assets/images/email-icon.png';

function FirstScreen() {
  return (
    <div>
      {/* <SpinnerComponent /> */}
        <FirstHeader />
        <BannerComponent image={ email_icon } label="Contact & Partnerships" />
        <section className="innerpage-content">
            <div className="container contact-page">
                <div className="row">
                <div className="col-md-8 m-auto text-center">
                    <h2>Get in touch with us.</h2>
                    <h3>We are happy to help.</h3>
                    <p className="mt-5 mb-5">Wether you are an investor, who wants to invest in the future or an innovator, who is interested in collabarating and shaping the future. Please feel free to send us a request!</p>
                </div>
                </div>
                <form method="post" action="">
                <div className="row mb-5">
                    <div className="col-md-8 m-auto">
                    <div className="row">
                        <div className="col-md-6 pb-2">
                        <div className="form-group">
                            <label htmlFor="name">Name <span style={{color: `#5546a0`}} >*</span></label>
                            <input type="text" className="form-control" id="name" placeholder="Your name" required />
                        </div>
                        </div>
                        <div className="col-md-6 pb-2">
                        <div className="form-group">
                            <label htmlFor="email">Email <span style={{color: `#5546a0`}} >*</span></label>
                            <input type="email" className="form-control" id="email" placeholder="Your email" required />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pb-2">
                        <div className="form-group">
                            <label htmlFor="phone">Phone <span style={{color: `#5546a0`}} >*</span></label>
                            <input type="text" className="form-control" id="phone" placeholder="Phone #" required />
                        </div>
                        </div>
                        <div className="col-md-6 pb-2">
                        <div className="form-group">
                            <label htmlFor="company_name">Company Name</label>
                            <input type="text" className="form-control" id="company_name" placeholder="Company name" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pb-2">
                        <div className="form-group">
                            <label htmlFor="message">Message <span style={{color: `#5546a0`}} >*</span></label>
                            <textarea className="form-control" style={{height: `#166px`}} id="message" placeholder="Write your message" required></textarea>
                        </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <button type="submit" className="btn-submit btn btn-primary">Send Message</button>
                    </div>
                    </div>
                </div>
                </form>
            </div>
        </section>
        <Footer />
    </div>
  );
}

export default FirstScreen;
