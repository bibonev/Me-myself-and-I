import * as types from './actionTypes';

export function showProjects() {
    return {
        type: types.SHOW_PROJECTS,
        projects: [
            {
                name: "The Bridge",
                technologies: [
                    'JavaScript',
                    'Python',
                    'Django',
                    'ReactJS',
                    'Redux',
                    'PostgreSQL'
                ],
                text: "Web platform for connecting customers with organisations.",
                url: 'The-Bridge',
                page: 1
            }, {
                name: "NSideView",
                technologies: [
                    'C#', 'C++'
                ],
                text: "The project considers a problem connected with digitization and visualization of" +
                        " three-dimensional real objects, which the user wants to carry over into cybersp" +
                        "ace. Creating, editing and visualization of models, which are received by the 2 " +
                        "web cameras –Logitech c920, are the main aim of “NSideView”. By using the device" +
                        "s the user can digitize the surface of real objects which earlier to be processe" +
                        "d by 3D software.",
                url: 'NSideView',
                page: 1
            }, {
                name: "TicTacToe-Server",
                technologies: [
                    'Java', 'Networking'
                ],
                text: "TicTacToe Multiplayer Game for my Software Workshop cource.",
                url: 'TicTacToe-Server',
                page: 2
            }, {
                name: "BuildView",
                technologies: [
                    'C#', 'WPF', 'C', 'C++'
                ],
                text: "The project considers a problem connected with digitization and visualization of" +
                        " three-dimensional real objects which the user wants to carry over into cyberspa" +
                        "ce. Creating, editing and visualization of models which are received by the devi" +
                        "ce – Microsoft Kinect, are the main aim of “BuildView”. By using the 3D scanner " +
                        "the user can digitalis buildings and objects which can be processed by 3D softwa" +
                        "re later. The project was developed by Boyan Bonev and mentored by Alexander Pen" +
                        "ev",
                url: 'BuildView',
                page: 2
            }, {
                name: "AbideByTheRules",
                technologies: [
                    'C#', 'WPF', 'XNA', '3D Studio Max'
                ],
                text: "Project which helps children to develop the skills of moving on the road safely." +
                        " This project has been developed in 2011/2012, when I (B. Bonev) was at the age " +
                        "of 14. The project has been used in some Bulgarian schools during 'Hour of the T" +
                        "eacher' class.",
                url: 'AbideByTheRules',
                page: 3
            }, {
                name: "PacmanPlusPlus",
                technologies: [
                    'Java', 'Java FX'
                ],
                text: "We have produced a multiplayer-based variation of the classic arcade game Pac Ma" +
                        "n. The end result of this engineering project is a functional multiplayer game, " +
                        "whose core gameplay mechanics resemble those of its arcade predecessor. The game" +
                        " we have developed tries to expand on what the original game aimed to achieve. T" +
                        "his way we aim to attract players who are searching for a certain mix between ol" +
                        "d and new.",
                url: 'PacmanPlusPlus',
                page: 3
            }, {
                name: "Domineering",
                technologies: ['Java'],
                text: "Java implementation of the mathematical game Domineering, using techniques again" +
                        "st AI players such as heuristic functions.",
                url: 'Domineering',
                page: 4
            }, {
                name: 'Spinal Cord Injury Update',
                technologies: [
                    'ReactJS', 'Redux', 'Node', 'Node-RED'
                ],
                text: 'An internal competition at IBM in the UK has led to technology that could potent' +
                        'ially improve the quality of life for very young children with paraplegia and th' +
                        'eir parents.',
                url: 'spinal-cord-hackathon',
                page: 4
            }, {
                name: 'Scrabble',
                technologies: ['Haskell'],
                text: 'Scrabble game written in Haskell as part of my university assignment',
                url: 'Scrabble',
                page: 5
            },, {
                name: 'Me, myself and I',
                technologies: [
                    'ReactJS', 'Redux'
                ],
                text: 'Website that describes myself, my experience and my interests.',
                url: 'Me-myself-and-I',
                page: 5
            }, {
                name: "Father Christmas",
                technologies: [
                    'Java', 'PostgreSQL'
                ],
                text: "Database application called FatherChristmas for the university course Databases." +
                        " It allows basic queries for creating and dropping tables, as well as inserting " +
                        "and retrieving of information from those tables.",
                url: 'FatherChristmas',
                page: 6
            }, {
                name: 'Pomodoro',
                technologies: ['ReactJS'],
                text: 'Pomodoro Technique implemented using React to enhance my skills and track my tim' +
                        'e in a better way',
                url: 'Pomodoro',
                page: 6
            }, {
                name: "Draw Motion",
                technologies: [
                    'Java', 'LeapMotion'
                ],
                text: "Java application that allows you to draw on the screen using leap motion.",
                url: 'DrawMotion',
                page: 7
            }, {
                name: "Chartinity",
                technologies: [
                    'Android', 'C++', 'Java'
                ],
                text: "An android application for generating editable charts from pictures.",
                url: 'Chartinity',
                page: 7
            }, {
                name: "Mood Location",
                technologies: [
                    'Python',
                    'Tensor Flow',
                    'ReactJS',
                    'Redux',
                    'Twitter API',
                    'Django'
                ],
                text: "An application that determines the mood of people in specific location.",
                url: 'MoodLoc',
                page: 8
            }, {
                name: "Tickit",
                technologies: [
                    'ReactJS', 'Java Spring'
                ],
                text: "Facebook Hack 2017 London - Application for swapping tickets",
                url: 'Tickit',
                page: 8
            }
        ]
    };
}