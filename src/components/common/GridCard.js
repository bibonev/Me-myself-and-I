import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import {blue300} from 'material-ui/styles/colors';

class GridCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={this.props.style}>
                <Paper
                    style={{
                    padding: '20px',
                    width: '450px',
                    height: '300px',
                    backgroundColor: 'white',
                    position: 'relative'
                }}>
                    <h1 style={this.props.textStyle}>{this.props.title}</h1>
                    <Divider/>
                    <div
                        style={{
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}>{this.props.chips && this
                            .props
                            .chips
                            .map(chip => {
                                return (
                                    <Chip
                                        style={{
                                        margin: "20px 0px 0px 5px"
                                    }}
                                        backgroundColor={blue300}>
                                        {chip}
                                    </Chip>
                                );
                            })}
                    </div>
                    <br/> {(this.props.blockquote && this.props.blockquote === true)
                        ? <blockquote>{this.props.text}</blockquote>
                        : <p
                            style={{
                            textAlign: 'justify',
                            textJustify: 'inter-word'
                        }}>{this.props.text}</p>}
                    {this.props.actions && this
                        .props
                        .actions
                        .map(action => {
                            return (
                                <div
                                    style={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '0'
                                }}>
                                    {action}
                                </div>
                            );
                        })}
                </Paper>
            </div>
        );
    }
}

GridCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    actions: PropTypes.array,
    chips: PropTypes.array,
    blockquote: PropTypes.bool
};

export default GridCard;