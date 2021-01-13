import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import "../../styles.css";
//import './App.css';
import '../../PredictionModels.js';
import PredictionModels from '../../PredictionModels.js';

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import PieClass from "../../Piechart stuff/PieClass";
import PieHooks from "../../Piechart stuff/PieHooks";
import PieSVG from "../../Piechart stuff/PieSVG";

import BarChart from '../../BarChart';

function Landing() {
  const data2 = [
    {year: 1980, efficiency: 24.3, sales: 8949000},
    {year: 1985, efficiency: 27.6, sales: 10979000},
    {year: 1990, efficiency: 28, sales: 9303000},
    {year: 1991, efficiency: 28.4, sales: 8185000},
    {year: 1992, efficiency: 27.9, sales: 8213000},
    {year: 1993, efficiency: 28.4, sales: 8518000},
    {year: 1994, efficiency: 28.3, sales: 8991000},
    {year: 1995, efficiency: 28.6, sales: 8620000},
    {year: 1996, efficiency: 28.5, sales: 8479000},
    {year: 1997, efficiency: 28.7, sales: 8217000},
    {year: 1998, efficiency: 28.8, sales: 8085000},
    {year: 1999, efficiency: 28.3, sales: 8638000},
    {year: 2000, efficiency: 28.5, sales: 8778000},
    {year: 2001, efficiency: 28.8, sales: 8352000},
    {year: 2002, efficiency: 29, sales: 8042000},
    {year: 2003, efficiency: 29.5, sales: 7556000},
    {year: 2004, efficiency: 29.5, sales: 7483000},
    {year: 2005, efficiency: 30.3, sales: 7660000},
    {year: 2006, efficiency: 30.1, sales: 7762000},
    {year: 2007, efficiency: 31.2, sales: 7562000},
    {year: 2008, efficiency: 31.5, sales: 6769000},
    {year: 2009, efficiency: 32.9, sales: 5402000},
    {year: 2010, efficiency: 33.9, sales: 5636000},
    {year: 2011, efficiency: 33.1, sales: 6093000},
    {year: 2012, efficiency: 35.3, sales: 7245000},
    {year: 2013, efficiency: 36.4, sales: 7586000},
    {year: 2014, efficiency: 36.5, sales: 7708000},
    {year: 2015, efficiency: 37.2, sales: 7517000},
    {year: 2016, efficiency: 37.7, sales: 6873000},
    {year: 2017, efficiency: 39.4, sales: 6081000},
  ]

  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };

  useEffect(
    () => {
      setData(generateData());
    },
    [!data]
  );
  return (
    <div className="App">
    
        <div>
        <div>
        <button onClick={changeData}>Transform</button>
      </div>
      <div>
      

      <header className="App-header">
        <BarChart data={data2} />
      </header>


      </div>
      
    </div>
    <div>
        <section className="colored-section" id="title">
          <br />
          <br />
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <h1 class="big-heading">
                  we want to help you stay healthy!!
                </h1>
                <href target="_blank">
                  <button type="button" class="btn btn-dark btn-lg download-button">
                    <i class="fas fa-book-open"></i> &nbsp;our predictions
                  </button>
                </href>
                <href target="_blank">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-lg download-button"
                  >
                    <i class="fas fa-donate"></i> &nbsp;past data
                  </button>
                </href>
              </div>
            </div>
          </div>
        </section>
    
        <section class="white-section" id="features">
          <div class="container-fluid">
            <div class="row">
              <div class="feature-box col-lg-4">
                <h3 class="feature-title">we're in a pandemic</h3>
                <p className="feature-subtext">
                  help us help you stay safe
                </p>
                <href target="_blank" activeStyle={{ color: "white" }}>
                  <button
                    type="button"
                    class="btn btn-lg download-button blue-yellow-button"
                  >
                    Learn more
                  </button>
                </href>
              </div>
    
              <div class="feature-box col-lg-4">
                <h3 class="feature-title">future predictions</h3>
                <p className="feature-subtext">
                  using mathematical models
                </p>
                <href target="_blank" activeStyle={{ color: "white" }}>
                  <button
                    type="button"
                    class="btn btn-lg download-button blue-yellow-button"
                  >
                    Learn more
                  </button>
                </href>
              </div>
    
              <div class="feature-box col-lg-4">
                <h3 class="feature-title">using past data</h3>
                <p className="feature-subtext">
                  some cool data
                </p>
                <href target="_blank" activeStyle={{ color: "white" }}>
                  <button
                    type="button"
                    class="btn btn-lg download-button blue-yellow-button"
                  >
                    Learn more
                  </button>
                </href>
              </div>
            </div>
          </div>
        </section>
  
      </div>
    </div>
  );
}

export default Landing;
