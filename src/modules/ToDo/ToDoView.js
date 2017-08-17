import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';


export default class ToDoView extends Component {

    constructor(props) {
        super(props);

        console.log(props)

    }

    componentWillMount = () => {
        
    }


    render() {
        return(
            <View>
                <Text>Hello</Text>
            </View>
        )
    }
}



