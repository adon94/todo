import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';


export default class ItemView extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    popNavigation = () => {
        console.log("nav popped")
        this.props.return(this.props)
    }


    render() {
        return(
            <View>
                <Text>Return that shit baby</Text>
                <Button title="Return"
                onPress={this.popNavigation}/>  
            </View>
        )
    }
}