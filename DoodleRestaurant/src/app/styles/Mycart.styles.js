import { StyleSheet } from 'react-native'

export const cartstyles = {
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#F5F5F5'
      },
      TouchableOpacityStyle:{
     
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
     
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
      },
    footer: {
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor:'green',
        flexDirection:'row',
        height:80,
        alignItems:'center',
      },
      bottomButtons: {
        alignItems:'center',
        justifyContent: 'center',
        flex:1,
      },
      footerText: {
        color:'white',
        fontWeight:'bold',
        alignItems:'center',
        fontSize:18,
      },
    content:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
messageBox:{
    backgroundColor:'#ef553a',
    width:200,
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius:10
},
messageBoxTitleText:{
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center',
    fontSize:18,
    marginBottom:10
},
messageBoxBodyText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:24,
    textAlign:'center',
}
};