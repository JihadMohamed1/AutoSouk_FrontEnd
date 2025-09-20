import React from 'react';

export default function ContactComponent() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>get in touch with us:</span>
          </div>

          <div>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>AutoSouk
                </h6>
                <p>
                  Your trusted marketplace for second-hand cars with transparency at every step.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">links</h6>
                <p><a href="#!" className="text-reset">Home</a></p>
                <p><a href="#!" className="text-reset">About</a></p>
                <p><a href="#!" className="text-reset">Sing In</a></p>
                <p><a href="#!" className="text-reset">Help</a></p>
              </div>
               <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Social Media</h6>
                <p><a href="#!" className="text-reset">facebook</a></p>
                <p><a href="#!" className="text-reset">Instagram</a></p>
                <p><a href="#!" className="text-reset">TikToK</a></p>
                <p><a href="#!" className="text-reset">Youtube</a></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Casablanca, Oulfa 20260, MAR</p>
                <p><i className="fas fa-envelope me-3"></i> Contact@autosouk.com</p>
                <p><i className="fas fa-phone me-3"></i> + 212 6 34 56 78 87</p>
                <p><i className="fas fa-print me-3"></i> + 212 6 34 56 78 87</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2025 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> AutoSouk.com</a>
        </div>
      </footer>
    </div>
  );
}
