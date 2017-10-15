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
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as searchActions from '../actions/searchActions';
import * as projectsActions from '../actions/projectsActions';
import * as hobbiesActions from '../actions/hobbiesActions';
import * as feedbackActions from '../actions/feedbackActions';
import * as experienceActions from '../actions/experienceActions';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            open: true,
            experience: false,
            projects: false,
            hobbies: false,
            feedback: false
        };
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    onSubmit(request) {
        let req = request
            .replace(/ /g, '')
            .replace(/\d*[.]?\d*/g, '')
            .toLowerCase()
            .split(',');

        this
            .props
            .searchActions
            .addTechnologies(req);

        this
            .props
            .projectsActions
            .checkProjects(req);

        this
            .props
            .hobbiesActions
            .checkHobbies(req);

        this
            .props
            .feedbackActions
            .checkFeedback(req);

        this
            .props
            .experienceActions
            .checkExperience(req);

        this.setState({open: false});
    }

    getNotificationIcon(value, selected) {
        let badgeColor = selected
            ? '#DFE6EB'
            : '#1D364D';
        let notificationColor = selected
            ? 'white'
            : 'black';
        let textColor = selected
            ? 'black'
            : 'white';

        console.log("VALUE: ", value);

        return (
            <Badge
                badgeContent={value}
                badgeStyle={{
                top: 12,
                right: 12,
                backgroundColor: badgeColor,
                color: textColor
            }}
                style={{
                position: 'absolute',
                top: -30,
                right: 5
            }}
                primary={true}>
                <NotificationsIcon
                    style={{
                    color: notificationColor
                }}/>
            </Badge>
        );
    }

    render() {
        const style = {
            paper: {
                margin: "0px 0px 0px 300px",
                height: "100vh",
                padding: "40px",
                overflowY: 'auto'
            },
            div: {
                height: "100vh",
                backgroundColor: 'white'
            },
            selectedMenu: {
                backgroundColor: "#1D364D",
                color: 'white'
            }
        };

        console.log("PROJECTS: ", this.props.countProjects);

        return (
            <MuiThemeProvider muiTheme={theme}>
                {this.state.open && this.context.location.pathname === "/"
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
                                    'Python',
                                    'Docker'
                                ]}
                                    floatingLabelText="Search"
                                    fullWidth={true}
                                    onNewRequest={(req) => this.onSubmit(req)}/>
                            </Dialog>
                        </div>
                    : <div>
                        <Drawer
                            style={{
                            position: 'absolute'
                        }}
                            open={true}
                            width={300}
                            containerStyle={{
                            backgroundColor: 'white'
                        }}>
                            <MenuItem disabled={true}>
                                <Avatar src={require("../../assets/profile_picture.png")} size={275}/>
                            </MenuItem>
                            <MenuItem
                                style={this.context.location.pathname === "/about" || this.context.location.pathname === "/"
                                ? style.selectedMenu
                                : {}}
                                primaryText="About"
                                containerElement={< Link to = "/about" />}
                                leftIcon={< ActionAbout />}/>
                            <Divider/>
                            <MenuItem
                                style={this.context.location.pathname === "/projects"
                                ? style.selectedMenu
                                : {}}
                                primaryText="Projects"
                                containerElement={< Link to = "/projects" />}
                                leftIcon={< ActionCode />}
                                rightIcon={this.context.location.pathname === "/projects" && this.props.countProjects !== 0
                                ? this.getNotificationIcon(this.props.countProjects, true)
                                : this.props.countProjects !== 0 && this.getNotificationIcon(this.props.countProjects, false)}/>
                            <MenuItem
                                style={this.context.location.pathname === "/experience"
                                ? style.selectedMenu
                                : {}}
                                primaryText="Experience"
                                containerElement={< Link to = "/experience" />}
                                leftIcon={< ActionWork />}
                                rightIcon={this.context.location.pathname === "/experience" && this.props.countExperience !== 0
                                ? this.getNotificationIcon(this.props.countExperience, true)
                                : this.props.countExperience !== 0 && this.getNotificationIcon(this.props.countExperience, false)}/>
                            <MenuItem
                                style={this.context.location.pathname === "/feedback"
                                ? style.selectedMenu
                                : {}}
                                primaryText="Feedback"
                                containerElement={< Link to = "/feedback" />}
                                leftIcon={< ActionFeedback />}
                                rightIcon={this.context.location.pathname === "/feedback" && this.props.countFeedback !== 0
                                ? this.getNotificationIcon(this.props.countFeedback, true)
                                : this.props.countFeedback !== 0 && this.getNotificationIcon(this.props.countFeedback, false)}/>
                            <MenuItem
                                style={this.context.location.pathname === "/hobbies"
                                ? style.selectedMenu
                                : {}}
                                primaryText="Hobbies"
                                containerElement={< Link to = "/hobbies" />}
                                leftIcon={< ActionHobbies />}
                                rightIcon={this.context.location.pathname === "/hobbies" && this.props.countHobbies !== 0
                                ? this.getNotificationIcon(this.props.countHobbies, true)
                                : this.props.countHobbies !== 0 && this.getNotificationIcon(this.props.countHobbies, false)}/>
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
                            <Paper style={style.paper} id={"paper"}>
                                {this.props.children}
                            </Paper>
                        </div>
                    </div>}
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequred,
    searchActions: PropTypes.object.isRequired,
    projectsActions: PropTypes.object.isRequired,
    hobbiesActions: PropTypes.object.isRequired,
    feedbackActions: PropTypes.object.isRequired,
    experienceActions: PropTypes.object.isRequired,
    countProjects: PropTypes.number.isRequired,
    countHobbies: PropTypes.number.isRequired,
    countFeedback: PropTypes.number.isRequired,
    countExperience: PropTypes.number.isRequired
};

App.contextTypes = {
    router: React.PropTypes.object,
    location: React.PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return {countProjects: state.projects.count, countHobbies: state.hobbies.count, countFeedback: state.feedbacks.count, countExperience: state.experience.count};
}

function mapDispatchToProps(dispatch) {
    return {
        searchActions: bindActionCreators(searchActions, dispatch),
        projectsActions: bindActionCreators(projectsActions, dispatch),
        hobbiesActions: bindActionCreators(hobbiesActions, dispatch),
        feedbackActions: bindActionCreators(feedbackActions, dispatch),
        experienceActions: bindActionCreators(experienceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);