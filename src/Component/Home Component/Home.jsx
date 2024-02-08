import React from 'react'
import homeImg from "../../Assets/Images/avataaars.svg"

export default function Home() {
  return <>
  

  <section className='homeSection d-flex justify-content-center align-items-center py-5 flex-column '>
    <img src={homeImg} alt="homeImg" width={250} className='mt-5 py-3' />
    <h2 className='text-uppercase text-white fw-bold'>Start FrameWork</h2>
    <div className="starLines d-flex justify-content-center align-items-center">
      
      <div className="whiteLine me-2"></div>

    <i className="fa-solid fa-star star py-3"></i>

    <div className="whiteLine ms-2"></div>
    </div>
    <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
  </section>
  
  </>
}
