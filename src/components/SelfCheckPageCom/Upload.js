import React, { Component } from "react";
// import { From, Button, FormGroup } from "react-bootstrap";
import FileBase64 from "react-file-base64";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Upload.modules.css";
export default class Upload extends Component {
  constructor(props) {
    super();

    this.state = {
      files: [],
      Result: [],
      ifSkin: "",
    };
    this.fileUpload = this.fileUpload.bind(this);
  }

  getFiles(files) {
    this.setState({ files: files });
    console.log(files);
  }

  async fileUpload() {
    const response = await fetch(
      "https://3756b7g7oj.execute-api.us-east-1.amazonaws.com/Prod/molesphoto",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({ photo: this.state.files["base64"] }),
      }
    );
    const Result = await response.json();
    this.setState({ Result: Result.body });
    console.log(this.state.Result);
    const labels = JSON.parse(this.state.Result);

    if (labels["Labels"][0] === undefined) {
      this.setState({ ifSkin: "Sorry, the Photo is Invalid." });
      console.log("invalid photo");
    } else if (
      labels["Labels"][0].Name === "Skin" ||
      labels["Labels"][1].Name === "Skin" ||
      labels["Labels"][2].Name === "Skin"
    ) {
      this.setState({ ifSkin: "Skin photo detected" });
      console.log("skin photo");
    } else {
      this.setState({ ifSkin: "The photo is unclear, Please upload again" });
      console.log("not clear photo");
    }
  }
  render() {
    const ifSkin = this.state.ifSkin;
    return (
      <div>
        <div className="row">
          <div className="col-6 offset-3">
            <h4>Self Check form</h4>
          </div>
        </div>

        <div className="col-6 offset-3 files">
          <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
        </div>

        <div className="col-6 offset-3 preview">
          <img src={this.state.files.base64} width="40%" alt="upload"></img>
        </div>
        <div className="col-6 offset-3 preview">
          <input type="Submit" onClick={this.fileUpload} />
        </div>
        <div className="col-6 offset-3">{ifSkin}</div>
      </div>
    );
  }
}
