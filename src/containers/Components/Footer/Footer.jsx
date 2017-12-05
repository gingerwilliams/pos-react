import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return (
            <footer className="footer footer-demo">
                <div className="container">
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="http://www.creative-tim.com/product/light-bootstrap-dashboard-pro">
                                    Light Bootstrap Dashboard Pro
                                </a>
                            </li>
                            <li>
                                <a href="http://www.creative-tim.com">
                                    Creative Tim
                                </a>
                            </li>
                            <li>
                                <a href="http://blog.creative-tim.com">
                                   Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="social-area pull-right">
                        <a className="btn btn-social btn-twitter btn-simple" href="https://twitter.com/CreativeTim">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="btn btn-social btn-facebook btn-simple" href="https://www.facebook.com/CreativeTim">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a className="btn btn-social btn-google btn-simple" href="https://plus.google.com/+CreativetimPage">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </div>
                    <div className="copyright">
                        ©  Creative Tim, made with <i className="fa fa-heart heart"></i>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;