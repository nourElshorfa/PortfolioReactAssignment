import React from 'react'
import box1 from "../../Assets/Images/poert1.png"
import box2 from "../../Assets/Images/poert2.png"
import box3 from "../../Assets/Images/poert3.png"


export default function Portofolio() {

  let myImg = document.querySelectorAll(".overlay")
  let lightBoxContainer =  document.getElementById("lightBoxContainer")
console.log(myImg);
  for (let i = 0; i < myImg.length; i++) {
    myImg[i].addEventListener("click" , function(){
      lightBoxContainer.classList.remove("d-none")
    })
    
  }
  return <>
  
  <div id='lightBoxContainer' className='d-flex justify-content-center align-items-center d-none'>
   <div id='lightBox'></div>
  </div>

  <section className='portofolioSection py-5 mt-5'>
  <h1 className='text-center mt-2 '>PORTFOLIO SECTION</h1>
 <div className="blackStarLines d-flex justify-content-center align-items-center">
      
      <div className="blackLine me-2"></div>

    <i className="fa-solid fa-star blackStar py-2 text-black"></i>

    <div className="blackLine ms-2"></div>
    </div>
    <div className="container">
      <div className="row gy-4">

        <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal" className='postion-relative' id='card'>
                <img src={box1} className="w-100" alt='portfolioImage' />
                <div className="overlay border-4">
            <i className="fa-solid fa-plus text-white plusIcon"></i>
            </div>
              </div>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={box1} className="w-100" alt='portfolioImage' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal2" className='postion-relative' id='card'>
                <img src={box2} className="w-100" alt='portfolioImage' />
                <div className="overlay border-4">
            <i className="fa-solid fa-plus text-white plusIcon"></i>
            </div>
              </div>

              <div
                className="modal fade"
                id="exampleModal2"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={box2} className="w-100" alt='portfolioImage' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal3" className='postion-relative' id='card'>
                <img src={box3} className="w-100" alt='portfolioImage' />
                <div className="overlay border-4">
                <i className="fa-solid fa-plus text-white plusIcon"></i>
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModal3"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={box3} className="w-100"  alt='portfolioImage'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal" className='postion-relative' id='card'>
                <img src={box1} className="w-100" alt='portfolioImage' />
                <div className="overlay border-4">
                <i className="fa-solid fa-plus text-white plusIcon"></i>
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={box1} className="w-100" alt='portfolioImage' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal2" className='postion-relative' id='card'>
                <img src={box2} className="w-100"  alt='portfolioImage'/>
                <div className="overlay border-4">
                <i className="fa-solid fa-plus text-white plusIcon"></i>
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModal2"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={box2} className="w-100" alt='portfolioImage' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal3" className='postion-relative' id='card'>
                <img src={box3} className="w-100" alt='portfolioImage' />
                <div className="overlay border-4">
                <i className="fa-solid fa-plus text-white plusIcon"></i>
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModal3"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={box3} className="w-100" alt='portfolioImage' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>
    </div>
  </section>
  </>
}

