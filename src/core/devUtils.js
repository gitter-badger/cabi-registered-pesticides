/**
* CABI Registered Pesticides
 *
 * Copyright © 2016 Stuart Bateman. All rights reserved.
 *
 * .
 */

/* eslint-disable global-require */

if (module.hot || process.env.NODE_ENV !== 'production') {
  module.exports = {
    // The red box (aka red screen of death) component to display your errors
    // https://github.com/commissure/redbox-react
    ErrorReporter: require('redbox-react').default,

    // Force-updates React component tree recursively
    // https://github.com/gaearon/react-deep-force-update
    deepForceUpdate: require('react-deep-force-update'),
  };
}
