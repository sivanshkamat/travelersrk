import React from 'react'
import Card from './card'
import imgdata from './imagedata'
const Feed = () => {
  return(
    <>
      <div className='my-5'>
        <h2 className='text-center'> Places I've Been</h2>
      </div>
      <div className="container-fluid mb-5">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className='row gy-4'>
                        {
                            imgdata.map((val, ind)=>{
                                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />   
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};


export default Feed;
