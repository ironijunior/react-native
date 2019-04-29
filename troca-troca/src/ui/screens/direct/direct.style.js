import { StyleSheet, Platform, Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    line: {
        height: 130,
        width: width - 20,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: "rgba(29, 29, 29, 0.01)",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: .5,
        shadowRadius: 10,
        elevation: 5,
    }
})