import React from 'react'

export default function Contact() {
  return <>
  
  <section className='contactSection py-5'>
 <h1 className='text-center pt-5  mt-5 '>CONTACT SECTION</h1>
 <div className="blackStarLines d-flex justify-content-center align-items-center mb-5">
      
      <div className="blackLine me-2"></div>

    <i className="fa-solid fa-star blackStar py-3 text-black"></i>

    <div className="blackLine ms-2"></div>
    </div>

    <div className='w-50 m-auto'>
      <form action="">
        <input type="text" placeholder='userName' className='form-control border-0 my-5'/>
        <input type="number" placeholder='userAge' className='form-control border-0 my-5'/>
        <input type="email" placeholder='userEmail' className='form-control border-0 my-5'/>
        <input type="password" placeholder='userPassword' className='form-control border-0 my-5'/>
        <button className='btn mb-5'>send Message</button>
      </form>
    </div>
  </section>
  </>
}

