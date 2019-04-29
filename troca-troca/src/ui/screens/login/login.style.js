import { StyleSheet, Platform, Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        ...Platform.select({
            ios: {
                paddingTop: 40,
                paddingBottom: 20,
            },
            android: {
                paddingTop: 20,
                paddingBottom: 40,
            }
        })
    },
    header: {
        flex: 2,
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    logo: {
        fontSize: 120,
        color: "white",
    },
    textDefault: {
        color: "white",
        fontSize: 16,
        fontFamily: 'Ubuntu-M'
    },
    signInForm: {
        flex: 4,
        marginHorizontal: 40,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    inputText: {
        backgroundColor: 'rgba(216, 216, 216, 0.25)',
        marginTop: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        fontFamily: 'Ubuntu-M',
        color: 'white',
        borderRadius: 5,
        height: 50
    },
    buttonSignIn: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05C3DE',
        marginTop: 30,
        height: 50,
        borderRadius: 5
    },
    textButton: {
        paddingHorizontal: 10,
        fontSize: 18,
        fontFamily: 'Ubuntu-M',
        color: 'white'
    },
    footer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})
