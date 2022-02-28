import { StyleSheet } from 'react-native';

export const defaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ADD8E6'
    },
    text:{
        textAlign: 'center',
        padding: 10, 
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
        backgroundColor: '#FFFF99'
    },
    formContainer: {
        flexDirection: 'row',
        height: 10,
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
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
        width: 100,
        alignItems: "center",
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    },
    switch: {
        marginTop: 26,
        marginBottom: 16,
        marginRight: 16,
        marginLeft: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
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