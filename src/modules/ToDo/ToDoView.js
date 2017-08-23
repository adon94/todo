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
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import { Navigation } from 'react-native-navigation';


export default class ToDoView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        }
        console.log(props)

    }

    addToToDo = () => {
        if (this.state.todoText) {
            this.props.addTodo(this.state.todoText);
            this.setState({
                todoText: ""
            });
        } else {
            Alert.alert("Cannot leave todo empty");
        }
    }

    toDoInput = (text) => {
        this.setState({
            todoText: text
        })
    }

    removeTodo = (index) => {
        this.props.removeTodo(index);
    }

    editItem = (todo) => {
        this.props.edit(todo, this.props,'app.ItemView', 'Item')
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#CED0CE",
                }}
            />
        );
    };

    renderItem = ({ item }) => (
        //
        <TouchableHighlight onPress={() => { this.editItem(item) }} underlayColor="white">
            <View style={{ flex: 1, flexDirection: "row", padding: 10 }}><View style={{ flex: 3 }}><Text>{item.text} {item.id}</Text></View><View style={{ flex: 1 }}><Button width="" title="Remove" onPress={() => { this.removeTodo(item.id) }} /></View></View>
        </TouchableHighlight>
    );

    render() {
        return (
            <View>
                <View>
                    <TextInput
                        placeholder="Enter todo..."
                        value={this.state.todoText}
                        onChangeText={this.toDoInput}
                        autoCapitalize="words" />
                    <Button title="Add" onPress={this.addToToDo} />
                </View>

                <View>
                    <ScrollView>
                        <FlatList
                            data={this.props.todoState}
                            renderItem={this.renderItem}
                            ItemSeparatorComponent={this.renderSeparator}
                            keyExtractor={item => item.id}//must assign the unique id of the item                    
                        />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});