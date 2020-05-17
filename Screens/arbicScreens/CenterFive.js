import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Button, Drawer } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import SideBar from "../arbicScreens/SideBar"
import MapScreen from '../MapScreen'


export default class CenterFive extends Component {
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
                <ImageBackground source={require('../../Images/AlThameed.jpg')} style={{ flex: 1 }} blurRadius={1.5} >
                    <Header transparent>
                        <Left>
                           
                            {/* <Button style={styles.searchButton}>
                                <Feather type='Feather' name='search' color='#fff' size={8} />                           
                            </Button> */}
                        </Left>
                        <Body />
                        <Right>
                        <Button transparent onPress={() => this.openDrawer()}>
                                <Feather type='Feather' name='menu' size={20} color='black' />
                            </Button>
                        </Right>
                    </Header>

                    <HomeButtons Title="Centers" />

                    <View style={styles.imageView}>                        
                        <ImageBackground source={require('../../Images/AlThameed.jpg')} style={styles.imageStyle}>
                            <View style={styles.arrowsView}>
                                <TouchableOpacity onPress={() => Actions.centerFourAr()} style={styles.touchableArrowStyle}>
                                    <Ionicons type='Ionicons' name='ios-arrow-dropleft-circle' size={22} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Actions.centerSixAr()} style={[styles.touchableArrowStyle, { alignItems: 'flex-end' }]}>
                                    <Ionicons type='Ionicons' name='ios-arrow-dropright-circle' size={22} color="black" />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                </ImageBackground>

                <Content style={{ marginTop: 20 }}>
                    <View style={styles.mainView}>
                    <View style={styles.locationView}>
                                <MapScreen />
                            </View>     
                        <View style={{ width: '49%' }}>
                            <Text style={styles.textStyle}>المنطقة الوسطى</Text>
                            <Text style={styles.textStyle}>مركز ناشئة الثميد</Text>
                            <Text style={[styles.textStyle, { fontSize: 10 }]}>ساعات العمل:</Text>

                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.textStyle2}>طوال العام: 5:00 مساءً إلى 8:00 مساءً</Text> 
                                <Text style={styles.textStyle2}>شهر رمضان: 9:30 مساءَ إلى 11:30 مساءَ</Text> 
                            </View>
                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.textStyle2}>الهاتف: 068848056</Text> 
                                <Text style={styles.textStyle2}>البريد الإلكتروني: althameed@sy.shj.ae</Text> 
                            </View>
                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.textStyle2}>
                                تمّ افتتاح مركز ناشئة الثميد عام 2004، حيث يقدّم العديد من الأنشطة والبرامج، ضمن مسارات أساسيّة هي الآداب واللغات والعلوم والتكنولوجيا وريادة الأعمال والفنون والرّياضة.

                                </Text>
                            </View>
                        </View>  

                                         
                    </View>                    
                </Content>                
            </Container>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    searchButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'black'
    },
    imageView: {
        position: 'absolute',
        bottom: -20,
        // borderWidth: 1,
        // borderColor: '#787878',
        alignSelf: 'center',
        // elevation: 10      
    },
    imageStyle: {
        width: 220,
        height: 150,
        justifyContent: 'flex-end'
    },
    imageStyle2: {
        width: 160,
        height: 230,
        marginBottom: 10
    },
    mainView: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: { 
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 15,
        textAlign:"right",
        fontFamily: "helvetica-regular"
    },
    textStyle2: {
        fontSize: 10,
        textAlign: 'right',
        color: '#787878',
        fontFamily: "helvetica-regular"
    },
    locationView: { 
        width: '49%', 
        height: 235,
        alignSelf: 'flex-end',
        marginBottom: 15
    },
    arrowsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // position: 'absolute',
        width: 200,
        alignSelf: 'center',
        // bottom: 0,
        marginBottom: 5
    },
    arrowsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        position: 'absolute',
        width: '100%',
        bottom: 0
    },
    touchableArrowStyle: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 9
    }
})