import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet ,Button,TouchableHighlight,Alert,TouchableOpacity, Image } from 'react-native'
import DishList from '../components/DishList/Dish'
import {DOODLE_RESTAURANT} from '../utility/constants'
class Mycart extends Component {


constructor(props) {
      super(props)
      this.state = {
      }
}
SampleFunction=()=>{
    alert("hai")
    this.props.add("BURGER");
   
   
    }

render() {
     return (
                <View style={{ flex:1, backgroundColor:"#353535"}}>
                    <View style={styles.content}>
                                <View style={styles.messageBox}>
                                    <View>
                                        <Text style={styles.messageBoxTitleText}>Total Cost</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.messageBoxBodyText}>$25</Text>
                                    </View>
                                </View>
                    </View>
                    <DishList DishMenus={DOODLE_RESTAURANT.DESERT} Title={this.state.Title}></DishList>
                    <View style={{flex:.15}}>
                        <View style={styles.footer}>
                        <TouchableHighlight style={styles.bottomButtons}>
                            <Text style={styles.footerText}>Place Order</Text>
                        </TouchableHighlight>
                        </View>
                    </View>
                </View>
            )
         }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#F5F5F5'
      },
     
      TouchableOpacityStyle:{
     
        position: 'absolute',
        bottom: 10,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor:'#353535',
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
        flex:.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
messageBox:{
    backgroundColor:'white',
    width:200,
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius:10
},
messageBoxTitleText:{
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
    fontSize:18,
    marginBottom:10
},
messageBoxBodyText:{
    color:'black',
    fontWeight:'bold',
    fontSize:24,
    textAlign:'center',
}
});

export default Mycart;