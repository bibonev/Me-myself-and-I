import React from 'react';
import {Step, Stepper, StepLabel, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

class ExperiencePage extends React.Component {

    constructor() {
        super();
        this.state = {
            finished: false,
            stepIndex: 0
        };
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

    handleNext() {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2
        });
    };

    handlePrev() {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({
                stepIndex: stepIndex - 1
            });
        }
    };

    renderStepActions(step) {
        const {stepIndex} = this.state;

        if (stepIndex == 2) {
            return (
                <div style={{
                    margin: '12px 0'
                }}>
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}/>
                </div>
            );
        } else {
            return (
                <div style={{
                    margin: '12px 0'
                }}>
                    <RaisedButton
                        label={'Next'}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        primary={true}
                        onClick={this.handleNext}
                        style={{
                        marginRight: 12
                    }}/> {step > 0 && (<FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}/>)}
                </div>
            );
        }
    }

    render() {
        const {finished, stepIndex} = this.state;

        return (
            <div
                style={{
                maxWidth: 480,
                maxHeight: 800,
                margin: 'auto'
            }}>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel
                            icon={< Avatar src = {
                            require("../../../assets/plovdiv_university.jpg")
                        } />}>Assistant at Plovdiv University</StepLabel>
                        <StepContent>
                            <p>
                                For each ad campaign that you create, you can control how much you're willing to
                                spend on clicks and conversions, which networks and geographical locations you
                                want your ads to show on, and more.
                            </p>
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel
                            icon={< Avatar src = {
                            require("../../../assets/contact_group.jpeg")
                        } />}>Software Developer at the Contact Group</StepLabel>
                        <StepContent>
                            <p>An ad group contains one or more ads which target a shared set of keywords.</p>
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel
                            icon={< Avatar src = {
                            require("../../../assets/ibm.jpg")
                        } />}>Software Engineer at IBM</StepLabel>
                        <StepContent>
                            <p>
                                Try out different ad text to see what brings in the most customers, and learn
                                how to enhance your ads using features like ad extensions. If you run into any
                                problems with your ads, find out how to tell if they're running and how to
                                resolve approval issues.
                            </p>
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                </Stepper>
                {finished && (
                    <p
                        style={{
                        margin: '20px 0',
                        textAlign: 'center'
                    }}>
                        <a
                            href="#"
                            onClick={(event) => {
                            event.preventDefault();
                            this.setState({stepIndex: 0, finished: false});
                        }}>
                            Click here
                        </a>
                        to reset the example.
                    </p>
                )}
            </div>
        );
    }
}

export default ExperiencePage;