import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
import Switch from 'react-bootstrap-switch';

import imagine1 from 'assets/img/full-screen-image-1.jpg';
import imagine2 from 'assets/img/full-screen-image-2.jpg';
import imagine3 from 'assets/img/full-screen-image-3.jpg';
import imagine4 from 'assets/img/full-screen-image-4.jpg';

const {
  FacebookShareButton,
  TwitterShareButton
} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

class FixedPlugin extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes: "dropdown show-dropdown open",
            bg_checked: true,
            bgImage: this.props.bgImage,
            switched: false,
            mini_checked: this.props.mini,
            navbar_checked: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.onChangeClick = this.onChangeClick.bind(this);
        this.onNavbarClick = this.onNavbarClick.bind(this);
        this.onMiniClick = this.onMiniClick.bind(this);
    }
    handleClick(){
        this.props.handleFixedClick();
    }
    onChangeClick(){
        this.setState({bg_checked: !this.state.bg_checked});
        this.props.handleHasImage(this.state.bg_checked);
    }
    onNavbarClick(){
        this.setState({navbar_checked: !this.state.navbar_checked});
        this.props.handleNavbarClick(this.state.navbar_checked);
    }
    onMiniClick(){
        this.setState({mini_checked: !this.state.mini_checked});
        this.props.handleMiniClick(this.state.mini_checked);
    }
    render(){
        return (
            <div className="fixed-plugin hidden">
                <div id="fixedPluginClasses" className={this.props.fixedClasses}>
                    <div onClick={this.handleClick}>
                        <i className="fa fa-cog fa-2x"></i>
                    </div>
                    <ul className="dropdown-menu">
                        <li className="header-title">Configuration</li>
                        <li className="adjustments-line">
                            <p className="pull-left">Background Image</p>
                            <div className="pull-right">
                                <Switch
                                    onChange={this.onChangeClick}
                                    defaultValue={this.state.bg_checked}
                                />
                            </div>
                            <div className="clearfix"></div>
                        </li>
                        {
                            window.location.pathname.indexOf("pages") > -1 ? '' : (
                                <li className="adjustments-line">
                                    <p className="pull-left">Sidebar Mini</p>
                                    <div className="pull-right">
                                        <Switch
                                            onChange={this.onMiniClick}
                                            defaultValue={this.state.mini_checked}
                                        />
                                    </div>
                                    <div className="clearfix"></div>
                                </li>
                            )
                        }
                        {
                            window.location.pathname.indexOf("pages") > -1 ? '' : (
                                <li className="adjustments-line">
                                    <p className="pull-left">Fixed Navbar</p>
                                    <div className="pull-right">
                                        <Switch
                                            onChange={this.onNavbarClick}
                                            defaultValue={this.state.navbar_checked}
                                        />
                                    </div>
                                </li>
                            )
                        }
                        <li className="adjustments-line">
                            <a  className="switch-trigger">
                                <p>Filters</p>
                                <div className="pull-right">
                                    <span className={this.props.bgColor === "black" ? "badge filter active":"badge filter"} data-color="black" onClick={() => {this.props.handleColorClick("black")}}></span>
                                    <span className={this.props.bgColor === "azure" ? "badge filter badge-azure active":"badge filter badge-azure"} data-color="azure" onClick={() => {this.props.handleColorClick("azure")}}></span>
                                    <span className={this.props.bgColor === "green" ? "badge filter badge-green active":"badge filter badge-green"} data-color="green" onClick={() => {this.props.handleColorClick("green")}}></span>
                                    <span className={this.props.bgColor === "orange" ? "badge filter badge-orange active":"badge filter badge-orange"} data-color="orange" onClick={() => {this.props.handleColorClick("orange")}}></span>
                                    <span className={this.props.bgColor === "red" ? "badge filter badge-red active":"badge filter badge-red"} data-color="red" onClick={() => {this.props.handleColorClick("red")}}></span>
                                    <span className={this.props.bgColor === "purple" ? "badge filter badge-purple active":"badge filter badge-purple"} data-color="purple" onClick={() => {this.props.handleColorClick("purple")}}></span>
                                </div>
                                <div className="clearfix"></div>
                            </a>
                        </li>
                        <li className="header-title">Sidebar Images</li>
                        <li className={this.state["bgImage"] === imagine1 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine1});this.props.handleImageClick(imagine1)} }>
                                <img src={imagine1} alt="..."/>
                            </a>
                        </li>
                        <li className={this.state["bgImage"] === imagine2 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine2});this.props.handleImageClick(imagine2)} }>
                                <img src={imagine2} alt="..."/>
                            </a>
                        </li>
                        <li className={this.state["bgImage"] === imagine3 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine3});this.props.handleImageClick(imagine3)} }>
                                <img src={imagine3} alt="..."/>
                            </a>
                        </li>
                        <li className={this.state["bgImage"] === imagine4 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine4});this.props.handleImageClick(imagine4)} }>
                                <img src={imagine4} alt="..."/>
                            </a>
                        </li>

            			<li className="header-title" id="sharrreTitle">Cảm ơn đã chia sẻ!</li>

                        <li className="button-container">
                            <FacebookShareButton url="http://nhahangpos.com"><FacebookIcon size={32} round={true}/></FacebookShareButton>
                            <TwitterShareButton url="http://nhahangpos.com" title="NhahangPOS React - Free Webapp" hashtags={["react","bootstrap"]} via="paracelsoft"><TwitterIcon size={32} round={true}/></TwitterShareButton>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default FixedPlugin;