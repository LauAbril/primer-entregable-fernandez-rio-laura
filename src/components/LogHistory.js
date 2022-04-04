import React, { Component } from "react";

class LogHistory extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.previousSelection}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.LogStory}</ul>
      </div>
    );
  }
}

export default LogHistory;
