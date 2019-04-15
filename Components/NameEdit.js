import React, { Component } from 'react';

class NameEdit extends Component {
  render() {
      if (this.state.MODE === 'view') {
        return (
          <>
          <h3>{this.state.P1NAME}</h3>
          <button onClick={this.handleEdit}>Edit</button>
          </>
        )
      }
  }
}