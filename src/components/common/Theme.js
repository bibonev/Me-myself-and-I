import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        textColor: Colors.black,
        primary1Color: Colors.lightBlue300,
        primary2Color: Colors.indigo700,
        accent1Color: Colors.white,
        pickerHeaderColor: Colors.darkBlack,
        alternateTextColor: Colors.white
    },
    appBar: {
        height: 50
    }
});

export default muiTheme;