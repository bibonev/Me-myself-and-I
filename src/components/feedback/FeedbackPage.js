import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as feedbackActions from '../../actions/feedbackActions';

import GridCard from '../common/GridCard';
import IconButton from 'material-ui/IconButton';

import Pagination from 'material-ui-pagination';

class FeedbackPage extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this
            .props
            .actions
            .showFeedback();
    }

    render() {
        return (
            <div>
                <div
                    style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    {this
                        .props
                        .feedbacks
                        .map(feedback => {
                            console.log("Feedback: ", feedback);
                            return (
                                <GridCard
                                    style={{
                                    margin: '20px 0 0 50px'
                                }}
                                    textStyle={{
                                    color: 'black',
                                    margin: "0 auto",
                                    width: "30em"
                                }}
                                    title={feedback.author}
                                    text={feedback.text}
                                    blockquote={true}></GridCard>
                            );
                        })}
                </div>
                <br/>
            </div>
        );
    }
}

FeedbackPage.propTypes = {
    actions: PropTypes.object.isRequired,
    feedbacks: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {feedbacks: state.feedbacks};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(feedbackActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackPage);