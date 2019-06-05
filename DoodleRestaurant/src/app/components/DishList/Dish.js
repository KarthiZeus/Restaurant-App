import React, { Component } from 'react'
import {addItem} from '../../action/restaurant-action';
import { Text, View, ScrollView,ListView,Button } from 'react-native'
import { connect } from 'react-redux';
import {DOODLE_RESTAURANT} from '../../utility/constants'
class Dish extends Component {

constructor(props) {
      super(props)
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      userDataSource: ds,
      count: 0
    };
}


_incrementCount(itemId) {
  
  if(this.state.count<20){
    this.setState ({
    count: this.state.count + 1
  });
}
}

_decrementCount() {
  if(this.state.count>0){
    this.setState ({
    count: this.state.count - 1
  });
}
}

componentDidMount() {
  this.setState({ userDataSource: this.state.userDataSource.cloneWithRows(this.props.DishMenus) })
}

componentWillReceiveProps(nextProps) {
  this.setState({
    userDataSource: this.state.userDataSource.cloneWithRows(nextProps.DishMenus)
  })
}

renderRow = (Menu) => {
  
  return (
    <View key={Menu.ITEM_ID} style={{ height: 100, margin: 10,flexDirection: 'row'}} >
        <View style={{ flex: 2,}} >
          <Text style={{ textAlign: 'left', color: 'black', fontSize: 17, margin:5}}>{Menu.ITEM_NAME}</Text>
          <Text style={{ textAlign: 'left', color: 'black', fontSize: 15, margin:5}}>{Menu.ITEM_DESCRIPTION}</Text>
          <Text style={{ textAlign: 'left', color: 'black', fontSize: 20, margin:5}}>{'$'+Menu.ITEM_PRICE}</Text>
        </View>
        <View style={{flex: .7, flexDirection:'row',alignItems:'center',
        justifyContent:'center'}} >
        {
          this.state.count == 0 ?
        <Button title="ADD" color='#f5deb3'onPress={this._incrementCount.bind(this,Menu.ITEM_ID)}></Button>
        :
        <View style={{ flexDirection:'row',alignItems:'center',
        justifyContent:'center'}}>
        <Button title="-" color='#f5deb3' onPress={this._decrementCount.bind(this,Menu.ITEM_ID)}></Button>
        <Text style={{ textAlign: 'center', color: 'black', fontSize: 17, margin:5}}>{this.state.count}</Text>
        <Button title="+" color='#f5deb3' onPress={this._incrementCount.bind(this,Menu.ITEM_ID)}></Button>
        </View>
        }
        </View>
        </View>
  );
}


render() {
     return (
      <View style={{ flex:1, backgroundColor:"white"}}>
      { this.props.Title &&
        <Text style={{ textAlign: 'left', color: 'black', fontSize: 20, margin:10}}>{this.props.Title ? this.props.Title : ''}</Text>
      }
        <ListView style={{ flex:1, backgroundColor:"white"}} dataSource={this.state.userDataSource}
          renderRow={(user) => this.renderRow(user)}/> 
          </View>
            )
         }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dish)