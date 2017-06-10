/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Link from '../../components/Link';
import { Col, Row } from 'react-bootstrap';
import './index.scss';

export default class extends Component {
  static title = 'STYLY';
  static image = '/works/styly_eyecatch.png';

  render() {
    return (
      <div className="work-detail">
        <h2>
          <a href="/works/" onClick={Link.handleClick}>Collaborations</a>
          <span className="breadcrumb-chevron">&gt;</span>
          STYLY
        </h2>
        <div>
          <img src="/works/styly_eyecatch.png" className="image-eyecatch" />
        </div>
        <div>
          <img src="/works/styly_01.png" className="image-screenshot" />
        </div>

        <h3>STYLY (2017, Psychic VR Lab)</h3>
        <div className="work-description">
          <div>
            ファッションブランドのためのVRツール
          </div>
          <div>
            VR Creative tools for fashion brand
          </div>
        </div>
        <div>
          <ul>
            <li>
              <a href="http://suite.styly.cc/">
              Website
              </a>
            </li>
          </ul>
        </div>
        <div className="work-long-description">
          <p>
            This is a VR tool for building virtual space towards extending fashion brand's expression ability of their concept.
            I developed its web UIs and backend.
          </p>
        </div>
      </div>
    );
  }

}
