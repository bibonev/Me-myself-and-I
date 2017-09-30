import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectsActions from '../../actions/projectsActions';

import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionCode from 'material-ui/svg-icons/action/code';

class ProjectsPage extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this
            .props
            .actions
            .showProjects();
    }

    render() {
        return (
            <div>
                <List>
                    {this
                        .props
                        .projects
                        .map(project => {
                            return (
                                <ListItem>
                                    <Card>
                                        <CardHeader title={project.name} subtitle="Subtitle"/>
                                        <CardText expandable={false}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium
                                            massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum
                                            sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris,
                                            mattis quis lacus id, pellentesque lobortis odio.
                                        </CardText>
                                        <CardActions>
                                            <FlatButton
                                                href="https://github.com/bibonev/"
                                                target="_blank"
                                                label=""
                                                primary={true}
                                                icon={< ActionCode />}/>
                                        </CardActions>
                                    </Card>
                                </ListItem>
                            );
                        })}
                </List>
            </div>
        );
    }
}

ProjectsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {projects: state.projects};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(projectsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);