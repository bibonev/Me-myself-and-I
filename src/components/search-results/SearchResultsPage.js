import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class SearchResultsPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.technologies && this
                    .props
                    .technologies
                    .map(tech => {
                        return (
                            <h1>{tech}</h1>
                        );
                    })}
            </div>
        );
    }
}

SearchResultsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    technologies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {technologies: state.search};
}

export default connect(mapStateToProps)(SearchResultsPage);