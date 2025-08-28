import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        count: 0,
        count2: 1,
    }
    console.log(this.props.name + "Child's Constructor is Called!");
  }

  componentDidMount(){
    console.log(this.props.name + "Child's componentDidMount is called")
  }


  render() {
    const { name, location, contact } = this.props;
    const {count} = this.state;
    return (
      <div className="user">
        <h1>Count: {count}</h1>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: {contact}</h3>
        <button onClick={() => {
          this.setState({
            count: count + 1,
          })
          console.log(this.state.count);
        }}>Count Increase</button>
        {console.log(this.props.name + "Chid's Render is called")}
      </div>
    );
  }
}

export default UserClass;
