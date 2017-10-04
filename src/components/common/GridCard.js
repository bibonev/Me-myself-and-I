import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
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
                    height: this.props.height
                        ? this.props.height
                        : '300px',
                    backgroundColor: 'white',
                    position: 'relative'
                }}>
                    <div
                        style={{
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}>
                        {this.props.avatar && <IconButton
                            href={this.props.linkedin}
                            target="_blank"
                            tooltip="View Linkedin"
                            touch={false}
                            tooltipPosition="top-right">
                            <Avatar src={this.props.avatar}/>
                        </IconButton>}
                        <h1 style={this.props.textStyle}>{this.props.title}</h1>
                    </div>
                    <Divider/> {this.props.job && <div>
                        <p
                            style={{
                            padding: "10px 0px 0px 0px",
                            textAlign: 'justify',
                            fontStyle: 'italic'
                        }}>{this.props.job}</p>
                        <Divider/>
                    </div>}
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
                    {this.props.date && <div>
                        <Divider/>
                        <p
                            style={{
                            fontStyle: 'italic',
                            fontSize: '12px'
                        }}>{this.props.date}</p>
                    </div>}

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
    job: PropTypes.string,
    height: PropTypes.string,
    avatar: PropTypes.string,
    linkedin: PropTypes.string,
    date: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    actions: PropTypes.array,
    chips: PropTypes.array,
    blockquote: PropTypes.bool
};

export default GridCard;