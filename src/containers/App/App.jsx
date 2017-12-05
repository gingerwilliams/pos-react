import React, {Component} from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';


import FixedPlugin from 'components/FixedPlugin/FixedPlugin.jsx'

import image from 'assets/img/full-screen-image-4.jpg';

// dinamically create app routes
import appRoutes from 'routes/app.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: image,
            color: "black",
            hasImage: true,
            navbar: false,
            mini: false,
            fixedClasses: "dropdown show-dropdown open"
        };

        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleColorClick = this.handleColorClick.bind(this);
        this.handleHasImage = this.handleHasImage.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
        this.handleMiniClick = this.handleMiniClick.bind(this);
        this.handleFixedClick = this.handleFixedClick.bind(this);
    }
    handleImageClick(image){
        this.setState({image: image});
    }
    handleColorClick(color){
        this.setState({color: color});
    }
    handleHasImage(hasImage){
        this.setState({hasImage: hasImage});
    }
    handleNavbarClick(navbar){
        this.setState({navbar: navbar});
    }
    handleMiniClick(mini){
        this.setState({mini: mini});
        document.body.classList.toggle('sidebar-mini');
    }
    handleFixedClick(){
        if(this.state.fixedClasses === "dropdown"){
            this.setState({fixedClasses: "dropdown show-dropdown open"})
        } else {
            this.setState({fixedClasses: "dropdown"});
        }
    }
    componentDidUpdate(e){
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }
    render(){
        return (
            <div>
                <Switch>
                    {
                        appRoutes.map((prop,key) => {
                            return (
                                <Route
                                    path={prop.path}
                                    render={routeProps =>
                                        <prop.component
                                            {...routeProps}
                                            image={this.state.image}
                                            color={this.state.color}
                                            hasImage={this.state.hasImage}
                                            navbar={this.state.navbar}
                                            mini={this.state.mini}
                                            handleMiniClick={this.handleMiniClick}
                                            handleFixedClick={this.handleFixedClick}
                                            fixedClasses={this.state.fixedClasses}
                                        />}
                                    key={key}
                                />
                            );
                        })
                    }
                </Switch>
                <FixedPlugin
                    handleImageClick={this.handleImageClick}
                    handleColorClick={this.handleColorClick}
                    handleHasImage={this.handleHasImage}
                    handleNavbarClick={this.handleNavbarClick}
                    handleMiniClick={this.handleMiniClick}
                    bgColor={this.state["color"]}
                    bgImage={this.state["image"]}
                    mini={this.state["mini"]}
                    handleFixedClick={this.handleFixedClick}
                    fixedClasses={this.state.fixedClasses}
                />
            </div>
        );
    }
}

export default App;