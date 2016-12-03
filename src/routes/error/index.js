/**
* CABI Registered Pesticides
 *
 * Copyright © 2016 Stuart Bateman. All rights reserved.
 *
 * .
 */

import React from 'react';
import ErrorPage from './ErrorPage';

export default {

  path: '/error',

  action({ error }) {
    return {
      title: error.name,
      description: error.message,
      component: <ErrorPage error={error} />,
      status: error.status || 500,
    };
  },

};
