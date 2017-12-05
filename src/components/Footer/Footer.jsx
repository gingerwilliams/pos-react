import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <footer className={"footer"
                + (this.props.transparent !== undefined ? " footer-transparent":"")
                + (this.props.default !== undefined ? " footer-default":"")
                + (this.props.black !== undefined ? " footer-black":"")
            }>
                <div className={"container" + (this.props.fluid !== undefined ? "-fluid":"")}>
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="http://www.nhahangpos.com">
                                    Trang chủ
                                </a>
                            </li>
                            <li>
                                <a href="http://www.paracelsoft.com">
                                    Công ty
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                    Sản phẩm
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Bài viết
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        &copy; {1900 + (new Date()).getYear()} <a href="http://www.nhahangpos.com">Paracel Soft</a>, made with <i className="fa fa-heart heart"></i> for a better web
                    </p>
                </div>
            </footer>
        );
    }
}
export default Footer;