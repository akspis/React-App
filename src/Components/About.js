import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("paret contructor");
  }

  componentDidMount() {
    console.log("paret component Did mount");
  }

  componentDidUpdate() {
    console.log("parent");
  }

  render() {
    console.log("paret render");

    return (
      <div>
        <h2>this is About page</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
