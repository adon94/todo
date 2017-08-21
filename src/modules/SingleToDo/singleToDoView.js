import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    FlatList,
    ListItem,
    List,
    Alert,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import NavigationState from '../../Redux/Navigation/NavigationState'

export default class SingleToDoView extends Component {

    constructor(props) {
        super(props);
        // const textValue = undefined;
        // this.addTodo("TODOTEST");

        this.state = {
            newItem: ''
          }

        console.log(this.props)
    }


    // addTodo = () => {
    //     this.props.addTodo(this.state.newItem)
    //     this.state.newItem = "";
    //     console.log(this.props);
    //     console.log(this.props.todoState)
    // }

    // removeTodo = (id) => {
    //     console.log("id of item removed "+id)
    //     this.props.removeTodo(id);
    // }

    navigatePush = () => {
        NavigatorState.navigatePush(this.props, "SingleToDoView")
    }
    
    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
            }}
          />
        );
      };

      renderItem = ({item}) => (
        <TouchableHighlight onPress={()=>this.removeTodo(item.id)} underlayColor="white">
            <View><Text>{item}</Text></View>
        </TouchableHighlight>
      );

    render() {
        return (
            <View>
              <Text>You're successfully on the second page</Text>
            </View>
        )
    }
}



