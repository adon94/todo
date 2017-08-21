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
            todoText:""
        }
        console.log(props)
    }

    displayMessage = () => {
        console.log("Message Displayed")
    }

    render() {
        return(
            <View>
                <Text>{this.props.todo.text}</Text>
                <Button title="Display Message"
                onPress={this.displayMessage}/>  
            </View>
        )
    }
}