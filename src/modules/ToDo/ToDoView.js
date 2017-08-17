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
        this.state = {
            newItem: ''
          }

        

    }


    addTodo = () => {
        this.props.addTodo(this.state.newItem)
        console.log(this.props.todoState)
    }


    render() {
        return(
            <View>
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



