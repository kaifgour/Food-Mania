import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my about page</h1>
        <UserClass name="Kaif Gour (class)" location="Mumbai" />
      </div>
    );
  }
}

export default About;
