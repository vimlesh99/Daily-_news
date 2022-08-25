import React, { Component } from 'react';
import loading from '../spiner/loading.gif'

export default class Spinner extends Component {

  constructor(){
    super();
    this.state = {
      msg : loading,
    }

  }

  render() {
    return (
      <div className="text-center ">
        <img src={this.state.msg} alt=""  />
      </div>
    )
  }
}
