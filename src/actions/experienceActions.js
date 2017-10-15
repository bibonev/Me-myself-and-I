import * as types from './actionTypes';

let education = [
    {
        name: 'Primary School "Prof. Ph.D. Asen Zlatarov"',
        image: 'asen_zlatarov.jpg',
        durationPlace: '(September 2002 - July 2010) - 8 yrs • Parvomay, Plovdiv, Bulgaria',
        textBefore: 'Graduated with a diploma of primary education - 6.0/6.0',
        points: [],
        textAfter: ''
    }, {
        name: 'Math High School "Acad. Kiril Popov"',
        image: 'omg_plovdiv.jpg',
        durationPlace: '(September 2010 - July 2015) - 5 yrs • Plovdiv, Bulgaria',
        textBefore: 'Graduated with a diploma of secondary education from System Programming path - 5' +
                '.93/6.00',
        points: [],
        textAfter: ''
    }, {
        name: 'University of Birmingham',
        image: 'uni_birmingham.png',
        durationPlace: '(September 2002 - July 2010) - 8 yrs • Parvomay, Plovdiv, Bulgaria',
        textBefore: 'Studying Computer Science with a year in the industry',
        points: [
            'Year 1 - First Class Honours', 'Year 2 - First Class Honours', 'Year 3 - Placement Year at IBM'
        ],
        textAfter: ''
    }
];

let comercial = [
    {
        name: 'Software Developer',
        image: 'contact_group.jpeg',
        durationPlace: 'Contact Group • (Jun 2016 - Mar 2017) - 11 mos • Birmingham, United Kingdom',
        textBefore: "After my first year at the university, I started my first summer internship by j" +
                "oining the Contact Group. I worked on the AdminTool, LookedAfterCall and CallPar" +
                "ents products as part of a SCRUM team. My job included:",
        points: [
            'creating pages using React and Redux, HTML and CSS', 'writing rest apis using C#, SQL and SQL Management Studio', 'writing unit tests for the rest apis and front-end JavaScript tests using NSubst' +
                    'itute, Mock and Enzyme',
            'fixing bugs',
            'reviewing pull requests',
            "presenting interesting topics during lunch 'n' learns"
        ],
        textAfter: "After I completed successfully my summer internship, I was offered an extension " +
                "as a part-time job that I happily accepted and enjoyed during my second year at " +
                "the university. I did learn a lot about web development, and in particular about" +
                " ASP.NET MVC, Dependency Injections, React and Redux"
    }, {
        name: "Software Engineer",
        image: 'IBM.jpg',
        durationPlace: 'IBM • (Jun 2017 - Jun 2018 (expected) ) - 1 year • Hursley, Winchster, United Ki' +
                'ngdom',
        textBefore: 'I am currently working for IBM in the Product Transformation Center department a' +
                's part of a SCRUM team. I am working currently on a varieties of analysing, repo' +
                'rt and content presentation tools. My job includes:',
        points: [
            'creating pages using Angular 2, HTML, CSS and jQuery',
            'writing backend features using Java, Java Spark, Node and PHP',
            'writing unit, functional and acceptance tests for both backend and front end',
            'fixing bugs',
            'using Gradle and Maven to configure execution tasks',
            'using Docker, Kubernetes, Travis CL, Jenkins for the deployment',
            'reviewing pull requests',
            "presenting interesting topics during lunch 'n' learns"
        ],
        textAfter: ''
    }
];

let volunteering = [
    {
        name: 'Assistant at Laboratory of Robotics, Mechanics and Telemechanics',
        image: 'plovdiv_university.jpg',
        durationPlace: 'Plovdiv University • (May 2012 - May 2015) - 3 yrs • Plovdiv, Bulgaria',
        textBefore: "Being an assistant in the laboratory gave me a lot of experience in researching," +
                " developing and debugging. I learned a lot about graphics, in particular OpenGL " +
                "and DirectX (XNA). Also, I have implemented many algorithms in the area of 2D/3D" +
                " image processing and point cloud handling using C/C++. Moreover, I used Kinect " +
                "and other sensors, such as Arduino and MPU6050 in order to scan environments and" +
                " process the gathered data. During my time in the laboratory I have developed tw" +
                "o projects in this field in collaboration with the head assistant professor, PhD" +
                " A. Penev.",
        points: [],
        textAfter: ''
    }, {
        name: 'Teaching lower grade students programming',
        image: 'omg_plovdiv.jpg',
        durationPlace: '(Oct 2011 – Apr 2015) - 3 yrs 7 mos • Math High School "Acad. Kiril Popov"',
        textBefore: "Me and two of my classmates were teaching lower grade students programming - C#," +
                " Java and C++. Most of the students attended national competitions and received " +
                "recognition for their work.",
        points: [],
        textAfter: ''
    }
];

export function showEducation() {
    return ({type: types.SHOW_EDUCATION, education: education});
}

export function showComercial() {
    return ({type: types.SHOW_COMERCIAL, comercial: comercial});
}

export function showVolunteering() {
    return ({type: types.SHOW_VOLUNTEERING, volunteering: volunteering});
}

export function checkExperience(technologies) {
    let count = 0;

    comercial.forEach(function (com) {
        technologies
            .forEach(function (tech) {
                com
                    .points
                    .forEach(function (point) {
                        point
                            .split(" ")
                            .forEach(function (p) {
                                if (p.replace(',', '').toLowerCase().includes(tech)) {
                                    if (p.replace(',', '').toLowerCase() !== tech && p.replace(',', '').toLowerCase() === 'javascript') {
                                        count += 0;
                                    } else {
                                        count += 1;
                                    }
                                }
                            }, this);
                    }, this);

                com
                    .textBefore
                    .split(" ")
                    .forEach(function (text) {
                        if (text.replace(',', '').toLowerCase().includes(tech)) {
                            if (text.replace(',', '').toLowerCase() !== tech && text.replace(',', '').toLowerCase() === 'javascript') {
                                count += 0;
                            } else {
                                count += 1;
                            }
                        }
                    }, this);

                com
                    .textAfter
                    .split(" ")
                    .forEach(function (text) {
                        if (text.replace(',', '').toLowerCase().includes(tech)) {
                            if (text.replace(',', '').toLowerCase() !== tech && text.replace(',', '').toLowerCase() === 'javascript') {
                                count += 0;
                            } else {
                                count += 1;
                            }
                        }
                    }, this);

            }, this);
    }, this);

    volunteering.forEach(function (vol) {
        technologies
            .forEach(function (tech) {
                vol
                    .textBefore
                    .split(" ")
                    .forEach(function (text) {
                        if (text.replace(',', '').toLowerCase().includes(tech)) {
                            if (text.replace(',', '').toLowerCase() !== tech && text.replace(',', '').toLowerCase() === 'javascript') {
                                count += 0;
                            } else {
                                count += 1;
                            }
                        }
                    }, this);

            }, this);
    }, this);

    return ({type: types.CHECK_EXPERIENCE, countExperience: count});
}