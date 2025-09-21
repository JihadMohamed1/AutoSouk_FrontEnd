import React, { useState } from "react";
import './MainComponent.CSS'
import CarCardComponent from "../CarCardComponent/CarCardComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { Button } from "react-bootstrap";

export default function MainComponent() {
    let [fillter,SetFillter]=useState(false)
  return (
    <div>
        <NavbarComponent/>
    <div className="container">
        <div className="row">
            <div  className="col-sm-2">
       {fillter ? <Button onClick={(e)=>{SetFillter(false)}}> hide Fillter</Button>:
        <Button onClick={(e)=>{SetFillter(true)}}>  Fillter</Button>}
{fillter && <div className="col-sm-1"> <CarCardComponent/> </div>}
            </div>
      <div className="d-flex flex-wrap col-sm-8">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="m-4">
            <CarCardComponent />
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
  );
}
