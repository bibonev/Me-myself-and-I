import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Paper from 'material-ui/Paper';

class HomePage extends React.Component {
    constructor() {
        super();
    }

    render() {
        const style = {
            card: {
                margin: "0px 0px 0px 300px"
            },
            textDiv: {
                height: "100vh",
                padding: "40px"
            }
        };
        return (
            <div>
                <Paper style={style.card} zDepth={5} rounded={true}>
                    <div style={style.textDiv}>
                        <h1>Who am I?</h1>
                        <h2>How it all started...</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                            esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?</p>
                        <h2>How it continued...</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                            esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?</p>
                        <h2>How it is now...</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                            esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?</p>
                    </div>
                </Paper>
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