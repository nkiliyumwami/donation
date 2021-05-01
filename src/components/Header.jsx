import React from "react";


function Header() {
  return (
    <React.Fragment>
      <header id='showcase' className='bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 align-self-center d-none d-sm-block'>
              <a href='index.html'>
                <img src='assets/images/logo6.png' alt='logo' className='img-fluid' />
              </a>
            </div>
            <div className='col-md-9 d-none d-sm-block align-self-center'>
              <div className='container'>
                <h1>Neigbor First</h1>
              </div>
              <div className='container'>
                <h3 className='text-center'>A NEIGBOR 2 NEIGBOR DONATION</h3>
              </div>
              <div className='container mt-5'>
                <h3 className='lead'>
                  Give your neighbor a chance before you move it to a donation
                  center.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
