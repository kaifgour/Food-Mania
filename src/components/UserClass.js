import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Kaifgour");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    console.log("Render");
    const { login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>{login}</h2>
        <h4>Location: Mumbai</h4>
      </div>
    );
  }
}

export default UserClass;
