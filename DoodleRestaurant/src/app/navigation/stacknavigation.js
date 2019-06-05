import React, { Component } from 'react'
import {
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';
  import { View, Image, TouchableOpacity, HeaderButtons } from 'react-native';
  import DoodleRestaurant from '../container/DoodleRestaurant'
  import MyCart from '../container/Mycart'
  
  class NavigationDrawerStructure extends Component {

    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={{uri: 'www.pngfind.com/pngs/m/47-475682_png-file-back-arrow-icon-android-transparent-png.png'}}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
          </TouchableOpacity>
        </View>
      );
    }
  }


  const StackNavigator = createStackNavigator({
      
    Home: {
      screen: DoodleRestaurant,
    },

    MyCart: {
        screen: MyCart,
        navigationOptions: ({ navigation }) => ({
          title: 'My Cart'
        
        }),
      },
  });

  export default createAppContainer(StackNavigator);