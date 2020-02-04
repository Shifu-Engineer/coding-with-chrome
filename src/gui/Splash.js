/**
 * @fileoverview Splashscreen for the Coding with Chrome suite.
 *
 * @license Copyright 2020 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */

import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Config, Version } from '../config/Config';
import Logo from '../../assets/svg/logo.svg';
import styles from './Splash.scss';

class Splash {
  show() {
    console.log('Showing Splashscreen');
    ReactDOM.render(template, document.getElementById('cwc-splash-screen'));
  }
}

const template = (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" className={styles.test}>
        <Logo />
        <br />
        Coding with Chrome Suite {Version}
      </Typography>
    </Container>
  </React.Fragment>
);

export default function SimpleContainer() {
  new Splash().show();
}
