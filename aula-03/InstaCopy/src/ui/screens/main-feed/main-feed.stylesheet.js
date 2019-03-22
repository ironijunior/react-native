import { StyleSheet, Dimensions } from "react-native"

const dime = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF",
        //paddingTop: Platform.OS === 'ios' ? 20 : 0
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 10
    },
    headerPost: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imagePost: {
        width: dime.width,
        height: dime.width, 
        marginBottom: 5
    },
    footerPost: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 15
    }
    });