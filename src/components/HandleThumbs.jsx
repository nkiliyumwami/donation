import React, { Component } from 'react';
import { DONATIONS } from '../shared/donations';



export default class HandleThumbs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            donations: DONATIONS
        }
    }
    render() {
        const like = this.props.like
        return (
          <div>
              <p>You clicked {like} times</p>
              <button
                onClick={() => this.like ++}
              >
                Click me
              </button>
          </div>
        );
    }
} 






 

