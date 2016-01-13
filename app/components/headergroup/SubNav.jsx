import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'scss/components/_header';
const cx = classNames.bind(styles);
import ThirdNav from 'components/headergroup/ThirdNav';

export default class SubNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const  thirdnavwrapper = this.props.subnav.thirdnav?
    (<div className={cx('third-nav-wrapper')}>
        <div className={cx('third-nav')}>
            <div className={cx('categorywrapper')}>
                <div className={cx('category')}>
                    {this.props.subnav.thirdnav.map((thirdnav,key)=>{
                        return (<ThirdNav  thirdnav= {thirdnav} key={key}/>)
                    })}                             
                </div>
            </div>
            <div className={cx('showdetail')} >
                <a href='http://list.yohobuy.com/?gender=1,3&amp;msort=8'>
                    <img src='http://img12.static.yhbimg.com/yhb-img01/2015/10/30/06/02af834d146e3f00b1f5fcc8388f641922.jpg?imageView/1/w/337/h/250' alt=''/>
                </a>
                <a className={cx('title')} href='http://list.yohobuy.com/?gender=1,3&amp;msort=8'>热门小物优选</a>
            </div>
            </div>
        </div>):null;                       
    return (
            <li className={cx('sub-nav-item')}>
                <a  href={this.props.subnav.link}>{this.props.subnav.name} 
                    {(this.props.subnav.is_new !==null)?<span className={cx('newlogo')}></span>:null}
                </a>
                {thirdnavwrapper}       
            </li>
        )
  }
}
SubNav.propTypes = {
  subnav: PropTypes.object
};