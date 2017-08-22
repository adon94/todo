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
            <View><View><Text>{item.text} {item.id}</Text></View><View ><Button width="" title="Remove" onPress={()=>{this.removeTodo(item.id)}}/></View></View>
        </TouchableHighlight>
      );

    render() {
        return(
            <View>
                <View>
                    <View >
                        <TextInput placeholder="Enter todo..." value={this.state.todoText} onChangeText={this.toDoInput}/>
                        <Button title="Add"  onPress={this.addToToDo} />
                    </View>  
                </View>
                
                <View >
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


