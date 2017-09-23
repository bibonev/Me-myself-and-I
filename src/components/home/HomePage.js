import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class HomePage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}

HomePage.propTypes = {
    // PROPS-ACTIONS: PropTypes.object.isRequired, PROPS: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    //return {<PROPS>: state.<STATE-PROPS>};
}

function mapDispatchToProps(dispatch) {
    // return {     PROPS-ACTIONS: bindActionCreators(homeActions, dispatch) };
}

//export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default HomePage;