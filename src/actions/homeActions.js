import * as types from './actionTypes';

export function showProjects() {
    return {type: types.SHOW_PROJECTS, projects: []};
}