import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as experienceActions from '../../actions/experienceActions';

import {Step, Stepper, StepLabel, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';

class ExperiencePage extends React.Component {

    constructor() {
        super();
        this.state = {
            stepIndexEducation: 0,
            stepIndexComercial: 0,
            stepIndexVolunteering: 0,
            value: 'education'
        };
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleNext = this
            .handleNext
            .bind(this);
        this.handlePrev = this
            .handlePrev
            .bind(this);
        this.renderStepActions = this
            .renderStepActions
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

    handleNext() {
        const {stepIndexEducation, stepIndexComercial, stepIndexVolunteering, value} = this.state;
        if (value === 'education') {
            this.setState({
                stepIndexEducation: stepIndexEducation + 1
            });
        } else if (value === 'comercial') {
            this.setState({
                stepIndexComercial: stepIndexComercial + 1
            });
        } else if (value === 'volunteering') {
            this.setState({
                stepIndexVolunteering: stepIndexVolunteering + 1
            });
        }
    };

    handlePrev() {
        const {stepIndexEducation, stepIndexComercial, stepIndexVolunteering, value} = this.state;
        if (value === 'education') {
            if (this.state.stepIndexEducation > 0) {
                this.setState({
                    stepIndexEducation: stepIndexEducation - 1
                });
            }
        } else if (value === 'comercial') {
            if (this.state.stepIndexComercial > 0) {
                this.setState({
                    stepIndexComercial: stepIndexComercial - 1
                });
            }
        } else if (value === 'volunteering') {
            if (this.state.stepIndexVolunteering > 0) {
                this.setState({
                    stepIndexVolunteering: stepIndexVolunteering - 1
                });
            }
        }
    };

    renderStepActions(step) {
        return (
            <div style={{
                margin: '12px 0'
            }}>
                {step < 2 && <RaisedButton
                    label={'Next'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onClick={() => this.handleNext()}
                    style={{
                    marginRight: 12
                }}/>}{step > 0 && (<FlatButton
                    label="Back"
                    disabled={step === 0}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    onClick={() => this.handlePrev()}/>)}
            </div>
        );
    }

    render() {
        const {stepIndexEducation, stepIndexComercial, stepIndexVolunteering, value} = this.state;

        return (
            <div>
                <Tabs value={value} onChange={(value) => this.handleChange(value)}>
                    <Tab label="Education" value="education">
                        <div
                            style={{
                            maxWidth: 980,
                            maxHeight: 800,
                            margin: 'auto'
                        }}>
                            <Stepper activeStep={stepIndexEducation} orientation="vertical">
                                {this
                                    .props
                                    .experience
                                    .education
                                    .map((stage, index) => {
                                        return (
                                            <Step>
                                                <StepLabel
                                                    icon={< Avatar src = {
                                                    require("../../../assets/" + stage.image)
                                                } />}
                                                    style={{
                                                    fontSize: '25px'
                                                }}>{stage.name}</StepLabel>
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
                                                    <Divider/> {this.renderStepActions(index, 'education')}
                                                </StepContent>
                                            </Step>
                                        );
                                    })}
                            </Stepper>
                        </div>
                    </Tab>
                    <Tab label="Comercial" value="comercial">
                        <div
                            style={{
                            maxWidth: 980,
                            maxHeight: 800,
                            margin: 'auto'
                        }}>
                            <Stepper activeStep={stepIndexComercial} orientation="vertical">
                                {this
                                    .props
                                    .experience
                                    .comercial
                                    .map((stage, index) => {
                                        return (
                                            <Step>
                                                <StepLabel
                                                    icon={< Avatar src = {
                                                    require("../../../assets/" + stage.image)
                                                } />}
                                                    style={{
                                                    fontSize: '25px'
                                                }}>{stage.name}</StepLabel>
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
                                                    <ul>
                                                        {stage
                                                            .points
                                                            .map(point => {
                                                                return (
                                                                    <li>{point}</li>
                                                                );
                                                            })}
                                                    </ul>
                                                    {stage.textAfter !== '' && (
                                                        <p>{stage.textAfter}</p>
                                                    )}
                                                    <Divider/> {this.renderStepActions(index, 'comercial')}
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
                            margin: 'auto'
                        }}>
                            <Stepper activeStep={stepIndexVolunteering} orientation="vertical">
                                {this
                                    .props
                                    .experience
                                    .volunteering
                                    .map((stage, index) => {
                                        return (
                                            <Step>
                                                <StepLabel
                                                    icon={< Avatar src = {
                                                    require("../../../assets/" + stage.image)
                                                } />}
                                                    style={{
                                                    fontSize: '25px'
                                                }}>{stage.name}</StepLabel>
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
                                                    <Divider/> {this.props.experience.volunteering.length > 1 && this.renderStepActions(index, 'volunteering')}
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
    experience: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {experience: state.experience};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(experienceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperiencePage);