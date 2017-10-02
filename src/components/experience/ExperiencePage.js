import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Step, Stepper, StepLabel, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';
import * as experienceActions from '../../actions/experienceActions';

class ExperiencePage extends React.Component {

    constructor() {
        super();
        this.state = {
            finished: false,
            stepIndex: 0,
            value: 'comercial',
        };
        this.handleChange = this.handleChange.bind(this);
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
        this.setState({
          value: value,
        });
    };

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
        const {finished, stepIndex, value} = this.state;

        console.log("EDUCATION: ", this.props.experience.education);
        console.log("COMERCIAL: ", this.props.experience.comercial);
        console.log("VOLUNTEERING: ", this.props.experience.volunteering);

        return (
            <div>
                <Tabs
                value={value}
                onChange={(value) => this.handleChange(value)}
                >
                <Tab label="Education" value="education">
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
                                        require("../../../assets/asen_zlatarov.jpg")
                                    } />}
                                        style={{
                                        fontSize: '25px'
                                    }}>Primary School "Prof. Ph.D. Asen Zlatarov"</StepLabel>
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
                                                fontStyle: 'italic',
                                            }}>(September 2002 - July 2010) - 8 yrs • Parvomay, Plovdiv, Bulgaria</p>
                                        </div>
                                        <Divider/>
                                        <br/>
                                        <p>
                                            Graduated with a diploma of primary education - 6.0/6.0
                                        </p>
                                        <Divider/> {this.renderStepActions(0)}
                                    </StepContent>
                                </Step>
                                <Step>
                                    <StepLabel
                                        icon={< Avatar src = {
                                        require("../../../assets/omg_plovdiv.jpg")
                                    } />}
                                        style={{
                                        fontSize: '25px'
                                    }}>Math High School "Acad. Kiril Popov"</StepLabel>
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
                                                fontStyle: 'italic',
                                            }}>(September 2010 - July 2015) - 5 yrs • Plovdiv, Bulgaria</p>
                                        </div>
                                        <Divider/>
                                        <br/>
                                        <p>Graduated with a diploma of secondary education from System Programming path- 5.93/6.00</p>
                                            <Divider/> 
                                        {this.renderStepActions(1)}
                                    </StepContent>
                                </Step>
                                <Step>
                                    <StepLabel
                                        icon={< Avatar src = {
                                        require("../../../assets/uni_birmingham.png")
                                    } />}
                                    style={{
                                        fontSize: '25px'
                                    }}>University of Birmingham</StepLabel>
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
                                                fontStyle: 'italic',
                                            }}>(September 2015 - July 2019 (expected) ) - 4 yrs (including placement year) • Birmingham, United Kingdom</p>
                                        </div>
                                        <Divider/>
                                        <br/>
                                        <p>
                                        Year 1 - First Class Honours</p>
                                        <p>Year 2 - First Class Honours
                                        </p>
                                        <p>Year 3 - Placement Year at IBM
                                        </p>
                                        <Divider/> 
                                        {this.renderStepActions(2)}
                                    </StepContent>
                                </Step>
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
                            <Stepper activeStep={stepIndex} orientation="vertical">
                                <Step>
                                    <StepLabel
                                        icon={< Avatar src = {
                                        require("../../../assets/plovdiv_university.jpg")
                                    } />}
                                        style={{
                                        fontSize: '25px'
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
                                                fontStyle: 'italic',
                                            }}>Plovdiv University • (May 2012 - May 2015) - 3 yrs • Plovdiv, Bulgaria</p>
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
                                        fontSize: '25px'
                                    }}>Software Developer</StepLabel>
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
                                                fontStyle: 'italic',
                                            }}>Contact Group • (Jun 2016 - Mar 2017) - 11 mos • Birmingham, United Kingdom</p>
                                        </div>
                                        <Divider/>
                                        <br/>
                                        <p>After my first year at the university, I started my first summer internship by joining the Contact Group. I worked on the AdminTool, LookedAfterCall and CallParents products as part of a SCRUM team. 
                                            My job included:
                                            <ul>
                                                <li>creating pages using React and Redux, HTML and CSS</li>
                                                <li>writing rest apis using C#, SQL and SQL Management Studio</li>
                                                <li>writing unit tests for the rest apis and front-end Javascript tests using NSubstitute, Mock and Enzyme</li>
                                                <li>fixing bugs</li>
                                                <li>reviewing pull requests</li>
                                                <li>presenting interesting topics during lunch 'n' learns</li>
                                            </ul>
                                            After I completed successfully my summer internship, I was offered an extension as a part-time job that I happily accepted and enjoyed during my second year at the university.
                                            I did learn a lot about web development, and in particular about ASP.NET MVC, Dependency Injections, React and Redux</p>
                                            <Divider/> 
                                        {this.renderStepActions(1)}
                                    </StepContent>
                                </Step>
                                <Step>
                                    <StepLabel
                                        icon={< Avatar src = {
                                        require("../../../assets/ibm.jpg")
                                    } />}
                                    style={{
                                        fontSize: '25px'
                                    }}>Software Engineer</StepLabel>
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
                                                fontStyle: 'italic',
                                            }}>IBM • (Jun 2017 - Jun 2018 (expected) ) - 1 year • Hursley, Winchster, United Kingdom</p>
                                        </div>
                                        <Divider/>
                                        <br/>
                                        <p>I am currently working for IBM in the Product Transformation Center department as part of a SCRUM team. I am working currently on a varieties of analysing, report and content presentation tools. 
                                        My job includes:
                                        <ul>
                                            <li>creating pages using Angular 2, HTML, CSS and jQuery</li>
                                            <li>writing backend features using Java, Java Spark, Node and PHP</li>
                                            <li>writing unit, functional and acceptance tests for both backend and front end</li>
                                            <li>fixing bugs</li>
                                            <li>using Gradle and Maven to configure execution tasks</li>
                                            <li>using Docker, Kubernetes, Travis CL, Jenkins for the deployment</li>
                                            <li>reviewing pull requests</li>
                                            <li>presenting interesting topics during lunch 'n' learns</li>
                                        </ul>
                                        </p>
                                        <Divider/> 
                                        {this.renderStepActions(2)}
                                    </StepContent>
                                </Step>
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
                    <Stepper activeStep={stepIndex} orientation="vertical">
                        <Step>
                            <StepLabel
                                icon={< Avatar src = {
                                require("../../../assets/omg_plovdiv.jpg")
                            } />}
                                style={{
                                fontSize: '25px'
                            }}>Teaching lower grade students programming</StepLabel>
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
                                        fontStyle: 'italic',
                                    }}>(Oct 2011 – Apr 2015) - 3 yrs 7 mos • Math High School "Acad. Kiril Popov"</p>
                                </div>
                                <Divider/>
                                <br/>
                                <p>
                                    Me and two of my classmates were teaching lower grade students programming - C#, Java and C++. Most of the students attended national competitions and received recognition for their work.
                                </p>
                                <Divider/> {this.renderStepActions(0)}
                            </StepContent>
                        </Step>
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
    console.log("STATE: ", state);
    return {experience: state.experience};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(experienceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperiencePage);