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


export default class ItemView extends Component {



    constructor(props) {
        super(props);
        this.state = {
            todoText: props.editTodoState.text
        }
        console.log(props)
        console.log(props.editTodoState)
        //console.log(props.todoState.text)
        //console.log(this.state.todoText)
    }

    editInput = (text) => {
        console.log("edited text: "+text)
        this.setState({
            todoText: text
        })
    }

    popNavigation = () => {
        this.props.return(this.props)
        console.log("nav popped")
    }

    submitEdit = () => {
        console.log(this.state.todoText);
        var edited = {
            id: this.props.todo.id,
            text: this.state.todoText
        }
        this.props.submitEdit(edited)
        console.log(edited);
    }

    removeTodo = (index) => {
        this.props.removeTodo(index);
    }

    render() {
        return(
            <View>
                <TextInput placeholder="Edit todo" onChange={this.editInput} defaultValue={this.state.todoText}/>          
                <Button title="Save Edit" onPress={this.submitEdit}/>  
                <Button title="Delete" onPress={this.removeTodo}/>  
                <Button title="Return"
                onPress={this.popNavigation}/>  
            </View>
        )
    }
}