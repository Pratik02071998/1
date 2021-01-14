import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <footer className="footer_style"><div>© 2020 Developed by Pratik Mehta. All Rights Reserved.</div></footer>
    );
  }
}

export default Footer;