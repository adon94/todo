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


export default class ToDoView extends Component {



    constructor(props) {
        super(props);
        this.state = {
            todoText:""
        }
        console.log(props)

    }

    addToToDo = () => {
        if(this.state.todoText){
            this.props.addTodo(this.state.todoText);
            this.setState({
                todoText:""
            });
        }else{
            Alert.alert("Cannot leave todo empty");
        } 
    }

    toDoInput = (text) => {
        this.setState({
            todoText:text
        })
    }

    removeTodo = (index) => { 
        this.props.removeTodo(index);
    }

    editItem = (todo) =>{
        //Alert.alert("Edit this item "+index);
        this.props.navigator.push({
            screen: 'app.EditToDoView'
        });
        this.props.editTodo(todo);
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

    renderItem = ({item}) => (
        //
        <TouchableHighlight onPress={()=>{this.editItem(item)}} underlayColor="white">
            <View style={{flex: 1, flexDirection:"row", padding:10}}><View style={{flex: 3}}><Text>{item.text} {item.id}</Text></View><View style={{flex:1}}><Button width="" title="Remove" onPress={()=>{this.removeTodo(item.id)}}/></View></View>
        </TouchableHighlight>
      );

    render() {
        return(
            <View style={{flex:1, margin:10}}>
                <View style={{flex:0.2}}>
                    <View style={{flexDirection:"row", flex:1}}>
                        <TextInput placeholder="Enter todo..." value={this.state.todoText} onChangeText={this.toDoInput} style={{flex:0.95}}/>
                        <Button title="Add" style={{flex:1}} onPress={this.addToToDo} style={{flex:0.05}}/>
                    </View>  
                </View>
                
                <View style={{flex:3}}>
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



