import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actionCreators from "./actions/index.js";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
  	img: ''
  }

  handle(){
  	this.props.getData(2)
  }

  componentWillReceiveProps (nextProps) {
  	if(nextProps.data) {
	    this.setState({
	    	img: nextProps.data.data.avatar
	    })
	} else {
		this.setState({
	    	img: ''
	    })
	}
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handle.bind(this)}>GetDetails</button>
        <button onClick={this.props.clearData}>Clear</button>
       <div className="logo">
          <img src={this.state.img}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return	{
		data: state.data
	}
}

export default connect(mapStateToProps, actionCreators)(App);
