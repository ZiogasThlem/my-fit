import React from "react";
import WorkoutListItem from "./WorkoutListItem";

const WorkoutChoice = () => {
  return (
    <>
      <ul>
        <WorkoutListItem />
        <WorkoutListItem />
        <WorkoutListItem />
        <WorkoutListItem />
      </ul>
    </>
    // <div
    //   id="carouselExampleControls"
    //   className="carousel slide"
    //   data-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img className="d-block" src="dmbl.png" height='500' width='500' alt="First slide" />
    //       1st
    //     </div>
    //     <div className="carousel-item">
    //       <img className="d-block" height='500' width='500' src="dmbl.png" alt="Second slide" />
    //       2nd
    //     </div>
    //     <div className="carousel-item">
    //       <img className="d-block" height='500' width='500' src="dmbl.png" alt="Third slide" />
    //       3rd
    //     </div>
    //   </div>
    //   <a
    //     className="carousel-control-prev"
    //     href="#carouselExampleControls"
    //     role="button"
    //     data-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Previous</span>
    //   </a>
    //   <a
    //     className="carousel-control-next"
    //     href="#carouselExampleControls"
    //     role="button"
    //     data-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Next</span>
    //   </a>
    // </div>
  );
};

export default WorkoutChoice;
