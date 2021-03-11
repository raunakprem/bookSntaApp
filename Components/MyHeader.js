import React, { Component } from 'react';
import {Header,Icon,Badge} from 'react-native-elements'
import {View,Text,StyleSheet} from 'react-native'
import { render } from 'react-dom';

export default class MyHeader extends Component(
    constructor(props){
        super(props);
        this.state={value:""}
    }
    componentDidMount(){
        this.getNumberOfUnreadNotification()

    }
getNumberOfUnreadNotification(){
    db.collection("all_notificatin")
    .where("notification_status","==","unread")
    .onSnapShot((snapshot)=>{
        var unreadeNotifications =snapshot.docs.map((doc)=>{
                this.setState({
                    value:unreadeNotifications.length
                })
        })
    })
}

)
const BellIconWithBadge =()=>{
return(
    <View>
        <Icon name="bell"type="font-aewsome" color ="#696969" onPress= {()=>{
this.props.navigation.navigate('notification')
        }}/>
        <Badge value={this.state.value}
        containerStyle={{position:'absolute',top:-4,right:-4}}
        />
    </View>
)
}
render(){
    return(
        <Header
        leftComponent ={<Icon name ="Bars" type="font-awesome" color="#696969" onPress={()=>{
            this.props.navigation.toggleDrawer()
        }}/>}
        centerComponent = {{text:props.title,style:{color:'#90a5a9',fontSize:20,fontWeight:'bold'}}}
backgroundColor= "#eaf8fe"
        />
        rightComponent ={<this.BellIconWithBadge {...this.props}/>}
        backgroundColor="#eaf8fe"

    )
    }
}
