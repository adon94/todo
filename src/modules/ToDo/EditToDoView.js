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
        this.state = {
            todoText:""
        }
        console.log(props)

    }

    render() {
        return(
            <View style={{flex:1, margin:10}}>
                <TextInput placeholder="Edit todo" value={this.props.editTodoState.text}/>          
                <Button title="Save Edit"/>  
            </View>
        )
    }
}
