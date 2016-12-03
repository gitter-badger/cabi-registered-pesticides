/**
* CABI Registered Pesticides
 *
 * Copyright © 2016 Stuart Bateman. All rights reserved.
 *
 * .
 */

import React from 'react';
import Layout from '../../components/Layout';
import NotFound from './NotFound';

const title = 'Page Not Found';

export default {

  path: '*',

  action() {
    return {
      title,
      component: <Layout><NotFound title={title} /></Layout>,
      status: 404,
    };
  },

};
