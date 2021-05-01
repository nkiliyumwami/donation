import React, {Component} from 'react';
import Navbar from './NavbarComponent';
import Header from './Header';
import Donations from './Donations';
import SearchBars from './SearchBars';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import { DONATIONS } from '../shared/donations';
import ReadMore from '../forms/ReadMore';
import NavbarComponent from './NavbarComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: DONATIONS
    };
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <Header />
        <SearchBars />
        <Donations donations={this.state.donations} />
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}

export default Main

