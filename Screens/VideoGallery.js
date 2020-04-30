import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Content, Header, Title, Right, Button, Left, Body , Drawer} from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux'
import SideBar from '../Screens/SideBar'


export default class VideoGallery extends Component {
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
        > 
            <Container>
                <Header style={styles.headerStyle}>
                    <Left style={{ flex: 0.2 }}>
                        <Button transparent onPress={() => this.openDrawer()}>
                            <Feather type='Feather' name='menu' size={20} color='#323232' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titleStyle}>Video Gallery</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                        <TouchableOpacity onPress={() => Actions.photoGallery()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity>
                    </Right>
                </Header>

                <Content>
                <ImageBackground resizeMode='cover' source={require('../Images/galleryPic1.png')} style={styles.imagesView}>
                    <HomeButtons Title="videoGallery" />

                    <View style={styles.imageTitleView}>
                        <Text style={styles.textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                </ImageBackground>

                <ImageBackground resizeMode='cover' source={require('../Images/galleryPic2.png')} style={[styles.imagesView, { marginTop: -55 }]}>
                    <View style={styles.imageTitleView}>
                        <Text style={styles.textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                </ImageBackground>

                <ImageBackground resizeMode='cover' source={require('../Images/galleryPic3.png')} style={[styles.imagesView, { marginTop: -110 }]}>
                    <View style={[styles.imageTitleView, { bottom: 0 }]}>
                        <Text style={styles.textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                </ImageBackground>
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
        fontSize: 14, 
        alignSelf: 'center' 
    },
    imageTitleView: {
        position: 'absolute',
        bottom: 55,
        backgroundColor: 'black',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        opacity: 0.6
    },
    imagesView: { 
        // flex: 0.6, 
        paddingTop: 15, 
        height: 300 
    },
    textStyle: {
        color: '#fff'
    }
})