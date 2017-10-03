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
                            return (
                                <GridCard
                                    style={{
                                    margin: '20px 0 0 50px'
                                }}
                                    textStyle={{
                                    color: 'black',
                                    margin: '10px 10px 10px 30px'
                                }}
                                    title={feedback.author}
                                    text={feedback.text}
                                    avatar={feedback.image}
                                    linkedin={feedback.linkedin}
                                    date={feedback.date}
                                    height={"400px"}
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