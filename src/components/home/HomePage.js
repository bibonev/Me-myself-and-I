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
                <h1>Who am I?</h1>
                <h2>How it all started...</h2>
                <p>I was at fifth grade when my mum came to me one day and asked me a simple
                    question -
                    <q>Boyan, do you know what IT (Information Technologies) means?</q>
                </p>
                <h2>How it continued...</h2>
                <p>...</p>
                <h2>How it is now...</h2>
                <p>...</p>
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