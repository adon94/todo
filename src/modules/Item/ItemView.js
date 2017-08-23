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
        console.log(props.editTodoState)
        console.log("Todo text: "+this.state.todoText)
    }

    editInput = (text) => {
        console.log("edited text: "+text)
        console.log("edited state: "+this.state.todoText)
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
            id: this.props.editTodoState.id,
            text: this.state.todoText
        }
        this.props.submitEdit(edited)
        console.log(edited);
    }

    removeTodo = (index) => {
        this.props.removeTodo(index);
    }

    push = (todo) => {
        this.props.push(this.props,'app.AnotherPage', 'Another Page')
    }

    render() {
        return(
            <View>
                <TextInput placeholder="Edit todo" onChangeText={this.editInput} defaultValue={this.state.todoText}/>          
                <Button title="Save Edit" onPress={this.submitEdit}/>  
                <Button title="Delete" onPress={this.removeTodo}/>  
                <Button title="Return"
                onPress={this.popNavigation}/>  
                <Button title="Pop on" onPress={this.push}/>  
            </View>
        )
    }
}