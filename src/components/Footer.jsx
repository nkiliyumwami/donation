import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer id='main-footer' className='text-center p-4 bg-dark mt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h5 className='text-white'>Social</h5>

              <a href='https://instagram.com/'>
                <i className='fa fa-instagram fa-2x mr-3 text-danger'></i>
              </a>
              <a href='https://facebook.com/'>
                <i className='fa fa-facebook fa-2x mr-3 text-primary'></i>
              </a>
              <a href='https://twitter.com/'>
                <i className='fa fa-twitter fa-2x mr-3 text-info'></i>
              </a>
              <a href='https://youtube.com/'>
                <i className='fa fa-youtube fa-2x mr-3 text-danger'></i>
              </a>
              <a href='https://web.whatsapp.com/'>
                <i
                  className='fa fa-whatsapp fa-2x mr-3 text-success'
                  aria-hidden='true'
                ></i>
              </a>
            </div>
          </div>
          <div className='text-center mt-5'>
            <p className='text-white'>
              Copyright &copy; <span id='year'></span>Neighbor First
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
