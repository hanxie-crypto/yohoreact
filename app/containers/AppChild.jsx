import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Header from 'components/Header';
import RaiseButton from 'components/material/RaiseButton';
import AppBarExampleIcon from 'components/material/AppBarExampleIcon';
import AutoCompleteEx from 'components/material/AutoCompleteEx';
import AvatarExampleSimple from 'components/material/AvatarExampleSimple';

class AppChild extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RaiseButton />
        <AppBarExampleIcon />
        <AutoCompleteEx />
        <AvatarExampleSimple/>
      </div>
    );
  }
}

AppChild.propTypes = {
  testitem: PropTypes.string
};

function mapStateToProps(state) {
  return {
    testitem: state.testitem,
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(AppChild);
