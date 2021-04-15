import React from 'react';

import Navigation from './Navigation';

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10 mx-md-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;