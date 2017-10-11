import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hobbiesActions from '../../actions/hobbiesActions';

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

import Pagination from 'material-ui-pagination';

class HobbiesPage extends React.Component {

    constructor() {
        super();

        this.state = {
            totalPages: 6,
            displayPages: 4,
            currentPage: 1
        };
    }

    componentWillMount() {
        this
            .props
            .actions
            .showHobbies();
    }

    onChangePage(currentPage) {
        this.setState({currentPage});
    }

    render() {
        return (
            <div>
                {this
                    .props
                    .hobbies
                    .map(hobby => {
                        const {currentPage} = this.state;
                        if (hobby.page == currentPage) 
                            return (
                                <Card
                                    style={{
                                    height: "670px",
                                    width: "550px",
                                    margin: "10px auto",
                                    padding: "30px"
                                }}>
                                    <CardMedia>
                                        <img
                                            style={{
                                            height: "400px",
                                            width: "600px"
                                        }}
                                            src={require("../../../assets/" + hobby.image)}
                                            alt=""/>
                                    </CardMedia>
                                    <CardTitle title={hobby.name}/>
                                    <CardText
                                        style={{
                                        overflow: 'auto',
                                        textAlign: 'justify'
                                    }}>
                                        {hobby.text}
                                    </CardText>
                                </Card>
                            );
                        }
                    )}
                <br/>
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

HobbiesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    hobbies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {hobbies: state.hobbies};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(hobbiesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HobbiesPage);