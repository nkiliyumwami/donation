import React from "react";

function NewsLetter() {
  return (
    <React.Fragment>
      <section
        id='newsletter'
        className='text-center p-5 bg-dark text-white mt-3'
      >
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>Sign Up For Our Newsletter</h1>
              <p>
                Stay current with today's nearby donations. Donate and change
                one's life!
              </p>
              <form className='form-inline justify-content-center'>
                <input
                  type='text'
                  className='form-control mb-2 mr-2'
                  placeholder='Enter Name'
                />
                <input
                  type='text'
                  className='form-control mb-2 mr-2'
                  placeholder='Enter Email'
                />
                <button className='btn btn-info mb-2'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default NewsLetter;
