import {Component} from "react";
import "./index.css";

class CounterApp extends Component{
    constructor(){
        super()
        this.state={
            count:0,
        }
        
    };
    handleIncrement=()=>{
        // this.setState({count:this.state.count+1})
        this.setState((prev)=>({count:prev.count+1}))

    }
    handleDecrement=()=>{
        this.setState((prev)=>({count:prev.count-1}))
    }
    
   render(){
    return(
    <div className="counter">
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
    </div>
    )
   }
}
export default CounterApp;