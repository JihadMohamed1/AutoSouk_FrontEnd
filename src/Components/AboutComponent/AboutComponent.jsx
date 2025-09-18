import React from 'react';
import './AboutComponent.css';
import car1 from '../../assets/car1.jpeg';
import car2 from '../../assets/car5.webp';
import car3 from '../../assets/car3.jpg';

export default function AboutComponent() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">More Info</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
            style={{ backgroundImage: `url(${car3})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Short title, long jacket
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={car1}
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use href="#geo-fill"></use>
                  </svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use href="#calendar3"></use>
                  </svg>
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second card */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
            style={{ backgroundImage: `url(${car2})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Much longer title that wraps to multiple lines
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={car2}
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use href="#geo-fill"></use>
                  </svg>
                  <small>Pakistan</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use href="#calendar3"></use>
                  </svg>
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third card */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
            style={{ backgroundImage:  `url(${car1})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Another longer title belongs here
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={car3}
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use href="#geo-fill"></use>
                  </svg>
                  <small>California</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use href="#calendar3"></use>
                  </svg>
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
