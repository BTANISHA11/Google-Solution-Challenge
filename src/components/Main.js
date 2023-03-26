import React, { useState } from 'react'
// import JSXStyle from 'styled-jsx/style';
import '../main.css'



const Main = () => {
  //   const ReadMore = ({ children }) => {
  //     const text = children;
  //     const [isReadMore, setIsReadMore] = useState(true);
  //     const toggleReadMore = () => {
  //       setIsReadMore(!isReadMore);
  //     };
  //     return (
  //       <p className="text">
  //         {isReadMore ? text.slice(0, 150) : text}
  //         <span onClick={toggleReadMore} className="read-or-hide">
  //           {isReadMore ? "...read more" : " show less"}
  //         </span>
  //       </p>
  //     );
  //   };
  return (
    <div id='naman'>
      


      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-inner" id='carouselimages'>
          <div className="carousel-caption" style={{ zIndex: "2" }}>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" id='search' type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img style={{ height: "90vh" }} src="main1.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height: "90vh" }} src="main2.webp" className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height: "90vh" }} src="main4.webp" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Quote  */}
      <div className='disasterQuote'>
        <h4 className='disasterQuote1'>"There are no natural disasters, only natural events. Disasters are the result of human actions or inactions." </h4>
      </div>


      {/* card */}




    </div>
  )
}

export default Main
