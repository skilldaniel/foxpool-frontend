import React from 'react';
import AOS from 'aos';

class SendMessage extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 2500,
        });
    }
    render() {
        return (
            <section className="get-in-touch-section " 
    // beast find reason start
            data-aos={"fade-up"} data-aos-easing={"ease-out-cubic"}
            // data-aos-duration="2000"
    // beast find reason end
            >
                <div className="container ">
                    <h2>Get in touch with us. <span>We are happy to help.</span></h2>
                    <form method="post" action="">
                        <div className="row ">
                            <div className="col-md-6 ">
                                <div className="row ">
                                    <div className="col-md-6 ">
                                        <div className="form-group ">
                                            <label htmlFor="name ">Name <span>*</span></label>
                                            <input id="name" type="text" className="form-control " placeholder="Name" aria-label="Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group ">
                                            <label htmlFor="email">Your Email <span>*</span></label>
                                            <input id="email" type="email" placeholder="Your email" className="form-control" aria-label="Your email" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-6 ">
                                        <div className="form-group ">
                                            <label htmlFor="phone ">Phone #</label>
                                            <input id="phone " placeholder="Phone # " type="tel " className="form-control" aria-label="Phone #" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group ">
                                            <label htmlFor="company ">Company Name</label>
                                            <input placeholder="Company Name" type="text " className="form-control" aria-label="Company Name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="form-group ">
                                    <label htmlFor="messages ">Message <span>*</span></label>
                                    <textarea id="messages" className="form-control" placeholder="Write your message *" aria-label="Write your message *" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <button type="submit" className="btn-submit btn btn-primary ">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    
    }
  }
  
  export default SendMessage;
  