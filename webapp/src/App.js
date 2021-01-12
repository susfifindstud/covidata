import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import './App.css';
import './PredictionModels.js';
import NavBar from './NavBar.js';
import PredictionModels from './PredictionModels.js';

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import PieClass from "./PieClass";
import PieHooks from "./PieHooks";
import PieSVG from "./PieSVG";

function App() {
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
        <NavBar />
          </div>
        <div>
        <div>
        <button onClick={changeData}>Transform</button>
      </div>
      <div>
        
      </div>
      <div>
        <span className="label">SVG Elements</span>
        <PieSVG
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
      <div>
        <span className="label">Hooks</span>
        <PieHooks
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
      <div>
        <span className="label">React Class</span>
        <PieClass
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
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
    
        <div>
            <footer class="colored-section" id="footer">
        <div class="container-fluid">
          <a href="https://www.instagram.com/magicofwords_org/" style={{color: 'white'}}><i class="social-icon fab fa-instagram"></i></a>
          <a href="https://twitter.com/magicofwordsorg" style={{color: 'white'}}><i class="social-icon fab fa-twitter"></i></a>
          <i class="social-icon fas fa-envelope"></i>
          <p>© 2020 covidat</p>
        </div>
        </footer>
          </div>
      </div>
    </div>
  );
}

export default App;
