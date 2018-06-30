import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import logo from './logo.svg';
import { startTimer, stopTimer } from './reducers';

class App extends Component {
  start = ({ target }) => {
    this.props.startTimer(target.dataset.identifier, this.props.duration);
  }

  stop = ({ target }) => {
    this.props.stopTimer();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Duration: <span>{this.props.duration}</span>
        </p>
        <button onClick={this.start} data-identifier="timer">Start</button>
        <button onClick={this.stop} data-identifier="timer">Stop</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  startTimer,
  stopTimer,
}, dispatch);

const mapStateToProps = state => ({
  duration: state.duration,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
