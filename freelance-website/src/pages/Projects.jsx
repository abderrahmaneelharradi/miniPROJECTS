import React from 'react';

const Projects = () => {
  return (
    <div className="container my-5">
      <h2>Our Projects</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn.motocms.com%2Fsrc%2F868x580%2F47200%2F47215-original-1200.jpg&sp=1747753835T2c8a74a531ed6cb80bbdd2a3f199bdfd9b37108687659c3b14996fab1254650a" className="card-img-top" alt="Projet 1" />
            <div className="card-body">
              <h5 className="card-title">Projet 1</h5>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis dolorum, nisi exercitationem tempore quibusdam.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fnmcdn.io%2Fe186d21f8c7946a19faed23c3da2f0da%2F347bed083486499c98f1609efa95efbd%2Ffiles%2FWeb-Design-Project-Post_Inspiration_.jpg&sp=1747753835T3bba11508ef820e9d3265bee123963ca1136dfa8fb9445eb82f4716a45df7633" className="card-img-top" alt="Projet 2" />
            <div className="card-body">
              <h5 className="card-title">Projet 2</h5>
              <p className="card-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse error sequi facilis rerum fuga vero.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;