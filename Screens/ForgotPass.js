import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
//import Fontisto from 'react-native-vector-icons/Fontisto'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux'

export default class ForgotPass extends Component {
    render() {
        return(
            <Container>
                <ImageBackground source={require('../Images/logindp.png')} style={{ flex: 1 }} blurRadius={1.5}>
                    <Header transparent>
                        <Left style={{ flex: 0.2 }}>
                            <Button transparent onPress={() => Actions.drawerOpen()}>
                                <Feather type='Feather' name='menu' size={20} color='#323232' />
                            </Button>
                        </Left>
                        <Body />
                    </Header>

                    <HomeButtons Title="Login" />

                    <View style={styles.imageView}>
                        <Image source={require('../Images/logindp.png')} style={styles.imageStyle} />
                    </View>
                </ImageBackground> 

                <Content style={{ marginTop: 20 }}>                 
                    <View style={styles.mainView}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image source={require('../Images/HimmahLogo.png')} style={styles.logoStyle} />
                        </View>

                        <View style={{ marginTop: 20, marginBottom: 20 }}>
                            <View>
                                <Text style={{ fontSize: 8 }}>*Please enter your Username or Email Address</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <FontAwesome type='FontAwesome' name='user' size={11} color='#9d9fad' />
                                <Input style={styles.inputTextStyle} placeholder='' />
                            </Item>
                        </View>

                        <View style={styles.btnsView}>
                            <Button style={styles.btnStyle2} onPress={() => Actions.newPass()}>
                                <Text style={styles.btnTextStyle2}>Send</Text>
                            </Button>                           
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    imageView: {
        position: 'absolute',
        bottom: -20,
        // borderWidth: 1,
        // borderColor: '#787878',
        alignSelf: 'center',
    },
    imageStyle: {
        width: 220,
        height: 150
    },
    mainView: {
        borderWidth: 1,
        borderColor: '#e6e7e7',
        marginTop: 50,
        alignSelf: 'center',
        width: '70%',
        alignItems: 'center',
        // paddingTop: 30
    },
    logoStyle: {
        width: 60,
        height: 70,
        marginTop: -30,
        marginBottom: 2
    },
    inputItemStyle: {
        marginTop: 4,
        width: '70%',
        height: 20,
        paddingLeft: 6
    },
    inputTextStyle: { 
        textAlign: 'center', 
        fontSize: 10 
    },
    forgotTextStyle: { 
        fontSize: 10, 
        fontWeight: 'bold' 
    },
    btnsView: { 
        width: '70%',
        alignItems: 'center',
        marginTop: 13,
        marginBottom: 15
    },
    btnStyle2: {
        width: 67,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4e4e',
        borderRadius: 0,
        elevation: 0
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 10
    }
})