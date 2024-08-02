import React, { useContext } from "react";
import { pateinData } from "./apiContext/data";
import DataChart from "./dataChart";

const DashBoard = () => {
  const { ldata } = useContext(pateinData);
  const labTest = ldata.lab_results;
  const diglist = ldata.diagnostic_list;
  const dighr = ldata.diagnosis_history?.reverse();

  const herartrate = dighr && dighr[0].heart_rate.value;
  const herartrateleve = dighr && dighr[0].heart_rate.levels;
  const temprature = dighr && dighr[0].temperature.value;
  const tempraturelevel = dighr && dighr[0].temperature.levels;
  const heart_rate = dighr && dighr[0].heart_rate.value;
  const heart_ratelevels = dighr && dighr[0].heart_rate.levels;

  return (
    <div className="col-md-9 b">
      <div className="row">
        <div className="col-md-8 b">
          <div className="reports_box">
            <h3>Diagnosis History </h3>
            <div className="chart card">
              <DataChart />
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <h5>respiratory_rate</h5>
                {herartrate}
                <br />
                {herartrateleve}
              </div>
              <div className="col-md-4">
                <h5>temperature</h5>
                {temprature} <br />
                {tempraturelevel}
              </div>
              <div className="col-md-4">
                <h5>heart_rate</h5>

                {heart_rate}
                <br />
                {heart_ratelevels}
              </div>
            </div>
          </div>
          <div className="col-md-12 b">
            <h1>Diagnosis List </h1>
            {diglist?.map((i) => {
              return (
                <div
                  className="d-flex justify-content-between align-item-center"
                  key={Math.random() * 1000 + 1}
                >
                  <div> {i.name}</div> ||
                  <div>{i.description}</div> ||
                  <div>{i.status}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-4 b">
          <div className="col-md-12 card">
            <img src={ldata.profile_picture} alt="patientlogo" />
            <p>{ldata.name}</p>
            <div>{ldata.date_of_birth}</div>
            <div>{ldata.gender}</div>
            <div>{ldata.phone_number}</div>
            <div>{ldata.emergency_contact}</div>
            <div>{ldata.insurance_type}</div>
            <button className="btn btn-primary"> Show All Information.</button>
          </div>
          <div className="col-md-12 card my-4">
            <h3>Lab Results</h3>
            {labTest?.map((i) => {
              return (
                <div
                  className="d-flex justify-content-between align-item-center"
                  key={i}
                >
                  <span>{i}</span>
                  <span>
                    <button>ok</button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
