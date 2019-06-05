import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, Image, Button ,TouchableHighlight, ImageBackground, Alert } from 'react-native';
import { connect } from 'react-redux';
import {NavigationActions} from 'react-navigation';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {addItem} from '../action/restaurant-action';
import {DOODLE_RESTAURANT} from '../utility/constants'
import DishList from '../components/DishList/Dish'
class DoodleRestaurant extends Component {

  constructor(props){
    super(props);
    this.state={
      Menus: DOODLE_RESTAURANT.STARTER,
      Title : 'Starter'
    }
  }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = (Menus) => {
    this._menu.hide();
    switch (Menus) {
      
      case 'Starter' : this.setState({
        Menus : this.props.Starter,
        Title: 'Starter',
      }); 
      break;

      case 'Main Course' : this.setState({
        Menus : this.props.MainCourse,
        Title: 'Main Course',
      }); 
      break;
      case 'Desert' : this.setState({
        Menus : this.props.Desert,
        Title : 'Desert'
      }); 
      break;
      case 'Drinks' : this.setState({
        Menus : this.props.Drinks,
        Title : 'Drinks'
      }); 
      break;
    }
    
  };

  componentWillUnmount()
{
  this._menu.hide();
}
  showMenu = () => {
    this._menu.show();
  };

  componentDidMount(){
    this._menu.hide();
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  
SampleFunction=()=>{
 alert("haia");
  this.props.add("BURGER");
  }


  render() {
    return (
      <View style={{ flex:1}}>
      <View style={{ flex:1, backgroundColor:"white"}}>
              <ImageBackground style={{height:200}} source={{uri: 'https://morsels.com.au/wp-content/uploads/2018/07/restaurant-food-salat-2.jpg'}}>
             </ImageBackground>
             <View style={{ flex:1,position:'absolute',top:100,left:20,right:20,backgroundColor: 'white'}} >
              <Text style={{ textAlign: 'center', color: 'black', fontSize: 20, margin: 20, fontWeight: 'bold'}}>Doodle Restaurant</Text>
              <Text style={{ textAlign: 'center', color: 'black', fontSize: 15,}}>All Days : 9.00 AM - 6.00 PM </Text>
              <Text style={{ textAlign: 'center', color: 'black', fontSize: 15,}}>Reach Us : +91 8190031278</Text>
              <View style={{ textAlign: 'center', color: 'black', fontSize: 15, justifyContent:'center', paddingLeft:70, paddingRight:70}}>
              <Button title={'Book Table'} color= '#353535' style={{ textAlign: 'center', color: 'black', fontSize: 15,}}></Button>
              </View>
             </View>
             </View>
                    <DishList DishMenus={this.state.Menus} Title={this.state.Title}></DishList>
                    <View style={styles.MainContainer}>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.showMenu} style={styles.TouchableOpacityStyle} >
                        <Button color="#f5deb3" title={'Menu'} style={{ textAlign: 'center', fontSize: 15}} onPress={this.showMenu} style={styles.FloatingButtonStyle}></Button>
                        </TouchableOpacity>
                        <Menu
          ref={this.setMenuRef}
          button={<View style={styles.MainContainer} >
      </View>}
        >
          <MenuItem onPress={this.hideMenu.bind(this,'Starter')}>Starter { ' ['+this.props.Starter.length+']' }
          </MenuItem>
          <MenuItem onPress={this.hideMenu.bind(this,'Main Course')}>Main Course { ' ['+this.props.MainCourse.length+']' }</MenuItem>
          <MenuItem onPress={this.hideMenu.bind(this,'Desert')} >Desert { ' ['+this.props.Desert.length+']' }</MenuItem>
          <MenuItem onPress={this.hideMenu.bind(this,'Drinks')}>Drinks { ' ['+this.props.Drinks.length+']' }</MenuItem>
        </Menu>
                    </View>
                    <View style={{flex:.2}}>
                        <View style={styles.footer} >
                        <TouchableOpacity style={styles.bottomButtons}  onPress={this.navigateToScreen('MyCart')}>
                            <Text style={styles.footerText} onPress={this.navigateToScreen('MyCart')}>{"View Order"+' (ITEMS)'}</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
    
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  TouchableOpacityStyle:{
    position: 'absolute',
    width: 100,
    bottom:40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
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
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = state => {
  return {
    Starter : state.restaurantReducer.Starter,
    MainCourse : state.restaurantReducer.MainCourse,
    Desert : state.restaurantReducer.Desert,
    Drinks : state.restaurantReducer.Drinks,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addItem(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoodleRestaurant)