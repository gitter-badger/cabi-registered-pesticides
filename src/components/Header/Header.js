/**
* CABI Registered Pesticides
 *
 * Copyright © 2016 Stuart Bateman. All rights reserved.
 *
 * .
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './Logo_CABI_Green_Wide.svg';
import logoUrl2x from './Logo_CABI_Green_Wide.svg';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation className={s.nav} />
          <a className={s.brand} href="http://www.cabi.org/">
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="72" height="72" alt="CABI International" />
          </a>
          <Link className={s.brand} to="/">
            <span className={s.brandTxt}>CABI Registered Pesticides</span>
          </Link>
          {/*<div className={s.banner}>*/}
            {/*<h1 className={s.bannerTitle}>React</h1>*/}
            {/*<p className={s.bannerDesc}>Complex web apps made easy</p>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
