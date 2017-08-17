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

        

    }


    addTodo = (text) => {
        this.props.addTodo(text)
    }


    render() {
        return(
            <View>

                <Text>Herllo</Text>

                    
            </View>
        )
    }
}



