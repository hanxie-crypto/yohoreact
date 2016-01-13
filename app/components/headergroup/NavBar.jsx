import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'scss/components/_header';
const cx = classNames.bind(styles);
import SubNav from 'components/headergroup/SubNav';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const navlist =  this.props.navlist.subnav ? this.props.navlist.subnav.map((subnav, key) => {
        return (
            <SubNav subnav = {subnav} key={key}/>);
        })
        : null;
        return (
            <li className={cx('first-nav-item', this.props.navlist.classname)}>
                <h3 className={cx('name-cn')}>
                    <a href='{this.props.navlist.link}'>{this.props.navlist.name_cn}</a>
                </h3>
                <h3 className={cx('name-en')}>
                    <a href='{this.props.navlist.link}'>{this.props.navlist.name_en}</a>
                </h3>
                <div className={cx('sub-nav-wrapper')}>
                    <ul className={cx('sub-nav-list')}>
                        {navlist}
                    </ul>
                </div>
            </li>
        );
    }
}

NavBar.propTypes = {
  navlist : PropTypes.object.isRequired
};