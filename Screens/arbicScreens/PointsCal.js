import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item,Drawer } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import SideBar from './SideBar'




export default class PointsCal extends Component {
    closeDrawer() {
        this.drawer._root.close()
    };

    openDrawer() { 
        this.drawer._root.open() 
    };
    render() {
        return(
            <Drawer 
            ref={(ref) => { this.drawer = ref; }} 
            content={<SideBar navigator={this.navigator} close={() => this.closeDrawer()} />}
            onClose={() => this.closeDrawer()}
            openDrawerOffset={0.4}
            side="right"
        > 
            <Container>
                <Header style={styles.headerStyle}>
                    <Left style={{ flex: 0.2 }}>
                    <TouchableOpacity onPress={() => Actions.himmahAr()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={styles.titleStyle}>تصنيف نقاط هِمّة</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                    <Button transparent onPress={() => this.openDrawer()}>
                            <Feather type='Feather' name='menu' size={20} color='#323232' />
                        </Button>
                    </Right>
                </Header>

                <HomeButtons Title='Himmah' />

                <Content>
                    <View style={{ alignSelf: 'center' }}>
                        <Image source={require('../../Images/HimmahLogo.png')} style={styles.logoStyle} />
                    </View>
                    <View style={styles.imageHolder}>
                        <Image source ={require('../../Images/pointsar.png')} style={styles.img} />
                    </View>
                </Content>
            </Container>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: { 
        backgroundColor: '#f2f2f2', 
        elevation: 0,
        height: 50,
        marginTop: 23
    },
    titleStyle: { 
        color: '#323232', 
        fontSize: 16, 
        alignSelf: 'center' 
    },
    logoStyle: {
        width: 85,
        height: 100,
        marginTop: 15
    },
    imageHolder:{
        width: "90%",
        margin:10,
        marginTop: 50
    },
    img: {
        width: "100%",
        margin:10,
        marginTop:0,
        resizeMode: "contain",
        height: 500
 
      }
})