import React from "react";

export default function SearchBarComponent() {
  return (
     <div className="container my-4">
      <form className="row justify-content-center g-2">

        {/* Mark */}
        <div className="col-md-2">
          <select className="form-select" aria-label="Select mark">
            <option value="">Select Mark</option>
            <option value="toyota">Toyota</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        {/* Year */}
        <div className="col-md-2">
          <select className="form-select" aria-label="Select year">
            <option value="">Select Year</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>

        {/* Transmission */}
        <div className="col-md-2">
          <select className="form-select" aria-label="Select transmission">
            <option value="">Transmission</option>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>
        </div>

        {/* Fuel */}
        <div className="col-md-2">
          <select className="form-select" aria-label="Select fuel">
            <option value="">Fuel Type</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        {/* Search input */}
        <div className="col-md-2">
          <input
            className="form-control"
            type="text"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>

        {/* Button */}
        <div className="col-md-1">
          <button className="btn btn-primary w-100" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
