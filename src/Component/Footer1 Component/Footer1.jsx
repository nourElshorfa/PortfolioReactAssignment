import React from 'react'

export default function Footer1() {



  return <>
  <div className='footer1'>
    <div className="row">
        <div className="col-md-4 ">
            <div className="card bg-transparent border-0 text-center text-white">
                <h3 className='my-1 text-uppercase'>Location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
        </div>
        <div className="col-md-4 ">
            <div className="card bg-transparent border-0 text-center text-white">
                <h3 className='my-1'>AROUND THE WEB</h3>
               <div className="socialLinks my-3">
                <ul className='list-unstyled d-flex text-center justify-content-center'>
                    <li><i className="fa-brands fa-facebook icon mx-1"></i></li>
                    <li><i className="fa-brands fa-twitter  icon mx-1"></i></li>
                    <li><i className="fa-brands fa-linkedin  icon mx-1"></i></li>
                    <li><i className="fa-solid fa-globe  icon mx-1"></i></li>
                </ul>
               </div>
            </div>
        </div>
        <div className="col-md-4 ">
            <div className="card bg-transparent border-0 text-center text-white">
                <h3 className='my-1'>ABOUT FREELANCER</h3>
                <p className='mt-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
  </div>
  </>
}
