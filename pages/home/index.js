import React, { Component, Fragment } from 'react';

import Header from '../../src/components/header';
import hydrator from '../../src/hydrator';

export default hydrator($ => (
  <Fragment>
    <Header title="Title prop 1" />
    {$(<Header title="Title prop 2" />)}
  </Fragment>
));
