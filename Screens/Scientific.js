import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';

export default class Scientific extends Component {
    render() {
        return(
            <Container>
                <ImageBackground source={require('../Images/scientific.png')} style={{ flex: 1 }} blurRadius={1.5} >
                    <Header transparent>
                        <Left style={{ flex: 0.2 }}>
                            <Button transparent>
                                <Feather type='Feather' name='menu' size={20} color='#ffffff' />
                            </Button>
                        </Left>
                        <Body />
                    </Header>

                    <HomeButtons Title="Events" />

                    <View style={styles.imageView}>
                        <Image source={require('../Images/scientific.png')} style={styles.imageStyle} />
                    </View>
                </ImageBackground>

                <Content>
                    <View style={styles.mainView}>
                        <Text style={styles.textStyle}>Scientific</Text>
                        <Text style={styles.textStyle2}>
                            A workshop to qualify young people on how to write a scientific report, and to familiarize them 
                            with the necessary conditions for writing the report, and what steps to write a report.
                        </Text>

                        <View style={styles.lineStyle}></View>

                        <View style={styles.innerView}>
                            <MaterialCommunityIcons type='MaterialCommunityIcons' name='map-marker-outline' size={20} color='#787878' />
                            <Text style={[styles.textStyle2, { marginLeft: 8 }]}>Wasit Youth Centre</Text>
                        </View>

                        <View style={styles.innerView}>
                            <EvilIcons type='EvilIcons' name='calendar' size={20} color='#787878' />
                            <Text style={[styles.textStyle2, { marginLeft: 8 }]}>2019.7.7 - 2019.8.8</Text>
                        </View>

                        <View style={styles.innerView}>
                            <AntDesign type='AntDesign' name='clockcircleo' size={16} color='#787878' style={{ marginLeft: 2, marginRight: 2 }} />
                            <Text style={[styles.textStyle2, { marginLeft: 8 }]}>8:30am - 11:30am</Text>
                        </View>

                        <Button style={styles.btnStyle2} onPress={() => Actions.registration()}>
                            <Text style={styles.btnTextStyle2}>Register</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 40
    },
    textStyle: { 
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20
    },
    textStyle2: {
        fontSize: 12,
        textAlign: 'justify',
        color: '#787878'
    },
    lineStyle: {
        borderWidth: 1,
        borderColor: '#6a6a6a',
        marginTop: 10
    },
    innerView: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    imageView: {
        position: 'absolute',
        bottom: -20,
        borderWidth: 1,
        borderColor: '#787878',
        alignSelf: 'center'        
    },
    imageStyle: {
        width: 220,
        height: 150
    },
    btnStyle2: {
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 15,
        alignSelf: 'center'
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    }
})