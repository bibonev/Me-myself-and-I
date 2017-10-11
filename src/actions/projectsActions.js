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
                name: "N Side View",
                technologies: [
                    'C#', 'C++'
                ],
                text: "The project considers a problem connected with digitization and visualization of" +
                        " three-dimensional real objects, which the user wants to carry over into cybersp" +
                        "ace. Creating, editing and visualization of models, which are received by the 2 " +
                        "web cameras –Logitech c920, are the main aim of “NSideView”.",
                url: 'NSideView',
                page: 1
            }, {
                name: "Tic Tac Toe - Server",
                technologies: [
                    'Java', 'Networking'
                ],
                text: "TicTacToe Multiplayer Game for my Software Workshop cource.",
                url: 'TicTacToe-Server',
                page: 1
            }, {
                name: "Build View",
                technologies: [
                    'C#', 'WPF', 'C', 'C++'
                ],
                text: "The project considers a problem connected with digitization and visualization of" +
                        " three-dimensional real objects which the user wants to carry over into cyberspa" +
                        "ce. Creating, editing and visualization of models which are received by the devi" +
                        "ce – Microsoft Kinect, are the main aim of “BuildView”.",
                url: 'BuildView',
                page: 1
            }, {
                name: "Abide By The Rules",
                technologies: [
                    'C#', 'WPF', 'XNA', '3D Studio Max'
                ],
                text: "Project which helps children to develop the skills of moving on the road safely." +
                        " This project has been developed in 2011/2012, when I (B. Bonev) was at the age " +
                        "of 14. The project has been used in some Bulgarian schools during 'Hour of the T" +
                        "eacher' class.",
                url: 'AbideByTheRules',
                page: 1
            }, {
                name: "Pacman Plus Plus",
                technologies: [
                    'Java', 'Java FX'
                ],
                text: "Working in a team, we have produced a multiplayer-based variation of the classic" +
                        " arcade game Pac Man. The end result of this engineering project is a functional" +
                        " multiplayer game, whose core gameplay mechanics resemble those of its arcade pr" +
                        "edecessor. The game we have developed tries to expand on what the original game " +
                        "aimed to achieve.",
                url: 'PacmanPlusPlus',
                page: 1
            }, {
                name: "Domineering",
                technologies: ['Java'],
                text: "Java implementation of the mathematical game Domineering, using techniques again" +
                        "st AI players such as heuristic functions.",
                url: 'Domineering',
                page: 2
            }, {
                name: 'Spinal Cord M&T',
                technologies: [
                    'ReactJS', 'Redux', 'Node', 'Node-RED'
                ],
                text: 'An internal competition at IBM in the UK has led to technology that could potent' +
                        'ially improve the quality of life for very young children with paraplegia and th' +
                        'eir parents.',
                url: 'spinal-cord-hackathon',
                page: 2
            }, {
                name: 'Scrabble',
                technologies: ['Haskell'],
                text: 'Scrabble game written in Haskell as part of my university assignment',
                url: 'Scrabble',
                page: 2
            },, {
                name: 'Me, myself and I',
                technologies: [
                    'ReactJS', 'Redux'
                ],
                text: 'Website that describes myself, my experience and my interests.',
                url: 'Me-myself-and-I',
                page: 2
            }, {
                name: "Father Christmas",
                technologies: [
                    'Java', 'PostgreSQL'
                ],
                text: "Database application called FatherChristmas for the university course Databases." +
                        " It allows basic queries for creating and dropping tables, as well as inserting " +
                        "and retrieving of information from those tables.",
                url: 'FatherChristmas',
                page: 2
            }, {
                name: 'Pomodoro',
                technologies: ['ReactJS'],
                text: 'Pomodoro Technique implemented using React to enhance my skills and track my tim' +
                        'e in a better way',
                url: 'Pomodoro',
                page: 2
            }, {
                name: "Draw Motion",
                technologies: [
                    'Java', 'LeapMotion'
                ],
                text: "Java application that allows you to draw on the screen using leap motion.",
                url: 'DrawMotion',
                page: 3
            }, {
                name: "Chartinity",
                technologies: [
                    'Android', 'C++', 'Java'
                ],
                text: "An android application for generating editable charts from pictures.",
                url: 'Chartinity',
                page: 3
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
                page: 3
            }, {
                name: "Tickit",
                technologies: [
                    'ReactJS', 'Java Spring'
                ],
                text: "Facebook Hack 2017 London - Application for swapping tickets",
                url: 'Tickit',
                page: 3
            }
        ]
    };
}