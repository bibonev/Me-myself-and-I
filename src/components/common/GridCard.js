import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import {blue300} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import Highlighter from 'react-highlight-words';

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
                                    <div>
                                        <Chip
                                            style={{
                                            margin: "20px 0px 0px 5px"
                                        }}
                                            backgroundColor={"#1D364D"}
                                            labelColor={"white"}>
                                            <Highlighter
                                                autoEscape={true}
                                                searchWords={this.props.technologies}
                                                textToHighlight={chip}/>
                                        </Chip>

                                    </div>
                                );
                            })}
                    </div>
                    <br/> {(this.props.blockquote && this.props.blockquote === true)
                        ? <blockquote>
                                <Highlighter
                                    autoEscape={true}
                                    searchWords={this.props.technologies}
                                    textToHighlight={this.props.text}/>
                            </blockquote>
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
    technologies: PropTypes.array.isRequired,
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

function mapStateToProps(state, ownProps) {
    return {technologies: state.search};
}

export default connect(mapStateToProps)(GridCard);