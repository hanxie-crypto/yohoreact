import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'scss/components/_header';
const cx = classNames.bind(styles);
import BrandItem from 'components/headergroup/BrandItem';
export default class ThirdNav extends Component {
    constructor(props) {
       super(props);
    }

    render() {
        const branditems = this.props.thirdnav.branditems ? this.props.thirdnav.branditems.map((branditem, key) => {
        return (
            <BrandItem  key={key}
                brandname = {branditem.brandname}
                hot = {branditem.hot}
                link = {branditem.link}/>);
        })
        : null;
        return (
            <div className={cx('thirdnavlist')}>
                <h1 className={cx('category-title', 'thirdnavbar')}>{this.props.thirdnav.title}</h1>
                <ul className={cx('category-list')}>
                    {branditems}
                </ul>
            </div>
       )
    }
}
ThirdNav.propTypes = {
  thirdnav: PropTypes.object.isRequired
};