import React from "react";

const Navbar = () => {
  return (
    <div className="col-md-12 b">
      <div className="row">
        <div className="col-md-3">logo</div>
        <div className="col-md-6 d-flex justify-content-evenly align-item-center ">
          <p>link 1</p>
          <p>link 1</p>
          <p>link 1</p>
          <p>link 1</p>
          <p>link 1</p>
        </div>
        <div className="col-md-3  d-flex justify-content-evenly align-item-center ">
            <div className="profileimage">
                logo
            </div>
            <div className="details">
                <div className="name">dr.lorem</div>
                <div className="title">jkhasdfjha</div>
            </div>
            <div className="settings">
                settings
                options
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
