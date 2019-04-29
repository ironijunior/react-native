import { StyleSheet, Platform } from "react-native"

export default StyleSheet.create({
    conteinerProfile: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        ...Platform.select({
            ios: {
                paddingTop: 20,
            },
            android: {
                paddingTop: 0,
            }
        }),
        backgroundColor: '#05C3DE'
    },
    iconExit: {
        marginEnd: 25,
        fontSize: 24,
        color: 'white'
    },
    iconBack: {
        marginStart: 15,
        fontSize: 24,
        color: 'white'
    },
    touchExit: { 
        flexDirection: 'row', 
        justifyContent: 'center' 
    },
    box: {
        flex: 1,
        justifyContent: 'center'
    },
    iconBox: {
        backgroundColor: '#82E1EF',
        borderRadius: 85,
        borderWidth: 10,
        borderColor: 'white',
        minHeight: 170,
        minWidth: 170,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconFont: {
        fontSize: 120,
        color: '#FFF'
    },
    image: {
        borderRadius: 75,
        minWidth: 150,
        minHeight: 150
    },
    inputsBox: {
        flex: 1,
        marginHorizontal: 10,
        alignSelf: 'stretch'
    },
    inputProfile: {
        marginTop: 5,
        fontSize: 18,
        fontFamily: 'Ubuntu-M',
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        height: 50
    },
    button: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginTop: 30,
        height: 50,
        borderRadius: 5
    },
    textButton: {
        paddingHorizontal: 10,
        fontSize: 18,
        fontFamily: 'Ubuntu-M',
        color: '#05C3DE'
    }
});
