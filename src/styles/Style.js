import { StyleSheet } from 'react-native';

export const defaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ADD8E6'
    },
    text:{
        textAlign: 'center',
        padding: 10, 
        fontSize: 42
    }
})
export const todoStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFF99'
    },
    formContainer: {
        flexDirection: 'row',
        height: 20,
        marginTop: 20,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#efb943',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSiz: 16,
        fontweight: 'bold'
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16,
        marginVertical: 8,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    }
});

export const registerStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});