import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return(
    <>
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 p-10 p-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {props.name} <strong className="brand-name"> {props.name2} </strong>
                </h1>
                <h5 className="my-3">{props.name3}</h5>
                <div className="mt-3">
                  <NavLink className='btn btn-primary' to={props.visit}>{props.btname}</NavLink>
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 pt-10 header-img'>
                <img src={props.imgsrc} className= "img-fluid animated" width="500px" height="500px" alt="home img"/>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>  


    </>
  );
};


export default Common;
