import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    FlatList,
    ListItem,
    List,
    Alert,
    TextInput,
    ScrollView,
    TouchableHighlight
} from 'react-native';


export default class EditToDoView extends Component {



    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            editTodoText: this.props.editTodoState.text
        }

    }

    toDoEditInput = (text) => {
        this.setState({
            editTodoText:text
        })
    }

    submitEditTodo = () =>{
        var editedTodo = {
            id:this.props.editTodoState.id,
            text:this.state.editTodoText
        }
        this.props.submitEditTodo(editedTodo);
    }

    returnTodoState = () => {
        Alert.alert("Todo state: "+JSON.stringify(this.props.todoState));
    }

    render() {
        return(
            <View style={{flex:1, margin:10}}>
                <TextInput placeholder="Edit todo" onChangeText={this.toDoEditInput} defaultValue={this.state.editTodoText}/>          
                <Button title="Save Edit" onPress={this.submitEditTodo}/>
                <Button title="Retrieve todo state" onPress={this.returnTodoState}/>
            </View>
        )
    }
}
