import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import theme from './common/Theme.js';
import {GitHub, Facebook, Instagram, LinkedIn, Email} from './common/Icons.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Avatar from 'material-ui/Avatar';
import AutoComplete from 'material-ui/AutoComplete';
import Dialog from 'material-ui/Dialog';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import Phone from 'material-ui/svg-icons/communication/phone';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ActionCode from 'material-ui/svg-icons/action/code';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import ActionWork from 'material-ui/svg-icons/action/work';
import ActionLanguages from 'material-ui/svg-icons/action/translate';
import ActionHobbies from 'material-ui/svg-icons/action/favorite';
import ActionAbout from 'material-ui/svg-icons/action/bookmark-border';
import IconButton from 'material-ui/IconButton';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            open: true
        };
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    onSubmit() {
        this.setState({open: false});
    }

    render() {
        const style = {
            div: {
                margin: "0px 0px 0px 300px",
                height: "100vh",
                padding: "40px",
                backgroundColor: 'white',
                overflowY: 'auto'
            },
            selectedMenu: {
                backgroundColor: "white"
            }
        };
        return (
            <MuiThemeProvider muiTheme={theme}>
                {this.state.open
                    ? <div>
                            <Dialog
                                title="What skills are you looking for from Boyan...?"
                                modal={true}
                                open={this.state.open}>
                                <AutoComplete
                                    hintText="(eg. Java, C#, React, JavaScript, .NET, ...)"
                                    dataSource={[
                                    'Java',
                                    'C#',
                                    'React',
                                    'Angular 2',
                                    '.NET',
                                    'ASP',
                                    'Python'
                                ]}
                                    floatingLabelText="Search"
                                    fullWidth={true}
                                    onNewRequest={this.onSubmit}
                                    errorStyle={{
                                    color: "#1D364D"
                                }}/>
                            </Dialog>
                        </div>
                    : <div>
                        <Drawer
                            style={{
                            position: 'absolute'
                        }}
                            open={!this.state.open}
                            width={300}
                            containerStyle={{
                            backgroundColor: 'white'
                        }}>
                            <MenuItem disabled={true}>
                                <Avatar src={require("../../assets/profile_picture.png")} size={275}/>
                            </MenuItem>
                            <MenuItem
                                style={this.context.location.pathname == "/"
                                ? style.selectedMenu
                                : {}}
                                primaryText="About"
                                containerElement={< Link to = "/" />}
                                leftIcon={< ActionAbout />}/>
                            <Divider/>
                            <MenuItem
                                style={this.context.location.pathname == "/projects"
                                ? style.selectedMenu
                                : {}}
                                primaryText="Projects"
                                containerElement={< Link to = "/projects" />}
                                leftIcon={< ActionCode />}/>
                            <MenuItem
                                style={this.context.location.pathname == "/experience"
                                ? style.selectedMenu
                                : {}}
                                primaryText="Experience"
                                containerElement={< Link to = "/experience" />}
                                leftIcon={< ActionWork />}/>
                            <MenuItem
                                style={this.context.location.pathname == "/feedback"
                                ? style.selectedMenu
                                : {}}
                                primaryText="Feedback"
                                containerElement={< Link to = "/feedback" />}
                                leftIcon={< ActionFeedback />}/>
                            <MenuItem
                                style={this.context.location.pathname == "/hobbies"
                                ? style.selectedMenu
                                : {}}
                                primaryText="Hobbies"
                                containerElement={< Link to = "/hobbies" />}
                                leftIcon={< ActionHobbies />}/>
                            <div
                                style={{
                                position: 'fixed',
                                bottom: 20,
                                left: 20
                            }}>
                                <IconButton
                                    href={"https://github.com/bibonev/"}
                                    target="_blank"
                                    tooltip="Follow me"
                                    disableTouchRipple={true}
                                    tooltipPosition="top-center">
                                    <GitHub/>
                                </IconButton>
                                <IconButton
                                    href={"https://www.facebook.com/Boyan.Bonev00"}
                                    target="_blank"
                                    tooltip="Add me"
                                    touch={false}
                                    disableTouchRipple={true}
                                    tooltipPosition="top-center">
                                    <Facebook/>
                                </IconButton>
                                <IconButton
                                    href={"mailto:boyan.i.bonev@gmail.com"}
                                    target="_blank"
                                    tooltip="Email me"
                                    touch={false}
                                    disableTouchRipple={true}
                                    tooltipPosition="top-center">
                                    <Email/>
                                </IconButton>
                                <IconButton
                                    href={"https://www.linkedin.com/in/bonevboyan/"}
                                    target="_blank"
                                    tooltip="Connect with me"
                                    touch={false}
                                    disableTouchRipple={true}
                                    tooltipPosition="top-center">
                                    <LinkedIn/>
                                </IconButton>
                                <IconButton
                                    href={"tel:07401990788"}
                                    target="_blank"
                                    tooltip="Call me"
                                    touch={false}
                                    disableTouchRipple={true}
                                    tooltipPosition="top-center">
                                    <Phone/>
                                </IconButton>
                            </div>
                        </Drawer>
                        <div style={style.div}>
                            {this.props.children}
                        </div>
                    </div>}
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequred
};

App.contextTypes = {
    router: React.PropTypes.object,
    location: React.PropTypes.object
}

export default App;