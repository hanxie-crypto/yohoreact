import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Header from 'components/Header';
import BadgeExampleSimple from 'components/material/BadgeExampleSimple';
import 'scss/main';
class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div >
            <Header/>
            {this.props.children}
            <BadgeExampleSimple/>
        </div>
    );
  }
}

App.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}


export default connect(mapStateToProps)(App);
