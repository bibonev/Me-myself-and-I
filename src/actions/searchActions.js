import * as types from './actionTypes';

export function addTechnologies(tech) {
    return ({type: types.SHOW_TECHNOLOGIES, technologies: tech});
}