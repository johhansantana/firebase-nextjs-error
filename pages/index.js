import React from "react";
import { storage } from "../lib/firebase.config";

class Index extends React.Component {
  static async getInitialProps() {
    console.log(await storage.ref("path/to/image.jpg").getDownloadURL());
  }
  render() {
    return <h1>Hello world!</h1>;
  }
}

export default Index;
