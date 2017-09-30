import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectsActions from '../../actions/projectsActions';

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
        console.log("Projects: ", this.props.projects);
        return (
            <div>
                <h1>Who the fuck is this singer?</h1>
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