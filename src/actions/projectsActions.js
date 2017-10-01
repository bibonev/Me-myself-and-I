import * as types from './actionTypes';

export function showProjects() {
    return {
        type: types.SHOW_PROJECTS,
        projects: [
            {
                name: "Spinal Cord Hackathon 1",
                technologies: [
                    'React', 'Node', 'Express', 'MongoDB'
                ],
                page: 1
            }, {
                name: "Facebook Hackathon 2",
                technologies: [
                    'React', 'Node', 'Express', 'MongoDB', 'Node-Red'
                ],
                page: 1
            }, {
                name: "Spinal Cord Hackathon 3",
                technologies: [
                    'C#', '.NET', 'Arduino', 'XNA'
                ],
                page: 2
            }, {
                name: "Facebook Hackathon 4",
                technologies: [
                    'React', 'Node', 'Express', 'MongoDB'
                ],
                page: 2
            }, {
                name: "Spinal Cord Hackathon 5",
                technologies: [
                    'React', 'Node', 'Express', 'MongoDB'
                ],
                page: 3
            }, {
                name: "Facebook Hackathon 6",
                technologies: [
                    'React', 'Node', 'Express', 'MongoDB'
                ],
                page: 3
            }, {
                name: "Spinal Cord Hackathon 7",
                technologies: [
                    'React', 'Node', 'Express', 'MongoDB'
                ],
                page: 4
            }, {
                name: "Facebook Hackathon 8",
                technologies: [
                    'React', 'Node', 'Express', 'MongoDB'
                ],
                page: 4
            }, {
                name: "Spinal Cord Hackathon 9",
                technologies: [
                    'React', 'Node', 'Express', 'MongoDB'
                ],
                page: 5
            }, {
                name: "Facebook Hackathon 10",
                technologies: [
                    'React', 'Node', 'Express', 'MongoDB'
                ],
                page: 5
            }, {
                name: "Spinal Cord Hackathon 11",
                technologies: [
                    'React', 'Node', 'Express', 'MongoDB'
                ],
                page: 6
            }, {
                name: "Facebook Hackathon 12",
                technologies: [
                    'React', 'Node', 'Express', 'MongoDB'
                ],
                page: 6
            }
        ]
    };
}