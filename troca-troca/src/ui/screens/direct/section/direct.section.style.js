import { StyleSheet, Platform, Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    line: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    produto: {
        marginLeft: 10,
        height: 90,
        width: 90,
        borderWidth: 3,
        borderColor: "#1FDDAD",
        borderRadius: 45,
    },
    produtoImage: {
        flex: 1,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 45,
    },
    descricao: {
        flex: 1,
        height: 100,
        paddingLeft: 5,
        justifyContent: "center",
    },
    produtoPreco: {
        height: 30,
        width: 130,
        position: "absolute",
        backgroundColor: "#05C3DE",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        right: 10,
        top: 0,
        alignItems: "center",
        justifyContent: "flex-start",
    },
})