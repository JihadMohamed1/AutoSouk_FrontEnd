import React, { useState } from 'react';
import car from '../../assets/car2.jpg';
import car2 from '../../assets/car3.jpg';
import car3 from '../../assets/car1.jpeg';

export default function CarCardComponent({ carinfo }) {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const imgs = [car, car2, car3]; // array of images

  return (
    <>
      {/* Card */}
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imgs[0]}
          className="card-img-top"
          alt="car"
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        />
        <div className="card-body">
          <h5 className="card-title">{carinfo.title}</h5>
          <p className="card-text">{carinfo.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{carinfo.make}</li>
          <li className="list-group-item">{carinfo.price} DH</li>
          <li className="list-group-item">{carinfo.fuel_type}</li>
        </ul>
        <div className="card-body">
          <a className="card-link" href="#">View Details</a>
          <a className="card-link" href="#">Contact Seller</a>
        </div>
      </div>

      {/* Modal */}
{showModal && (
  <div
    className="modal fade show"
    style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    onClick={handleClose}
  >
    <div
      className="modal-dialog modal-dialog-centered model-sl" // <-- make it extra large
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{carinfo.title}</h5>
          <button type="button" className="btn-close" onClick={handleClose}></button>
        </div>
        <div className="modal-body">
          {/* Bootstrap Carousel */}
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              {imgs.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? "active" : ""}
                  aria-current={idx === 0 ? "true" : undefined}
                  aria-label={`Slide ${idx + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {imgs.map((img, idx) => (
                <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                  <img src={img} className="d-block w-100" alt={`Slide ${idx + 1}`} />
                </div>
              ))}
            </div>
            {imgs.length > 1 && (
              <>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
}
