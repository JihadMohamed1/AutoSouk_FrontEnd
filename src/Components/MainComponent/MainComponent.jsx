import React, { useEffect, useState } from "react";
import './MainComponent.CSS'
import CarCardComponent from "../CarCardComponent/CarCardComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import ContactComponant from "../ContactComponent/ContactComponent"
import CarServices from "../../Services/CarServices";
export default function MainComponent() {
  const [cars,SetCars]=useState([])
  useEffect(()=>{
 getAllCars()
  },[])

  async function  getAllCars(){
       try{
 const res = await CarServices.getAllCars()
SetCars(res)
    }
    catch(error){
    console.log(error);
    
    }
  }
  return (
    <div>
        <NavbarComponent/>
        <br></br>
        <SearchBarComponent/>
    <div className="container">   
       <div className="row g-5">
          {cars.length > 0 ? (
            cars.map((car,i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <CarCardComponent carinfo={car}/>
              </div>
            ))
          ) : (
            <p>No cars available</p>
          )}
        </div>
    </div>
    <ContactComponant/>
    </div>
  );
}
