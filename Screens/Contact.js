import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView,ScrollView, TextInput,Picker, } from 'react-native'
import { Container, Content, Header,Button,  Left, Body, Right, Title, Input, Item , Drawer} from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import MapView from 'react-native-maps';
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import CenterFive from './CenterFive';
// import Slider from 'react-native-slider'
import SideBar from '../Screens/SideBar'

export default class Contact extends Component {

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
                        <Title style={styles.titleStyle}>Contact Us</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                        <TouchableOpacity onPress={() => Actions.home()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity>
                    </Right>
                </Header>
            
        <View style={styles.contentWrapper}>
   
            <View>
              <Text style={styles.p}>Please fill out the form below and we will get back to you as soon as possible.</Text>
              
            </View>
           
            
            <View style={styles.formWrapper}>
                <View style={styles.formItemWrapper}>
                    <TextInput style={styles.TextInput}
                    placeholder="Name"
                    >
                        
                    </TextInput>
                </View>
                <View style={styles.formItemWrapper}>
                    <TextInput style={styles.TextInput}
                    placeholder="Email">
                        
                    </TextInput>
                </View>
                <View style={styles.formItemWrapper}>
                    <TextInput style={styles.TextInput}
                    placeholder="Phone Number"
                    >
                        
                    </TextInput>
                </View>
                <View style={styles.formItemWrapper}>
                    <View style={styles.PickerContainer}>
                        <Picker>
                            <Picker.Item label="Survey" value="Survey" />
                            <Picker.Item label="FeedBack" value="FeedBack" />
                        </Picker>
                    </View>
                    
                </View>
                <View style={styles.formItemWrapper}>
                    <TextInput style={styles.TextInput} 
                    placeholder="Message"
                    multiline
                    numberOfLines={4}
                    style={{height:200,borderWidth:1,borderColor:"#e1ecf4",textAlign:"left",textAlignVertical:"top"}}
                    >
                        
                    </TextInput>
                </View>
                
                
            </View>
            <View style={styles.row}>
                <View style={styles.leftSide}>
                <View>
              <Text style={styles.h1}>Contact us through our:</Text>
              
            </View>
            <View>
                <Text style={styles.h2}>Social Media</Text>
            </View>
            <View style={styles.socialWrapper}>
                        <View style={styles.social}>
                        <Image
                            style={styles.icon}
                            source={require('../assets/insta.png')}
                        />
                        <Image
                            style={styles.icon}
                            source={require('../assets/fb.png')}
                        />
                        <Image
                            style={styles.icon}
                            source={require('../assets/twitter.png')}
                        />
                        <Image
                            style={styles.icon}
                            source={require('../assets/linkedin.png')}
                        />
                        <Image
                            style={styles.icon}
                            source={require('../assets/youtube.png')}
                        />
                        
                    </View>
                    <View >
                    <Text  style={styles.h2}>Following numbers:</Text>
                </View>
                <View>
                    <Text  style={styles.p}>+971561886685, +97165933000
                    </Text>
                </View>
                <View>
                    <Text  style={styles.h2}>Email:</Text>
                </View>
                <View>
                    <Text  style={styles.p}> info@sy.shj.ae</Text>
                </View>
                </View>
                </View>
                <View style={styles.righSide}>
                <View style={styles.formItemWrapper}>
                    
                    <Button  style={styles.buttonContaier}>
                    <Text style={styles.button}>SEND </Text>
                    </Button>
                    <Button  style={styles.buttonContaier} onPress={() => Actions.trackFeedBack() }>
                    <Text style={styles.button}>Track FeedBack </Text>
                    </Button>
                    <Button  style={styles.buttonContaier} onPress={() => Actions.feedBackHistory() }>
                    <Text style={styles.button}>FeedBack History </Text>
                    </Button>
                    </View>
                </View>
                
            </View>
            
               

                <View>
               
                <MapView       
                 style={styles.map}        
                 region={{          
                     latitude: 25.316245,          
                     longitude: 55.523094,          
                     latitudeDelta: 0.00100,         
                    longitudeDelta: 0.0100        
                      }}        
                      showsUserLocation={true}   
                  > 
                  <MapView.Marker 
                    coordinate = {{ "latitude" : 25.316245, "longitude":  55.523094 }}
                    title={"Sharjah Youth Centre "}

                  />
                  </MapView>

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
        marginTop: 18,
    },
    righSide:{
        width:"40%"
    },
    leftSide:{
        width:"60%"
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
        fontFamily: "helvetica-regular",
    },
    h2: {
        fontSize: 13,
        fontWeight: "bold",
        margin: 5,
        fontFamily: "helvetica-regular",
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
        alignContent:"center",
        backgroundColor:"#000",
        width:150,
        marginTop:10,
        textAlign:"center"
    },
    button: {
        color:"white",
        textAlign:"center",
       fontFamily: "helvetica-regular",
       width:"100%"
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
        flex:1,
        marginTop:10
    }

  });