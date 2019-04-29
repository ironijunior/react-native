import { StyleSheet, Dimensions } from "react-native"

const dime = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
        //paddingTop: Platform.OS === 'ios' ? 20 : 0
    },
    picker: {
        height: 50,
        backgroundColor: '#05C3DE',
        color: 'white',
        fontFamily: 'Ubuntu',
        paddingLeft: 20
    }
});