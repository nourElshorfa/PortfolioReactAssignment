import React from 'react'

export default function About() {
  return <>
  
  <section className='aboutSection text-center position-relative mt-5 py-5'>
    <h1 className='pt-5  text-center fw-bold text-white aboutContent'>About Component</h1>
    <div className="starLines d-flex justify-content-center align-items-center">
      
      <div className="whiteLine me-2"></div>

    <i className="fa-solid fa-star star py-3"></i>

    <div className="whiteLine ms-2"></div>
    </div>


    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="aboutP py-5">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
     
          </div>
        </div>
        <div className="col-md-6">
          <div className="aboutP py-5">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
     
          </div>
        </div>
      </div>
    </div>
  </section>

  
  </>
}

