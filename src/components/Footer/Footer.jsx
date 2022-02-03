import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () =>{
    return (
        <div>
          <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>
    
              <div className="footerItems">
                <a href="https://facebook.com" className="me-4 text-reset">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://whataspp.com" className="me-4 text-reset">
                  <i className="fab fa-whatsapp"></i>
                </a>
    
                <a href="https://instagram.com" className="me-4 text-reset">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </section>
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <p>Jonny's Bakery</p>
                    </h6>
    
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.
                    </p>
                    <img
                      className="footerLogo"
                      height="110"
                      alt=""
                      loading="lazy"
                      src={logo}
                    ></img>
                  </div>
    
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Cakes
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Cupcakes
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Bread
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Ecuadorian Pastries
                      </a>
                    </p>
                  </div>
    
                  {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Gallery
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        About
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Products
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Contact
                      </a>
                    </p>
                  </div> */}
    
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <i className="fas fa-home me-3"></i>
                      
                      <a href="http://maps.google.com/?q=4200 Suite E South Blvd Charlotte, NC 28209">4200 Suite E South Blvd Charlotte, NC 28209</a>
                    </p>
                    <p>
                      <i className="fas fa-envelope me-3"></i>
                      <a href="mailto:webmaster@example.com">info@example.com</a>
                    </p>
                    <p>
                      <i className="fas fa-phone me-3"></i>
                      <a href="tel:+1-704-620-8005">(704)-620-8005</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
    
            <div className="copyright text-center p-4">
              © 2021 Copyright :
              <a className="text-reset fw-bold" href="#about">
                {" "}
                Jonny's Bakery
              </a>
            </div>
          </footer>
        </div>
      );
    
}

export default Footer;