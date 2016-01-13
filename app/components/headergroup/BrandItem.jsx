import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'scss/components/_header';
const cx = classNames.bind(styles);


export default class BrandItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <li className={cx('category-item', 'thirdnavbar')}>
                    <a href={this.props.link} className={cx('this.porps.hot')}>
                        {this.props.brandname}
                    </a>
                </li>
            );
    }
};


BrandItem.propTypes = {
  brandname: PropTypes.string.isRequired,
  link: PropTypes.string,
  hot: PropTypes.string
};
