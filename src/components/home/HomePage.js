import React from 'react';
import Divider from 'material-ui/Divider';

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
                    <p>I was 12 years old when I started studying PowerPoint at school. My
                        schoolmates were really impressed by the images and anumations, but not me. I
                        was interestesd in the macros I could create with some VB skills, those macros
                        that were actually creating the images and animations. I started coding in Flash
                        when I was 14 years old. Then, I created my first project, consisted of
                        interactive tests and games, with which I have won the national olympiad of
                        Information Technology in Bulgaria. I took part in the conference of&nbsp;
                        <q>The Union of Mathematicians in Bulagira</q>. I was the youngest participent
                        there and as a result of my performace, I was invited to take part in a summer
                        educational camp, having the chance to learn the most recent technologies at
                        that time.
                    </p>
                    <p>
                        The same year I was accepted in the System Programming class of&nbsp;
                        <q>High School of Mathematics Acad. Kiril Popov, Plovdiv</q>. The motivational
                        environment made me learn lots of new programming languges and technologies like
                        C#, WPF, XNA, C++, etc. Eventually, I made it to the labaratory of Robotics,
                        Mechanics and Telemechanics in the local university. I met Professor, PhD.
                        Alexander Penev who became my mentor and we started developing new projects with
                        which I won many national and international competitions.
                    </p>
                </div>
                <br/>
                <Divider/>
                <h2 style={{
                    margin: '10px'
                }}>How it continued...</h2>
                <Divider/>
                <br/>
                <div>
                    <p>My high school graduation was coming and I had to chooce my next
                        destionation, I had to answer to the question&nbsp;
                        <q>Where would I enhance my skills and gain more knowledge?</q>&nbsp; I chose
                        University of Birminham as the right place for me due to the combination of many
                        things - extremely educated lecturers, cources based on the new trends in
                        computer science, motivational environment and very nice balance of location and
                        price for the city. I would recommend the university to anyone who finds the
                        above reasons as the key to the success.
                    </p>
                    <p>The first year at the university was extremely intense - I had lectures
                        couple of times per day, with exercies after each lecture and a deadline for
                        them untill the end of the week. However, I met some amazing people and now
                        friends who helped me forget about the pressure that most of our classmates had.
                        Also, I managed to find once per month time for going to a hackathon. I took
                        part in many of the local ones and some others around the region. In the end of
                        my first year, I joined a local comapny in Bimirnhgam named&nbsp;
                        <q>The Contact Group</q>&nbsp; for a summer internship, which was one of the
                        best things that has ever happened to me.</p>
                    <p>
                        The second year started with an intense couple of months when I had to
                        multi-task between universiy, part-time job (I was offered the amazing
                        opportunity to continue working for the Contact Group) and having interviews for
                        the industrial year that followed. I had offers from many marvelous companies to
                        join their teams for the above mentioned year but I chose the one that would
                        give me the next step in my career - IBM. I joined them in the end of my second
                        year at uni which I finished with First Class Hounours.
                    </p>
                </div>
                <br/>
                <Divider/>
                <h2 style={{
                    margin: '10px'
                }}>How it is now...</h2>
                <Divider/>
                <br/>
                <div>
                    <p>The department I am part of, at IBM, is called Platform Transformation
                        Center. I am assigned to the development team and we develop both internal and
                        external products for internal and external clients. The department is manly
                        foccussed on clearance process of tools/comapanies/teams that IBM enquire. Also,
                        I am part of some other teams as a give back projects, such as Living Lab, which
                        uses IoT technologies to keep track of some of the measurements in IBM such as
                        temperature, humidity, sound, etc. Moreoever, I have recently joined a patent
                        group which I hope to help me improve my creativy skills even more. As I am
                        currently in the beginning of my placement, I cannot say more, but I will update
                        the information once it is finished. :)
                    </p>
                </div>
            </div>
        );
    }
}

export default HomePage;