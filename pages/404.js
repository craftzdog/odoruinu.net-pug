/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      const { pathname } = window.location;
      if (pathname.startsWith('/blog')) {
        const redirectTo = 'http://blog.odoruinu.net' + pathname;
        window.location.replace(redirectTo);
        this.setState({ redirectTo });
      }
    }
  }

  render() {
    if (this.state.redirectTo) {
      return (
        <div>
          <h1>Redirecting...</h1>
          <p>
            <a href={this.state.redirectTo}>{ this.state.redirectTo }</a>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Not Found</h1>
          <p>The page you're looking for was not found.</p>
        </div>
      );
    }
  }

}
