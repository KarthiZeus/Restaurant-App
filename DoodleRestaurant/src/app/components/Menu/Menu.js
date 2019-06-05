import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Icon } from 'react-native-elements'

class MenuList extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    MainContainer: {
        width:100,
        height:30,
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
    });
export default MenuList;