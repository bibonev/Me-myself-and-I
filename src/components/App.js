import React, {PropTypes} from 'react';
import Header from './common/Header.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';

import Avatar from 'material-ui/Avatar';
import AutoComplete from 'material-ui/AutoComplete';
import Dialog from 'material-ui/Dialog';
import theme from './common/Theme.js';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import Divider from 'material-ui/Divider';
import ActionCode from 'material-ui/svg-icons/action/code';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import ActionWork from 'material-ui/svg-icons/action/work';
import ActionLanguages from 'material-ui/svg-icons/action/translate';
import ActionHobbies from 'material-ui/svg-icons/action/favorite';
import ActionAbout from 'material-ui/svg-icons/action/bookmark-border';

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
        const selectedMenu = {
            backgroundColor: "lightBlue"
        }
        console.log();
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
                                    dataSource={[]}
                                    floatingLabelText="Search"
                                    fullWidth={true}
                                    onNewRequest={this.onSubmit}/>
                            </Dialog>
                        </div>
                    : <div>
                        <Drawer open={!this.state.open} width={300}>
                            <MenuItem disabled={true}>
                                <Avatar src={require("../../assets/profile_picture.jpg")} size={275}/>
                            </MenuItem>
                            <MenuItem
                                style={this.context.location.pathname == "/"
                                ? selectedMenu
                                : {}}
                                primaryText="About"
                                containerElement={< Link to = "/" />}
                                leftIcon={< ActionAbout />}/>
                            <Divider/>
                            <MenuItem
                                style={this.context.location.pathname == "/projects"
                                ? selectedMenu
                                : {}}
                                primaryText="Projects"
                                containerElement={< Link to = "/projects" />}
                                leftIcon={< ActionCode />}/>
                            <MenuItem
                                style={this.context.location.pathname == "/experience"
                                ? selectedMenu
                                : {}}
                                primaryText="Experience"
                                containerElement={< Link to = "/experience" />}
                                leftIcon={< ActionWork />}/>
                            <MenuItem
                                style={this.context.location.pathname == "/feedback"
                                ? selectedMenu
                                : {}}
                                primaryText="Feedback"
                                containerElement={< Link to = "/feedback" />}
                                leftIcon={< ActionFeedback />}/>
                            <Divider/>
                            <MenuItem
                                style={this.context.location.pathname == "/hobbies"
                                ? selectedMenu
                                : {}}
                                primaryText="Hobbies"
                                containerElement={< Link to = "/hobbies" />}
                                leftIcon={< ActionHobbies />}/>
                            <MenuItem
                                style={this.context.location.pathname == "/languages"
                                ? selectedMenu
                                : {}}
                                primaryText="Langauges"
                                containerElement={< Link to = "/languages" />}
                                leftIcon={< ActionLanguages />}/>
                            <Divider/>
                            <MenuItem
                                style={this.context.location.pathname == "/contact"
                                ? selectedMenu
                                : {}}
                                primaryText="Contact"
                                containerElement={< Link to = "/contact" />}
                                leftIcon={< PersonOutline />}/>
                        </Drawer>
                        {this.props.children}
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