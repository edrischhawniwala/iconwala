import React, { Fragment } from "react";
import "../styles/upload.css";
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
    axios.post(
      `${baseurl}api/icon`,
      {
        "id": uuidv4(),
        "iconPackId": uuidv4(),
        "iconBase64": this.state.base64Data,
        "name": "Sneakers",
        "tags": [
          'shoe'
        ],
        "desc": "string",
        "price": 0
      }, 
      {
        headers:{Authorization:`Bearer ${token}`}
      }
    ).then(()=> {
      console.log("upload successful");
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
              <p className="uploadtext">Unleash Your Creativity - Share Your Icons & Animations (or) Upload Your Awesome Icons & Animations</p>

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

                <button onClick={this.onUpload} class="button-59" role="button">Upload Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      

        <Footer></Footer>
      </Fragment>
    );
  }
}

