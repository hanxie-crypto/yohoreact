import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'scss/components/_header';
const cx = classNames.bind(styles);
import NavBar from 'components/headergroup/NavBar';
class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const navlist = this.props.navlist?this.props.navlist.map((navlist,key)=>{
        return (<NavBar key={key}
                    navlist={navlist} />);
    }):null;
    return (
      <div className={cx('yoho-header')}>
        <div className={cx('header-topwrapper','clearfix')}>
            <div className={cx('header-top')}>
                <div className={cx('leftpart','float-left')}>
                    <span className={cx('icon-hamburger')}></span>
                    <a href="" className={cx('header-yoho')} >YOHO!有货</a>
                    <ul className={cx('yohoproducts-list')}>
                        <li className={cx('yohoproducts-item')}>
                            <a href="" className={cx('yohogroup')} en="YOHO!" cn="集团官网">YOHO!</a>
                        </li>
                        <li className={cx('yohoproducts-item')}>
                            <a href="" className={cx('yohogroup')} en="YOHO!BOYS" cn="男生潮流">YOHO!BOYS</a>
                        </li>
                        <li className={cx('yohoproducts-item')}>
                            <a href="" className={cx('yohogroup')} en="YOHO!GIRLS" cn="女生潮流">YOHO!GIRLS</a>
                        </li>
                        <li className={cx('yohoproducts-item')}>
                            <a href="" className={cx('yohogroup')} en="YOHO!SHOW" cn="物趣分享">YOHO!SHOW</a>
                        </li>
                        <li className={cx('yohoproducts-item')}>
                            <a href="" className={cx('yohogroup')} en="YO'HOOD" cn="潮流嘉年华">YOHOOD</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('rightpart','float-right')}>

                </div>   
            </div>
        </div>
        <div className={cx('header-navwrapper','clearfix')}>
            <div className={cx('header-navcontent')}>
                <ul className={cx('first-nav-list','float-left')}>
                   {navlist}
                </ul>
                <div className={cx('icon-logo')}></div>
                <div className={cx('header-tool','float-right')}>
                    <div className={cx('search','float-left','searchcateboys')} >
                        <form action="http://search.yohobuy.com" method="get" id="searchForm">
                            <span className={cx('searchspan')}>
                                <input className={cx('searchinput')} type="text" name="keyword" id="query_key" autoComplete="off" x-webkit-speech="" lang="zh-CN" x-webkit-grammar="builtin:translate" value="" onfocus="if(this.value==this.defaultValue){this.value='';this.style.color='#333'}" onblur="if(this.value==''){this.value=this.defaultValue;this.style.color='#999'}" maxLength="30"/>
                            </span>
                            <a className={cx('icon-search')} href="javascript:submitSearch();"></a>
                            <ul className={cx('search-list')}></ul>
                        </form>
                    </div>
                    <div className={cx('gobuy','float-left','gobuyboys')} id="miniCartBox">
                        <span className={cx('ic-infomation')}>2</span>
                        <div className={cx('gobuy-wrapper')}></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  navlist : PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    navlist: state.navlist
  };
}


export default connect(mapStateToProps)(Header);
