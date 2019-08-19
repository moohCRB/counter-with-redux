import Counter from "./Component/Counter";
import './App.css';
import {Provider} from "react-redux";
import store from "./store/store"
import React,{Component} from "react";

class App extends Component{
  render(){
  return (
    <Provider store={store}>
    <div className="App">
            <Counter />
    </div>
    </Provider>
  );
}
}
export default App;
