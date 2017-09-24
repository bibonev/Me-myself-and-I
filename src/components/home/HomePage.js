import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            open: true
        };
        this.handleClick = this
            .handleClick
            .bind(this);
    }

    handleClick(e) {
        this.setState({open: true});
    }

    render() {
        const style = {
            card: {
                margin: "0 0 0 300px"
            }
        };
        return (
            <div>
                <Card style={style.card}>
                    <CardHeader
                        title="Without Avatar"
                        subtitle="Subtitle"
                        actAsExpander={true}
                        showExpandableButton={true}/>
                    <CardActions>
                        <FlatButton label="Action1"/>
                        <FlatButton label="Action2"/>
                    </CardActions>
                    <CardText expandable={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium
                        massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum
                        sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris,
                        mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card>
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