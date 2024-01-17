import React from "react";

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "Jagdish Singh" };
    this.changeState = this.changeState.bind(this);
  }
  render() {
    return (
      <div>
        <h1>React component life cycle.</h1>
        <h3>Hello {this.state.hello}</h3>
        <button onClick={this.changeState}>Click here</button>
      </div>
    );
  }
  componentWillMount() {
    console.log("component will mount");
  }
  componentDidMount() {
    console.log("component did mount");
  }
  changeState() {
    this.setState({ Hello: "All  its a great react tutorial" });
  }
}

export default ClassComp;

// import React from "react";
// class ClassComp extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>Hello {this.props.name}</h1>
//       </>
//     );
//   }
// }
// export default ClassComp;
