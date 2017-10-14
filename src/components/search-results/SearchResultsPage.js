import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';

class SearchResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };

        this.handleChange = this
            .handleChange
            .bind(this);
    }

    handleChange(value) {
        this.setState({value: value});
    }

    render() {
        const styles = {
            headline: {
                fontSize: 24,
                paddingTop: 16,
                marginBottom: 12,
                fontWeight: 400
            }
        };

        return (
            <div>
                <Tabs value={this.state.value} onChange={(value) => this.handleChange(value)}>
                    {this.props.technologies && this
                        .props
                        .technologies
                        .map((tech, index) => {
                            return (
                                <Tab label={tech} value={index}>
                                    <div>
                                        <h2 style={styles.headline}>{"My experience with " + tech}</h2>
                                        <p>
                                            {tech}
                                        </p>
                                    </div>
                                </Tab>
                            );
                        })}
                </Tabs>
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