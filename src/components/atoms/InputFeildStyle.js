import { StyleSheet } from "react-native";

export default StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderBottomColor: '#ccc',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderTopColor: '#fff',
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
      },
      touchIcon: {
        width: 20,
        height: 30,
        marginRight: 10,
      },
      input: {
        flex: 1,
        paddingVertical: 5,
      },
})