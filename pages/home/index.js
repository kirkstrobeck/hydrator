import React, { Component, Fragment } from 'react';

import Header from '../../src/components/header';
import hydrator from '../../src/hydrator';

export default hydrator($ => (
  <Fragment>
    <Header title="boo5" />
    {$(<Header title="boo2" />)}
  </Fragment>
));
