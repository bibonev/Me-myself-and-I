import React from 'react';
import {Step, Stepper, StepLabel, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

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
                maxWidth: 980,
                maxHeight: 800,
                margin: 'auto'
            }}>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel
                            icon={< Avatar src = {
                            require("../../../assets/plovdiv_university.jpg")
                        } />}
                            style={{
                            fontSize: '34px'
                        }}>Assistant at Laboratory of Robotics, Mechanics and Telemechanics.</StepLabel>
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
                                }}>Plovdiv University • &nbsp;</p>
                                <p
                                    style={{
                                    fontStyle: 'italic'
                                }}>(May 2012 - May 2015) - 3 yrs • &nbsp;</p>
                                <p
                                    style={{
                                    fontStyle: 'italic'
                                }}>Plovdiv, Bulgaria</p>
                            </div>
                            <Divider/>
                            <br/>
                            <p>
                                Being an assistant in the laboratory gave me a lot of experience in researching,
                                developing and debugging. I learned a lot about graphics, in particular OpenGL
                                and DirectX (XNA). Also, I have implemented many algorithms in the area of 2D/3D
                                                                                                                                image processing and point cloud handling using C/C++. Moreover, I used Kinect
                                                                                                                                and other sensors, such as Arduino and MPU6050 in order to scan environments and
                                                                                                                                process the gathered data. During my time in the laboratory I have developed two
                                                                                                                                projects in this field in collaboration with the head assistant professor, PhD
                                                                                                                                A. Penev.
                                                                                                                            </p>
                                                                                                                            <Divider/> {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel
                            icon={< Avatar src = {
                            require("../../../assets/contact_group.jpeg")
                        } />}
                            style={{
                            fontSize: '34px'
                        }}>Software Developer</StepLabel>
                        <StepContent>
                            <p>An ad group contains one or more ads which target a shared set of keywords.</p>
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel
                            icon={< Avatar src = {
                            require("../../../assets/ibm.jpg")
                        } />}>Software Engineer</StepLabel>
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
            </div>
        );
    }
}

export default ExperiencePage;