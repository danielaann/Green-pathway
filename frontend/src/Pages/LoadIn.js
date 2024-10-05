import React from "react";
import img1 from "../Images/loadin1.png";
import img2 from "../Images/load3.jpeg";
import img3 from "../Images/load2.jpg";
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';


function Start(){

    return(
        <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
            <img src={img1} className='d-block w-100' style={{height:'750px'}}/>
            <MDBCarouselCaption>
            <button className="btn btn-light me-4 rounded-pill px-4 py-2 ">Join Now</button>
            <button className="btn btn-light me-4 rounded-pill px-4 py-2 ">Login</button>
            </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
            <img src={img3} className='d-block w-100' style={{height:'750px'}}/>
            <MDBCarouselCaption>
            <button className="btn btn-light me-4 rounded-pill px-4 py-2 ">Join Now</button>
            <button className="btn btn-light me-4 rounded-pill px-4 py-2 ">Login</button>
            </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
            <img src={img2} className='d-block w-100' style={{height:'750px'}}/>
            <MDBCarouselCaption>
                <button className="btn btn-light me-4 rounded-pill px-4 py-2 ">Join Now</button>
                <button className="btn btn-light me-4 rounded-pill px-4 py-2 ">Login</button>
            </MDBCarouselCaption>
        </MDBCarouselItem>
        </MDBCarousel>
  );
}

export default Start;