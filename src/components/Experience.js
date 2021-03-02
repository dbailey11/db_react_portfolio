import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-Current</h3>
            <p>University of Denver's Full Stack Web Development Certificate Course.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016-2020</h3>
            <p>Customer Service Expert</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2008-2016</h3>
            <p>Bachelor's of Science Degree in Biology</p>
            <p>Associate's of Arts in Education</p>
          </div>
        </div>
        
        
        
      </div>
    </div>
  )
}

export default Experience;
