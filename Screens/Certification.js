import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage,SafeAreaView,ScrollView} from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item ,Drawer} from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import axios from "axios";
const GLOBAL = require('../routes/global');
import SideBar from '../Screens/SideBar'
import * as DocumentPicker from 'expo-document-picker';


export default class Cerrification extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "key0",
            cert1 : "https://pngimage.net/wp-content/uploads/2018/06/select-icon-png-2.png",
            cert2 : "https://pngimage.net/wp-content/uploads/2018/06/select-icon-png-2.png",
            cert3 : "https://pngimage.net/wp-content/uploads/2018/06/select-icon-png-2.png",
            cert4 : "https://pngimage.net/wp-content/uploads/2018/06/select-icon-png-2.png",
        }
    }

    onValueChange(value) {
        this.setState({
          selected: value,
          gender: value
        });
    }
    _pickDocumentOne = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        this.setState({cert1 : result.uri});
		  //alert(result.uri);
    }
    _pickDocumentTwo = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        this.setState({cert2 : result.uri});
		  //alert(result.uri);
    }
    _pickDocumentThree = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        this.setState({cert3 : result.uri});
		  //alert(result.uri);
    }
    _pickDocumentFour = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        this.setState({cert4 : result.uri});
		  //alert(result.uri);
    }

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
                        <Title style={styles.titleStyle}>Certificate</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                        <TouchableOpacity onPress={() => Actions.uploadCertification()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity>
                    </Right>
                </Header>
            
            <View style={styles.row} >
                <View style={styles.imageViewBOx}>

                            <View >
                                <View style={styles.imageViewHolder}>
                                    <Image
                                        style={styles.imageView}
                                        source={{uri :this.state.cert1}}
                                    />
                                </View>    
                                <Button style={styles.btnStyle} onPress={ this._pickDocumentOne }>
                                    <Text style={styles.btnTextStyle}>Certificate1</Text>
                                </Button>                            
                            </View>
                </View>
                <View style={styles.imageViewBOx}>

                <View >
                    <View style={styles.imageViewHolder}>
                        <Image
                            style={styles.imageView}
                            source={{uri :this.state.cert2}}
                        />
                    </View>    
                    <Button style={styles.btnStyle} onPress={ this._pickDocumentTwo }>
                        <Text style={styles.btnTextStyle}>Certificate2</Text>
                    </Button>                            
                </View>
                </View>

                </View>

                <View style={styles.row} >
                <View style={styles.imageViewBOx}>

                            <View >
                                <View style={styles.imageViewHolder}>
                                    <Image
                                        style={styles.imageView}
                                        source={{uri :this.state.cert3}}
                                    />
                                </View>    
                                <Button style={styles.btnStyle} onPress={ this._pickDocumentThree }>
                                    <Text style={styles.btnTextStyle}>Certificate3</Text>
                                </Button>                            
                            </View>
                </View>
                <View style={styles.imageViewBOx}>

                <View >
                    <View style={styles.imageViewHolder}>
                        <Image
                            style={styles.imageView}
                            source={{uri :this.state.cert4}}
                        />
                    </View>    
                    <Button style={styles.btnStyle} onPress={ this._pickDocumentFour }>
                        <Text style={styles.btnTextStyle}>Certificate4</Text>
                    </Button>                            
                </View>
                </View>

                </View>

             <Button style={styles.mainButton}><Text style={styles.mainButtonText}>Upload</Text></Button>
            
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
    }
    ,mainButton:{
        backgroundColor:"#494949",
        width:"76%",
        marginLeft:"12%",
        marginTop:"2%"
    },  
    mainButtonText:{
        color:'#fff',
        flex:1,
        fontFamily: "helvetica-regular",
        textAlign:"center",
        alignSelf:"center",
        alignItems:"center",
        alignContent:"center",
       
    },
    imageViewBOx:{
        width:"50%"
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
        flexDirection: "row",
        marginLeft:"10%",
        width:"80%",marginTop:"10%"
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
    },imageViewHolder:{
        marginTop:"10%",
        backgroundColor: '#f2f2f2',
        width: "90%",
        height: 150,
        marginLeft:"5%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageView: {
        backgroundColor: '#f2f2f2',
        width: "80%",
        height: 150,
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        
        borderColor: '#adadad'
    }, btnStyle: {
        width: "90%",
        height: 35,
        marginLeft:"5%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        elevation: 0,
       
    },
    btnTextStyle:{
        color:"#fff",
        fontFamily: "helvetica-light",
    }

  });