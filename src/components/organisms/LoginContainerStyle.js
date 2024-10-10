import { StyleSheet } from "react-native";

export default StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        paddingRight:5,
        justifyContent:'space-between'
    
      },
      langChangeButton: {
        // width: "40%",
        flex: 1,
        marginHorizontal:5,
        
    
      },
      card: {
        padding: 20,
        // borderRadius: 20,
        marginTop: 40,
        // backgroundColor: '#fff',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 5,
        // elevation: 5,
        // // margin: 10,
        // width: '80%',
        // // marginVertical: 10,
      },
      languageSwitcher: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 10,
      },
      languageText: {
        marginHorizontal: 5,
        fontSize: 14,
        color: '#1E90FF',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
      },
      policyText: {
        textAlign: 'center',
        fontSize: 12,
        marginVertical: 10,
    
      },
      link: {
        color: '#1E90FF',
        textDecorationLine: 'none',
        textAlign:'center',
      },
      optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
      },
      forgotText: {
        color: '#1E90FF',
        fontSize: 12,
      },
      connectText: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 14,
      },
      container: {
        alignItems: 'center',
        marginTop: 10,
      },
      switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
      },
      switchText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: '#008ECC'
      },
      inactiveText: {
        color: '#888',
      }

});