import { StyleSheet } from 'react-native';
// @refresh reset
export const defaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ADD8E6'
    },
    text:{
        textAlign: 'center',
        fontSize: 20
    },
    btn: {
        width: 200,
        color: '#ADD8E6',
    }
})

export const todoStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFF99',
        padding: 10
    },
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        marginRight: 5
    },
    button: {
        height: 48,
        borderRadius: 5,
        backgroundColor: '#efb943',
        width: 100,
        alignItems: "center",
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },

    listContainer: {
        flex: 1,

    },
    entityContainer: {
        borderBottomColor: '#cccccc',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    entityText: {
        fontSize: 20,
        color: '#333333'
    },
    switch: {
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    errorMsg:{
        color: 'red',
    }
});

export const registerStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});

export const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    inline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 180,
        flex: 1,
        alignItems: 'center',
    },
    btn:{
        width: 200,
        padding: 10,
        marginHorizontal: 20,
    },
    errorMsg:{
        color: 'red',
    }

});