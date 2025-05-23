import React from 'react';

const Projects = () => {
  return (
    <div className="container my-5">
      <h2>Our Services</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FmWWrzaeEtTrzai5WUPInQHaDt%26cb%3Diwc2%26pid%3DApi&sp=1747754707T6b0faafb173952ce95e54a2815e9552d916a254f2903c2fe89504ea0f29eab92" className="card-img-top" alt="Service 1" />
            <div className="card-body">
              <h5 className="card-title">First Service</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam facilis ex quae odio reprehenderit?</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H5YPb_VNNDNVzWP3-K6ZSgHaDt%26cb%3Diwc2%26pid%3DApi&sp=1747754707Tf294da6e251ca6b3613b03a2340ac4d21c1e6d2ae80804bf0b3b997943f6a342" className="card-img-top" alt="Service 2" />
            <div className="card-body">
              <h5 className="card-title">Second Service</h5>
              <p className="card-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi vero unde iste at error nemo?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;