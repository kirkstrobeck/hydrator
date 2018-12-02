import React, { Component } from 'react';

export default class Header extends Component {
  state = { msg: 'static' };

  componentDidMount() {
    this.setState({ msg: 'hydrated!!' });
  }

  render() {
    return (
      <h1>
        {this.props.title}
        {this.state.msg}
      </h1>
    );
  }
}
