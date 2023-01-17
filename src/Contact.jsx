import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) =>{
    const {name, value}=event.target;
    
    setData((preVal)=>{
      return{
        ...preVal,
        [name]: value,
      };
    });
  }
  const formSubmit=() => {};
  return(
    <>
    <div className='my-5'>
      <h1 className='text-center'> Contact Us</h1>
    </div>
      <div className="container-fluid nav_bg">
            <div className='row'>
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" 
                    id="exampleFormControlInput1" 
                    name="FullName"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="name@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Full Name</label>
                    <input type="email" className="form-control" 
                    id="exampleFormControlInput1" 
                    name="Email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="Traveler Srk" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Age</label>
                    <select className="form-control" 
                    id="exampleFormControlSelect1">
                      <option>Below 18</option>
                      <option>Above 18</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    name="Text"
                    value={data.message}
                    onChange={InputEvent}
                    ></textarea>
                  </div>
                  <div className='col-12 my-3'>
                    <button className='btn btn-primary' type='submit'> Submit </button>
                  </div>
                </form>
                </div>
            </div>
        </div>  
    </>
  );
};


export default Contact;
