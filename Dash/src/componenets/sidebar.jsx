import React, { useContext } from "react";
import { pateinData } from "./apiContext/data";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const {pateints ,setldata} = useContext(pateinData);
  const navigate = useNavigate();

  const onclickHandler = (values) => {
    // navigate(`/pi/${values}`);
    setldata(values)
  };
  return (
    <div className="col-md-3 b">
      <div className="d-flex justify-content-between align-item-center ">
        <div className="title">Patients</div>
        <div className="serchbaricon">icon</div>
      </div>
      <div className="lists">
        <div className="shadow">
          {pateints &&
            pateints.map((data) => {
              return (
                <div
                  key={data.name}
                  className="d-flex justify-content-evenly align-item-center"
                  onClick={() => onclickHandler(data)}
                >
                  <div className="img">
                    <img src={data.profile_picture} alt="" />
                  </div>
                  <div className="details">
                    <p>{data.name}</p>
                    <p>
                      {data.gender}
                      {data.age}
                    </p>
                  </div>
                  <div className="options">---</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
