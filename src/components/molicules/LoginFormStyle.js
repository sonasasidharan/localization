import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        paddingHorizontal:10,
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        marginVertical: 10,
        justifyContent:'space-around',
        marginLeft:1,
      },
      usercontainer:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        marginVertical: 10,
        marginRight:4,
        // justifyContent:'space-around'
    
      },
      passwordInput: {
        flex: 1,
      },
      icon: {
        width: 30,
        height: 30,
        // marginLeft: 10,
        // marginRight:4,
      },
})