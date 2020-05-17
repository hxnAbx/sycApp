import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage,SafeAreaView,ScrollView} from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item ,Drawer} from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import axios from "axios";
const GLOBAL = require('../routes/global');
import SideBar from '../Screens/SideBar'


export default class Cerrification extends Component {
    
    closeDrawer() {
        this.drawer._root.close()
    };

    openDrawer() { 
        this.drawer._root.open() 
    };

    render() {
        return (
            <Drawer 
            ref={(ref) => { this.drawer = ref; }} 
            content={<SideBar navigator={this.navigator} close={() => this.closeDrawer()} />}
            onClose={() => this.closeDrawer()}
            openDrawerOffset={0.4}
        > 
        <SafeAreaView style={styles.container}>
        <ScrollView>
        <Header style={styles.headerStyle}>
                    <Left style={{ flex: 0.2 }}>
                        <Button transparent onPress={() => this.openDrawer()}>
                            <Feather type='Feather' name='menu' size={20} color='#323232' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titleStyle}>Event Categories</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                        <TouchableOpacity onPress={() => Actions.summer()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity>
                    </Right>
                </Header>

                <View style={styles.row}>
                <View style={styles.bgBox}>
                    <Text style={styles.bgBoxText}>Open Day</Text>
                </View>
                    <View style={styles.bgBox}>
                    <Text style={styles.bgBoxText}>Team Training</Text>
                    </View>
                </View>
                <View style={styles.row}>
                <View style={styles.bgBox}>
                <Text style={styles.bgBoxText}>Sports</Text>
                </View>
                    <View style={styles.bgBox}>
                    <Text style={styles.bgBoxText}>Cultural Award</Text>
                    </View>
                </View>
            
            </ScrollView>
        </SafeAreaView>
    </Drawer>
            



        )}

}

const styles = StyleSheet.create({
    headerStyle: { 
        backgroundColor: '#f2f2f2', 
        elevation: 0,
        height: 50,
        marginTop: 18
    },bgBox:{
        backgroundColor:"#2F2F84",
        width:"40%",
        marginLeft:"6.5%",
        marginTop:"10%",
        height:150},
        bgBoxText:{
            color:"#fff",
            fontFamily: "helvetica-regular",
            width:"100%",
            fontSize:16,
            alignSelf:"center",
            textAlign:"center",
            marginTop:"35%"
        },
    container: {
      backgroundColor: 'white'
    },
    headerBack:{
        backgroundColor : '#c2c2c2'
    },
    menu: {
        position: "absolute",
        width: 25,
        height: 25,
        top: 40,
        left: 10,
        zIndex: 3,
    },
    menuImg: {
        width:'100%',
        height:'100%',
    },  titleStyle: { 
        color: '#323232', 
        fontSize: 16, 
        alignSelf: 'center' 
    },
    menuWrapper: {
        position: "absolute",
        flexDirection: "row",
        left: 10,
        zIndex: 3,
        top: 70,
        
    },
    li: {
        backgroundColor: "white",
        paddingLeft: 7,
        paddingTop: 1,
        paddingRight: 7,
        paddingBottom: 1,
        margin: 4,
        fontSize: 11,
        fontFamily: "helvetica-regular"
    },
    subMenuWrapper: {
        position: "absolute",
        flexDirection: "row",
        right: 90,
        zIndex: 3,
        top: 110,
        
    },
    submenu: {
        backgroundColor: "white",
        paddingLeft: 5,
        paddingTop: 2,
        paddingRight: 5,
        paddingBottom: 2,
        margin: 5,
        fontSize: 9
    },
    active: {
        backgroundColor: "#333333",
        color: "white",
    },
    contentWrapper: {
        margin: 20,
        marginTop: 10
    },
    logoContainer: {
        marginTop:150,
    },
    img1: {
        width:50,
        height:50
    },
    profilePicContainer: {
        borderWidth:1,
        borderColor:"#666",
        marginTop:20
    },
    img2: {
        width:150,
        height:150
    },
    h1: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 5,
        fontFamily: "helvetica-bold",
    },
    h2: {
        fontSize: 13,
        fontWeight: "bold",
        margin: 5,
        fontFamily: "helvetica-bold",
    },
    manualSpace :{
        textAlign: "right",
        width:"100%"
    },
    row: {
        flexDirection: "row"
    },
    col: {
        margin: 20
    },
    item: {
        borderLeftColor: "#666",
        borderLeftWidth: 1,
        width: 100
    },
    itemTittle: {
        backgroundColor:"#eee",
        padding: 5
    },
    itemP: {
        padding: 5,
    },
    footer: {
        textAlign: "center"
    },
    button: {
        marginTop: 5
    },
    footerWrapper: {
        marginBottom: 50,
    },
    edit: {
        width: 20,
        height: 20,
        position:"absolute",
        right: 20,
        top: 130
    },
    formWrapper: {
        marginTop: 30,
        marginBottom: 30
      },
      formItemWrapper: {
        marginTop: 10,
      },
      TextInput: {
          padding: 2,
          borderColor: '#eee',
          borderWidth: 1,
          marginTop:3,
    
      },
      icon: {
          width:15,
          height:15,
          margin: 10
      },
      PickerContainer: {
          borderWidth: 1,
          borderColor: "#eee",

      },
      socialWrapper: {

    },
    social: {
        flexDirection: "row",
        

    },
    formLabel : {
      fontFamily: "helvetica-light",
    },   
    buttonContaier:{
        textAlign:"center",
        alignItems:"center",
        alignContent:"center"
    },
    button: {
        alignContent:"center",
        alignSelf:"center",
        marginLeft:'45%',
        marginRight:'45%',
        flex:1,
        color:"white",
       fontFamily: "helvetica-regular",
    },
    p: {
       fontFamily: "helvetica-light",
        lineHeight: 14,
        margin: 5,
        paddingTop : 3,
        fontWeight: "bold"
    },
    map :{
        height:220,
        flex:1
    }

  });