import React from "react";
import {connect} from "react-redux";
import { dispatch } from "rxjs/internal/observable/range";

class Counter extends React.Component{
    
    
    render(){
        return <div>
            Counter: {this.props.counter}
            <br/><br/>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        </div>
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};
const mapSispatchProps = (dispatch)=>{
    return {
        increment: () => dispatch({type:'INCREMENT'}),
        decrement: () => dispatch({type:'DECREMENT'}),
    }
}
export default connect(mapStateToProps,mapSispatchProps)(Counter);