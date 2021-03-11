import React from 'react';
import { Text,View,TouchableOpacity,TextInput, Image,StyleSheet,KeyboardAvoidingView,Modal,ScrollView ,Alert } from 'react-native';
import * as firebase from 'firebase'
import db from '../config.js'
import {MyHeader} from '../Components/MyHeader'

export default class BookRequestScreen extends Components {
constructor(){
    super()
    this.state={
        userId:firebase.auth().currentUser.email,
        bookName:'',
reasonToRequest :"",

    }
}

createUniqueId(){
    return Math.random().toString(36).substring(7);

}

addRequest=(bookName,reasonToRequest)=>{
var userId = this.state.userId
var randomRequestId = this.createUniqueId()
    db.colection('requested_books').add({
        "user_Id":userId,
        "book_name":bookName,
       "reason_to_request":reasonToRequest,
      "request_Id":randomRequestId,
    
    })
    this.setState({
        bookName:'',
        reasonToRequest:''
    })
    return alert.Alert("Book Requested succesfully")
    

}
    render(){
        return(
            <View style ={{flex:1}}>
                <MyHeader title ="Request Book "/>
                <KeyboardAvoidingView style={StyleSheet.KeyboardStyle}>
                    <TextInput
                    style={StyleSheet.formText}
                    placeHolder={'Enter Book Name'}
onChangeText ={(text)=>{
this.setState({
    bookName:text
})
}}
                    />
                    <TextInput
                    style={[StyleSheet.formText,{heigth:300}]}
                    placeHolder={'Why Do You Need The Book '}
                    multiline
                    numberOfLines={8}
onChangeText ={(text)=>{
this.setState({
    resontoT:text
})
}}
                   />
                   <TouchableOpacity style = {styles.button}><Text>
                       Request
                       </Text></TouchableOpacity>
                </KeyboardAvoidingView>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({ keyBoardStyle : { flex:1, alignItems:'center', justifyContent:'center' }, formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )