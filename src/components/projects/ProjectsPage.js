import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectsActions from '../../actions/projectsActions';

import GridCard from '../common/GridCard';
import IconButton from 'material-ui/IconButton';
import {GitHub} from '../common/Icons';

import Pagination from 'material-ui-pagination';

class ProjectsPage extends React.Component {

    constructor() {
        super();
        this.state = {
            totalPages: 3,
            displayPages: 3,
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

    getActions(url) {
        return ([(
                <IconButton
                    href={"https://github.com/bibonev/" + url}
                    target="_blank"
                    tooltip="View on GitHub"
                    touch={false}
                    tooltipPosition="top-right">
                    <GitHub/>
                </IconButton>
            )]);
    }

    render() {
        return (
            <div id={'paper2'}>
                <div
                    style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    {this
                        .props
                        .projects
                        .map(project => {
                            const {currentPage} = this.state;
                            if (currentPage === project.page) {
                                return (
                                    <GridCard
                                        style={{
                                        margin: '20px auto'
                                    }}
                                        textStyle={{
                                        color: 'black',
                                        margin: "0 auto",
                                        width: "30em"
                                    }}
                                        title={project.name}
                                        actions={this.getActions(project.url)}
                                        text={project.text}
                                        chips={project.technologies}></GridCard>
                                );
                            }
                        })}
                </div>
                <br/>
                <div style={{
                    textAlign: "center"
                }}>
                    <Pagination
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