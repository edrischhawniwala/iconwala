import React, { Fragment } from "react";
import "../styles/home.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import bannerimg from "../imgs/bannerimg.png";
import searchcategoryicon from "../imgs/searchcategoryicon.png";
import threedicon from "../imgs/3dimg.png";
import lotteicon from "../imgs/lotteicon.png";
import vectoricon from "../imgs/vectoricon.png";
import freeasseticon from "../imgs/freeasssetsicon.png";
import { v4 as uuidv4 } from 'uuid'; 
import axios from "axios";
import { upload } from "../api";
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const baseurl='http://localhost:4800/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzE5NDMxNzg2LCJleHAiOjE3MTk0MzM1ODZ9.acC2dvkQp20YAN583fdIReMIGwzoWnX6uhrM-q3XP84';
  
export class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base64Data: null,
    };
  }
  onUpload = (e) => {
    upload(this.state.base64Data, 'Something', 'no desc', 5).then(()=> {
      console.log("upload successful");
    }).catch(err => {
      console.log(`err: ${err}`)
    })
  }
  onChange = (e) => {
    debugger;
    console.log("file uploaded: ", e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  };

  _handleReaderLoaded = (e) => {
    console.log("file uploaded 2: ", e);
    let binaryString = e.target.result;
    this.setState({
      base64Data: btoa(binaryString),
    });
  };

  render() {
    return (
      <Fragment>
        <div className="homebanner">
          <Navbar></Navbar>

          <div className="homebanner-content">
            <div className="homebannerleft-inner">
              <h2>
                <span style={{ color: "#F48B3C" }}>iCon</span>
                <span style={{ color: "#449AF7" }}>Wala</span>
              </h2>
              <p className="homebannertext">Upload Your Icons Here</p>

              <div className="homebannersearch-div">
                <div className="searchdiv">
                  <input
                    placeholder="Upload Icons"
                    type="file"
                    name="image"
                    id="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => this.onChange(e)}
                  />

                <button onClick={this.onUpload}>Upload Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-category-section">
          <div className="popularcategory-div">
            <div className="mostpopularcategory">
              Most Popular Categories{" "}
              <svg
                fill="none"
                viewBox="0 0 52 31"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49 3L28.5556 23L18.3333 13L3 28M49 3H33.6667M49 3V18"
                  stroke="#2E90EB"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="5"
                />
              </svg>
            </div>

            <div className="viewall-div">
              View All{" "}
              <svg
                fill="none"
                viewBox="0 0 41 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m18.444 28 8.2223-8m0 0-8.2223-8m8.2223 8h-24.667m3.1153 10c3.3187 4.8239 8.9705 8 15.385 8 10.217 0 18.5-8.0589 18.5-18 0-9.9412-8.2827-18-18.5-18-6.4142 0-12.066 3.176-15.385 8"
                  stroke="#2E90EB"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                />
              </svg>
            </div>
          </div>

          <div className="categories-div">
            <div className="categoryitem categoryitem1">
              <img src={threedicon} alt="" className="icon-img" />
              <p>3D Illustrations</p>
            </div>
            <div className="categoryitem categoryitem2">
              <img src={vectoricon} alt="" className="icon-img" />
              <p>Vector Icons</p>
            </div>
            <div className="categoryitem categoryitem3">
              <img src={lotteicon} alt="" className="icon-img" />
              <p>Lotte Animations</p>
            </div>
            <div className="categoryitem categoryitem4">
              <img src={freeasseticon} alt="" className="icon-img" />
              <p>Free Assets</p>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </Fragment>
    );
  }
}

