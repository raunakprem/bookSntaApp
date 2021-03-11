import React from 'react';
import { Text,View,TouchableOpacity,TextInput, Image,StyleSheet,KeyboardAvoidingView,Modal,ScrollView ,Alert } from 'react-native';
import * as firebase from 'firebase'
import db from '../config.js'
import {MyHeader} from '../Components/MyHeader'



export default class BookDonateScreen extends Component {
    constructor(){
        super();
        this.state={requestedBooksList:[]

    }
    this.requestRef=null}

    getRequestedBooksList=()=>{
        this.requestRef=db.collection('requested_books')
        .onSnapshot((snapshot)=>{
            var RequestedBooksList = snapshot.docs.map(document=>document.data())
            this.setState({
                requestedBooksList:requestedBooksList
            })
        })
    }
    componentDidMount(){
        this.getRequestedBooksList()

    }
    componentWillUnmount(){
this.requestRef()

    }
    keyExtractor=(item,index)=>index.toString()
    renderItem=({item,i})=>{
return(
    <ListItem 
key ={i}
title={item.Book_name}
subtitle={item.reason_to_request}
titleStyle={{color:'black',fontWeight:'bold'}}
rightElement={<TouchableOpacity style={styles.button}
onPress={()=>{
    this.props.navigation.navigate("RecieverDetails",{"details":item})
}}
>
    <Text style={{color:'#ffff'}}>
        View
        </Text>
    </TouchableOpacity>}
    botomDivider
    />
)

    }
    render(){

    
        return(
            <View style={{flex:1}}>
                <MyHeader title="Donate Books" navigation={this.props.navigation}/>    
                <View style={{flex:1}}>
                    {this.state.requestedBooksList.length===0
                    ?(
                        <View style={styles.subContainer}><Text style={{fontSize:20,fontWeight:'bold'}}>List Of Requested Books</Text> </View>

                    ):(
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.RequestedBooksList}
                        renderItem = {this.renderItem}
                        />
                    )
                    }
                    </View>       
                     </View>
        )
    }
}
const styles = StyleSheet.create({ subContainer:{ flex:1, fontSize: 20, justifyContent:'center', alignItems:'center' }, button:{ width:100, height:30, justifyContent:'center', alignItems:'center', backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8 } } })
