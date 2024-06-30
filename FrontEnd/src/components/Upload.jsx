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
      alert('The image is uploaded successfully!');
    }).catch(err => {
      console.log(`err: ${err}`)
    })
  }
  onChange = (e) => {
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
        <div className="uploadbanner">
          <Navbar></Navbar>

          <div className="uploadbanner-content">
            <div className="uploadbannerleft-inner">
              <h2>
                <span style={{ color: "#F48B3C" }}>iCon</span>
                <span style={{ color: "#449AF7" }}>Wala</span>
              </h2>
              <p className="uploadbannertext">Upload Your Icons Here</p>
              <p className="uploadtext">Unleash Your Creativity - Share Your Icons & Animations (or) Upload Your Awesome Icons & Animations</p>

              <div className="uploadbannersearch-div">
                <div className="upload-form">
                 <div className="form-item"><p>Name</p><input type="text" /></div>
                 <div className="form-item"><p>Description</p> <input type="text" /></div>
                 <div className="form-item"><p>Price</p> <input type="text" /></div>
                 <div className="form-item"><p>Tags</p> <input type="text" /></div>
                </div>
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

