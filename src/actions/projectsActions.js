import * as types from './actionTypes';

export function showProjects() {
    return {
        type: types.SHOW_PROJECTS,
        projects: [
            {
                name: "Spinal Cord Hackathon 1",
                page: 1
            }, {
                name: "Facebook Hackathon 2",
                page: 1
            }, {
                name: "Spinal Cord Hackathon 3",
                page: 1
            }, {
                name: "Facebook Hackathon 4",
                page: 2
            }, {
                name: "Spinal Cord Hackathon 5",
                page: 2
            }, {
                name: "Facebook Hackathon 6",
                page: 2
            }, {
                name: "Spinal Cord Hackathon 7",
                page: 3
            }, {
                name: "Facebook Hackathon 8",
                page: 3
            }, {
                name: "Spinal Cord Hackathon 9",
                page: 3
            }, {
                name: "Facebook Hackathon 10",
                page: 4
            }, {
                name: "Spinal Cord Hackathon 11",
                page: 4
            }, {
                name: "Facebook Hackathon 12",
                page: 4
            }
        ]
    };
}