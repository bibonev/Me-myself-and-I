import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import AppBar from 'material-ui/AppBar';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const Header = () => {
    return (<AppBar title="Boyan Bonev" style={{
        color: red500
    }}/>);
};

export default Header;