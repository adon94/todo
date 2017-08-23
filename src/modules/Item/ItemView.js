import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Alert,
    TextInput,
    ScrollView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class ItemView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoText: props.editTodoState.text
        }
        console.log(props.editTodoState)
        console.log("Todo text: " + this.state.todoText)
    }

    editInput = (text) => {
        console.log("edited text: " + text)
        console.log("edited state: " + this.state.todoText)
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

    render() {
        return (
            <View>
                <TextInput placeholder="Edit todo" onChangeText={this.editInput} defaultValue={this.state.todoText} />
                <Button title="Save Edit" onPress={this.submitEdit} />
                <Button title="Delete" onPress={this.removeTodo} />
                <Button title="Return"
                    onPress={this.popNavigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20
    },
    countdown: {
        fontSize: 80,
        fontFamily: 'sans-serif-thin',
        color: '#d35400'
    },
    todoText: {
        fontFamily: 'sans-serif-thin',
        fontSize: 40,
        paddingBottom: 20,
        width: 300
    },
    taskText: {
        color: 'white',
        fontFamily: 'sans-serif-thin',
        fontSize: 40,
        width: 300
    }
})