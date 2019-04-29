import { StyleSheet, Dimensions } from "react-native"

const dime = Dimensions.get('window')

export default StyleSheet.create({
    postContainer: {
        backgroundColor: 'white',
        margin: 10,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7
    },
    postImageContainer: {
        position: 'relative',
        padding: 10
    },
    postImage: {
        height: 260,
        width: dime.width - 40,
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    postValueBox: {
        width: dime.width * 0.3,
        height: dime.width * 0.10,
        position: 'absolute',
        top: 5,
        marginRight: 25,
        right: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#05C3DE',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7
    },
    postValue: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Ubuntu-M',
        marginTop: 5
    },
    descriptionText: { 
        fontSize: 18, 
        fontFamily: 'Ubuntu-M', 
        color: '#979797' 
    },
    authorContainer: { 
        flexDirection: 'row', 
        padding: 10
    },
    authorImage: {
        width: 60, 
        height: 60, 
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 2
    },
    postButtonContainer: {
        height: 70,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingBottom: 10
    }
});