import React from "react";

function SearchBars() {
  return (
    <React.Fragment>
      <div className='container pt-3'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>Search Donations nearby</h2>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='input-group col-md-4 my-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text text-dark'>By Date:</span>
            </div>
            <input type='date' name='date' id='date' className='form-control' />
            <div className='input-group-append'>
              <span type='button' className='input-group-text'>
                <i className='fa fa-search'></i>
              </span>
            </div>
          </div>

          <div className='input-group col-md-3 my-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text text-dark'>By Item:</span>
            </div>
            <input
              type='text'
              placeholder='.....'
              id='search'
              name='search'
              className='form-control'
            />
            <div className='input-group-append'>
              <span type='button' className='input-group-text' id='button'>
                <i className='fa fa-search'></i>
              </span>
            </div>
          </div>

          <div className='input-group col-md-5 my-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text text-dark'> By Distance:</span>
            </div>
            <select className='search-radius' id='search-radius' name='radius'>
              <option value=''>Distance</option>
              <option value='5'>5 miles</option>
              <option value='15'>15 miles</option>
              <option value='25'>25 miles</option>
              <option value='35'>35 miles</option>
              <option value='50'>50 miles</option>
            </select>
            <div className='input-group-append'>
              <span type='button' className='input-group-text'>
                <i className='fa fa-search'></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchBars;
