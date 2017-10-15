import React from 'react';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Highlighter from 'react-highlight-words';

class HomePage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Who am I?</h1>
                <Divider/>
                <h2 style={{
                    margin: '10px'
                }}>How it all started...</h2>
                <Divider/>
                <br/>
                <div>
                    <p>
                        I was 12 years old when I started studying PowerPoint at school. My schoolmates
                        were really impressed by the images and animations, but not me. I was
                        interestesd in the macros I could create with some VB skills, those macros that
                        were actually creating the images and animations. I started coding in Flash when
                        I was 14 years old. Then, I created my first project, consisting of interactive
                        tests and games, with which I have won the national olympiad of Information
                        Technology in Bulgaria. I took part in the conference of&nbsp;
                        <q>The Union of Mathematicians in Bulagira</q>. where I was the youngest
                        participant and as a result of my performace, I was invited to take part in a
                        summer educational camp, having the chance to learn the most recent technologies
                        at that time.
                    </p>
                    <p>
                        <span>
                            The same year I was accepted in the System Programming class of&nbsp;
                            <q>High School of Mathematics Acad. Kiril Popov, Plovdiv</q>. The motivational
                            environment made me learn a variety of new programming languges and technologies
                            like</span>
                        <Highlighter
                            searchWords={this.props.technologies}
                            textToHighlight={" C#, WPF, XNA, C++"}/>
                        <span>
                            , etc. Eventually, I made it to the laboratory of Robotics, Mechanics and
                            Telemechanics at the local university. I met Professor, PhD. Alexander Penev who
                            became my mentor and we started developing new projects with which I won many
                            national and international competitions.
                        </span>
                    </p>
                </div>
                <br/>
                <Divider/>
                <h2 style={{
                    margin: '10px'
                }}>Follow up...</h2>
                <Divider/>
                <br/>
                <div>
                    <p>My high school graduation was coming and I had to chooce my next destination,
                        I had to answer to the question&nbsp;
                        <q>Where would I enhance my skills and gain more knowledge?</q>&nbsp; I chose
                        University of Birminham as the right place for me due to the combination of many
                        things - extremely educated lecturers, cources based on the new trends in
                        computer science, motivational environment and very nice balance of location and
                        price for the city. I would recommend the university to anyone who finds the
                        above reasons as the key to success.
                    </p>
                    <p>The first year at the university was extremely intense - I had lectures
                        couple of times per day, with exercises after each lecture and a deadline for
                        them untill the end of the week. However, I met some amazing people and new
                        friends who helped me forget about the pressure that most of our classmates had.
                        Also, I managed to find once per month time for going to a hackathon. I took
                        part in many of the local ones and some others around the region. In the end of
                        my first year, I joined a local company in Birmingham named&nbsp;
                        <q>The Contact Group</q>&nbsp; for a summer internship, which was one of the
                        best things that has ever happened to me.</p>
                    <p>
                        The second year started with an intense couple of months when I had to
                        multi-task between university, part-time job (I was offered the amazing
                        opportunity to continue working for the Contact Group) and having interviews for
                        the industrial year that followed. I had offers from many marvelous companies to
                        join their teams for the above mentioned year but I chose the one that would
                        give me the next step in my career - IBM. I joined them in the end of my second
                        year of the university which I finished with First Class Honours.
                    </p>
                </div>
                <br/>
                <Divider/>
                <h2 style={{
                    margin: '10px'
                }}>At the moment...</h2>
                <Divider/>
                <br/>
                <div>
                    <p>The department I am part of, at IBM, is called Platform Transformation
                        Center. I am assigned to the development team and we develop both internal and
                        external products for internal and external clients. The department is mainly
                        focussed on clearance process of tools/comapanies/teams that IBM enquire. Also,
                        I am part of some other teams as a give back project, such as Living Lab, which
                        uses IoT technologies to keep track of some of the measurements in IBM such as
                        temperature, humidity, sound, etc. Moreoever, I have recently joined a patent
                        group which I hope to help me improve my creativity skills even more. As I am
                        currently in the beginning of my placement, I cannot say more, but I will update
                        the information once it is finished. :)
                    </p>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    technologies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {technologies: state.search};
}

export default connect(mapStateToProps)(HomePage);