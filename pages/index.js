import react, { useState } from "react"


function CompA({ myProp1, myProp2, myProp3, MyProp4 }) {

  return (
    <>
      <h1>CompA</h1>
      <h1>Props: {myProp1}</h1>
      <div>My Prop2: {myProp2}</div>
      <div>My Prop3: {myProp3.toString()}</div>
      <div>My Prop4: <MyProp4 /></div>
    </>
  )

}

function CompB() {
  return (
    <h1>CompB</h1>
  )

}

class CompC extends react.Component {

  constructor() {
    super();
    this.state = {
      myValue: 10
    }
  }

  // state = {
  //   myValue: 10
  // }

  changeState(incrementor) {
    this.setState({
      myValue: incrementor,
    })
  }

  render() {
    const { myValue } = this.state;
    return (
      <>
        {/* <h1>CompC</h1>
        Current Value: <h1>{this.state.myValue}</h1>
        <button onClick={() => this.changeState(this.state.myValue + 1)}>+</button>
        <button onClick={() => this.changeState(this.state.myValue - 1)}>-</button> */}
        <h1>CompC</h1>
        Current Value: <h1>{myValue}</h1>
        <button onClick={() => this.changeState(myValue + 1)}>+</button>
        <button onClick={() => this.changeState(myValue - 1)}>-</button>
        <h1>CompC Prop: {this.props.myProp1}</h1>
      </>
    )
  }
}

// JSX => Javascript XML
class CompD extends react.Component {
  render() {
    return react.createElement("h1", null, "CompD")
  }
}

const Home = () => {

  const [myValue, setValue] = useState(10)

  return (
    <>
      <h1>Hello World</h1>
      <CompA
        myProp1={myValue}
        myProp2="My Custom Value"
        myProp3={true}
        MyProp4={() => <div>My NEW JSX!</div>}
      />
      <CompC myProp1={myValue} />
      <CompD />
    </>
  )
}

export default Home;

