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

export default class ToDoView extends Component {

    constructor(props) {
        super(props);
        const textValue = undefined;
        // this.addTodo("TODOTEST");

        this.state = {
            newItem: ''
          }

        console.log(this.props)
    }


    addTodo = () => {
        this.props.addTodo(this.state.newItem)
        this.state.newItem = "";
        console.log(this.props);
        console.log(this.props.todoState)
    }

    removeTodo = (id) => {
        console.log("id of item removed "+id)
        this.props.removeTodo(id);
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

      navigatePush = () => {
          NavigatorState.navigatePush(this.props, )
      }

      renderItem = ({item}) => (
        <TouchableHighlight onPress={()=>this.removeTodo(item.id)} underlayColor="white">
            <View><Text>{item}</Text></View>
        </TouchableHighlight>
      );

    render() {
        return (
            <View>
                <Button title="NAVIGATE BITCH" onPress={() => this.navigationPush()}></Button>
                <TextInput placeholder="Put it in me" ref="newItem"
                value ={ this.state.newItem }
                onChangeText = {(newItem) => this.setState({newItem})}></TextInput>
            <Button title="Add to state" onPress={() => this.addTodo()}></Button>
            <ScrollView>
            <FlatList
                data={this.props.todoState}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.renderSeparator}
                keyExtractor={item => item.id}//must assign the unique id of the item                    
            />
            </ScrollView>
            </View>
        )
    }
}