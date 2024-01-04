import React from "react";
import { userContext } from "../utils/userContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "abc",
        location: "xyz",
      },
    };

    console.log("child contructor ");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("child component Did mount");
    this.timer = setInterval(() => {
      console.log("namste React");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("child component Did update");
  }

  componentWillUnmount() {
    //we right cleanup funtion in unmount method
    clearInterval(this.timer);
    console.log("child component will unmount");
  }

  render() {
    console.log("child render");
    const { name, location, avatar_url, login } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>name:{name}</h3>
        <h4>location:{location}</h4>
        <h4>contact:{login}</h4>
        <userContext.Consumer>
          {({ loggedInUser }) => {
            <h3 className="font-bold text-2xl">{loggedInUser}</h3>;
          }}
        </userContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
