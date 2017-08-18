import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Button
} from 'react-native';


export default class ToDoView extends Component {

    constructor(props) {
        super(props);
        const textValue = undefined;
        // this.addTodo("TODOTEST");

        console.log(this.props)
    }


    addTodo = () => {
        this.props.addTodo(this.state.newItem)
        this.state.newItem = "";
        console.log(this.props);
    }


    render() {
        return (
            <View>

                <TextInput placeholder="Add item"
                    onChangeText={(newItem) => this.setState({ newItem })} />
                <Button
                    title="Add a todo"
                    onPress={() => this.addTodo()} />
                    <Text>{this.props.todoState}</Text>
            </View>
        )
    }
}



