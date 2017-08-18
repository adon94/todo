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


    render() {
        return (
            <View>

                <TextInput placeholder="Add item"
                    onChangeText={(newItem) => this.setState({ newItem })} />
                <Button
                    title="Add a todo"
                    onPress={() => this.addTodo()} />
                    <Text>{this.props.todoState}</Text>
                <TextInput ref="newItem"
                value ={ this.state.newItem }
                onChangeText = {(newItem) => this.setState({newItem})}></TextInput>
                <Text>Herllo</Text>
            <Text>{JSON.stringify(this.props.todoState)}</Text>
            <Button title="Add to state" onPress={() => this.addTodo()}></Button>
                    
            </View>
        )
    }
}



