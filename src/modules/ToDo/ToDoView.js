import React, { Component } from 'react';
import {
    Button,
    Text,
    View,
    StyleSheet
} from 'react-native';


export default class ToDoView extends Component {

    constructor(props) {
        super(props);

        console.log(props)

    }

    componentWillMount = () => {
        
    }

    handleAdd = () => {
        const { addTodo } = this.props;

        addTodo("Testing");
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Hello</Text>
                <Button title="Add" onPress={this.handleAdd} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column', alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#F6F6F6'
    }
})