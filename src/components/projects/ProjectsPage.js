import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectsActions from '../../actions/projectsActions';

import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionCode from 'material-ui/svg-icons/action/code';

import Pagination from 'material-ui-pagination';

class ProjectsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            totalPages: 4,
            displayPages: 4,
            currentPage: 1
        };
    }

    componentWillMount() {
        this
            .props
            .actions
            .showProjects();
    }

    onChangePage(currentPage) {
        this.setState({currentPage});
    }

    render() {
        return (
            <div>
                <List>
                    {this
                        .props
                        .projects
                        .map(project => {
                            const {currentPage} = this.state;
                            if (currentPage === project.page) {
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
                            }
                        })}
                </List>
                <div style={{
                    textAlign: "center"
                }}>
                    <Pagination
                        styleRoot={{
                        margin: '2px',
                        display: "inline-block"
                    }}
                        total={this.state.totalPages}
                        current={this.state.currentPage}
                        display={this.state.displayPages}
                        onChange=
                        { currentPage => this.onChangePage(currentPage) }/>
                </div>
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