import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as experienceActions from '../../actions/experienceActions';

import {Step, Stepper, StepButton, StepLabel, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';

import Highlighter from 'react-highlight-words';

class ExperiencePage extends React.Component {

    constructor() {
        super();
        this.state = {
            stepIndexEducation: 0,
            stepIndexComercial: 0,
            stepIndexVolunteering: 0,
            value: 'comercial'
        };
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    componentWillMount() {
        this
            .props
            .actions
            .showEducation();
        this
            .props
            .actions
            .showComercial();
        this
            .props
            .actions
            .showVolunteering();
    }

    handleChange(value) {
        this.setState({value: value});
    };

    render() {
        const {stepIndexEducation, stepIndexComercial, stepIndexVolunteering, value} = this.state;

        const style = {
            unhighlightStyle: {
                color: '#535A5A',
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '24px',
                margin: '0 0 14px',
                textAlign: 'justify'
            }
        }
        return (
            <div>
                <Tabs
                    tabItemContainerStyle={{
                    backgroundColor: "#1D364D"
                }}
                    value={value}
                    onChange={(value) => this.handleChange(value)}>
                    <Tab label="Education" value="education">
                        <div
                            style={{
                            maxWidth: 980,
                            maxHeight: 800,
                            margin: 'auto',
                            padding: '20px'
                        }}>
                            <Stepper activeStep={stepIndexEducation} orientation="vertical" linear={false}>
                                {this
                                    .props
                                    .experience
                                    .education
                                    .map((stage, index) => {
                                        return (
                                            <Step>
                                                <StepButton
                                                    icon={< Avatar src = {
                                                    require("../../../assets/" + stage.image)
                                                } />}
                                                    style={{
                                                    fontSize: '25px'
                                                }}
                                                    onClick={() => this.setState({stepIndexEducation: index})}>{stage.name}</StepButton>
                                                <StepContent>
                                                    <br/>
                                                    <Divider/>
                                                    <br/>
                                                    <div
                                                        style={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        margin: "0 auto"
                                                    }}>
                                                        <p
                                                            style={{
                                                            fontStyle: 'italic'
                                                        }}>{stage.durationPlace}</p>
                                                    </div>
                                                    <Divider/>
                                                    <br/>
                                                    <p>
                                                        {stage.textBefore}
                                                    </p>
                                                    {stage
                                                        .points
                                                        .map(point => {
                                                            return (
                                                                <p>{point}</p>
                                                            );
                                                        })}
                                                    {stage.textAfter !== '' && (
                                                        <p>{stage.textAfter}</p>
                                                    )}
                                                    <Divider/>
                                                </StepContent>
                                            </Step>
                                        );
                                    })}
                            </Stepper>
                        </div>
                    </Tab>
                    <Tab label="Work" value="comercial">
                        <div
                            style={{
                            maxWidth: 980,
                            maxHeight: 800,
                            margin: 'auto',
                            padding: '20px'
                        }}>
                            <Stepper activeStep={stepIndexComercial} orientation="vertical" linear={false}>
                                {this
                                    .props
                                    .experience
                                    .comercial
                                    .map((stage, index) => {
                                        return (
                                            <Step>
                                                <StepButton
                                                    icon={< Avatar src = {
                                                    require("../../../assets/" + stage.image)
                                                } />}
                                                    style={{
                                                    fontSize: '25px'
                                                }}
                                                    onClick={() => this.setState({stepIndexComercial: index})}>{stage.name}</StepButton>
                                                <StepContent>
                                                    <br/>
                                                    <Divider/>
                                                    <br/>
                                                    <div
                                                        style={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        margin: "0 auto"
                                                    }}>
                                                        <p
                                                            style={{
                                                            fontStyle: 'italic'
                                                        }}>{stage.durationPlace}</p>
                                                    </div>
                                                    <Divider/>
                                                    <br/>
                                                    <Highlighter
                                                        autoEscape={true}
                                                        unhighlightStyle={style.unhighlightStyle}
                                                        searchWords={this.props.technologies}
                                                        textToHighlight={stage.textBefore}/>
                                                    <ul>
                                                        {stage
                                                            .points
                                                            .map(point => {
                                                                return (
                                                                    <li>
                                                                        <Highlighter
                                                                            autoEscape={true}
                                                                            unhighlightStyle={style.unhighlightStyle}
                                                                            searchWords={this.props.technologies}
                                                                            textToHighlight={point}/>
                                                                    </li>
                                                                );
                                                            })}
                                                    </ul>
                                                    {stage.textAfter !== '' && (<Highlighter
                                                        autoEscape={true}
                                                        unhighlightStyle={style.unhighlightStyle}
                                                        searchWords={this.props.technologies}
                                                        textToHighlight={stage.textAfter}/>)}
                                                    <Divider/>
                                                </StepContent>
                                            </Step>
                                        );
                                    })}
                            </Stepper>
                        </div>
                    </Tab>
                    <Tab label="Volunteering" value="volunteering">
                        <div
                            style={{
                            maxWidth: 980,
                            maxHeight: 800,
                            margin: 'auto',
                            padding: '20px'
                        }}>
                            <Stepper
                                activeStep={stepIndexVolunteering}
                                orientation="vertical"
                                linear={false}>
                                {this
                                    .props
                                    .experience
                                    .volunteering
                                    .map((stage, index) => {
                                        return (
                                            <Step>
                                                <StepButton
                                                    icon={< Avatar src = {
                                                    require("../../../assets/" + stage.image)
                                                } />}
                                                    style={{
                                                    fontSize: '25px'
                                                }}
                                                    onClick={() => this.setState({stepIndexVolunteering: index})}>{stage.name}</StepButton>
                                                <StepContent>
                                                    <br/>
                                                    <Divider/>
                                                    <br/>
                                                    <div
                                                        style={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        margin: "0 auto"
                                                    }}>
                                                        <p
                                                            style={{
                                                            fontStyle: 'italic'
                                                        }}>{stage.durationPlace}</p>
                                                    </div>
                                                    <Divider/>
                                                    <br/>
                                                    <Highlighter
                                                        autoEscape={true}
                                                        unhighlightStyle={style.unhighlightStyle}
                                                        searchWords={this.props.technologies}
                                                        textToHighlight={stage.textBefore}/> {stage
                                                        .points
                                                        .map(point => {
                                                            return (<Highlighter
                                                                autoEscape={true}
                                                                unhighlightStyle={style.unhighlightStyle}
                                                                searchWords={this.props.technologies}
                                                                textToHighlight={point}/>);
                                                        })}
                                                    {stage.textAfter !== '' && (<Highlighter
                                                        autoEscape={true}
                                                        unhighlightStyle={style.unhighlightStyle}
                                                        searchWords={this.props.technologies}
                                                        textToHighlight={stage.textAfter}/>)}
                                                    <Divider/>
                                                </StepContent>
                                            </Step>
                                        );
                                    })}
                            </Stepper>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

ExperiencePage.propTypes = {
    actions: PropTypes.object.isRequired,
    experience: PropTypes.object.isRequired,
    technologies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {experience: state.experience, technologies: state.search};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(experienceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperiencePage);