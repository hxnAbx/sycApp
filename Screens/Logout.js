import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import { Container, Content, Button } from 'native-base'
import { Actions } from 'react-native-router-flux';
export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonResult : [],
            loaded: true,
            error: null,
            userToken  : null,
            isUserloaded : false,
            baseUrl : null,
            profileImg : null
        }
    }
    componentDidMount(){
      this.logoutUser

    }
    logoutUser = () =>{
        AsyncStorage.removeItem('user_id');
        AsyncStorage.removeItem('user_token');
        AsyncStorage.removeItem('UserProfileData');
        AsyncStorage.removeItem('UserProfileImage');
        AsyncStorage.removeItem('UserProfileName');
        this.setState({isUserloaded:false})
        Actions.home()
    }
    render(){
        return(
            <Text>LOGIN OUT .. </Text>
        )
    }

}
