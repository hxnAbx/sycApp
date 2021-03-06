import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView,ScrollView, TextInput,Picker, Linking} from 'react-native'
import { Container, Content,Button, Header, Left, Body, Right, Title, Input, Item , Drawer} from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import SideBar from './SideBar'

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
            side="right"
        > 
        <SafeAreaView style={styles.container}>
        <ScrollView>
        <Header style={styles.headerStyle}>
                    <Left style={{ flex: 0.2 }}>
                    <TouchableOpacity onPress={() => Actions.homeAr()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={styles.titleStyle}>تواصل معنا</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                    <Button transparent onPress={() => this.openDrawer()}>
                            <Feather type='Feather' name='menu' size={20} color='#323232' />
                        </Button>
                       
                    </Right>
                </Header>
            
        <View style={styles.contentWrapper}>
   
            <View>
              <Text style={styles.p}>يرجى ملء النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن</Text>
              
            </View>
           
            
            <View style={styles.formWrapper}>
                <View style={styles.formItemWrapper}>
                    <Text style={styles.formLabel}>الاسم:</Text>
                    <TextInput style={styles.TextInput}>
                        
                    </TextInput>
                </View>
                <View style={styles.formItemWrapper}>
                    <Text style={styles.formLabel}>البريد الإلكتروني:</Text>
                    <TextInput style={styles.TextInput}>
                        
                    </TextInput>
                </View>
                <View style={styles.formItemWrapper}>
                    <Text style={styles.formLabel}>رقم الهاتف:</Text>
                    <TextInput style={styles.TextInput}>
                        
                    </TextInput>
                </View>
                <View style={styles.formItemWrapper}>
                    <Text style={styles.formLabel}>اختر:</Text>
                    <View style={styles.PickerContainer}>
                        <Picker style={styles.PickerStyle}>
                            <Picker.Item label="استفسار" value="city1" style={styles.PickerStyle} />
                            <Picker.Item label="مقترح" value="city2" style={styles.PickerStyle} />
                            <Picker.Item label="ملحوظة" value="city2"  style={styles.PickerStyle}/>
                        </Picker>
                    </View>
                    
                </View>
                <View style={styles.formItemWrapper}>
                    <Text style={styles.formLabel}>الرسالة:</Text>
                    <TextInput style={styles.TextInput} >
                        
                    </TextInput>
                </View>



                <View style={styles.row}>
                <View style={styles.leftSide}>
                <View>
              <Text style={styles.h1}>كن أقرب إلينا وتواصل معنا عبر:</Text>
              
            </View>
            <View>
                <Text style={styles.h2}> مواقع التواصل الاجتماعي</Text>
            </View>
            <View style={styles.socialWrapper}>
                        <View style={styles.social}>
                        <TouchableOpacity   onPress={() => Linking.openURL('http://www.instagram.com/shjyouth')}>   
                        <Image
                            style={styles.icon}
                            source={require('../../assets/insta.png')}
                        />
                         </TouchableOpacity>
                         <TouchableOpacity   onPress={() => Linking.openURL('https://ar-ar.facebook.com/shjyouth/')}>   
                        <Image
                            style={styles.icon}
                            source={require('../../assets/fb.png')}
                        />
                        </TouchableOpacity>
                         <TouchableOpacity   onPress={() => Linking.openURL('http://twitter.com/shjyouth')}>   
                        <Image
                            style={styles.icon}
                            source={require('../../assets/twitter.png')}
                        />
                        </TouchableOpacity>
                         <TouchableOpacity   onPress={() => Linking.openURL('https://www.linkedin.com/company/sharjah-youth/')}>   
                        <Image
                            style={styles.icon}
                            source={require('../../assets/linkedin.png')}
                        />
                        </TouchableOpacity>
                         <TouchableOpacity   onPress={() => Linking.openURL('https://www.youtube.com/user/youthshj/videos')}>   
                        <Image
                            style={styles.icon}
                            source={require('../../assets/youtube.png')}
                        />
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <Text  style={styles.h2}>الأرقام التالية:</Text>
                </View>
                <View>
                    <Text  style={styles.p}>+971561886685 +97165933000
                    </Text>
                </View>
                <View>
                    <Text  style={styles.h2}> البريد الإلكتروني:</Text>
                </View>
                <View>
                    <Text  style={styles.p}> info@sy.shj.ae</Text>
                </View>

                </View>
                <View>
                    </View>
                    
                    <View style={styles.righSide}>  
                        <View style={styles.formItemWrapper}>
                        <Button  style={styles.buttonContaier}>
                        <Text style={styles.button}>إرسال </Text>
                        </Button>
                        <Button  style={styles.buttonContaier} onPress={() => Actions.trackFeedBackAr() }>
                        <Text style={styles.button}>تعقب الملاحظة</Text>
                        </Button>
                        <Button  style={styles.buttonContaier} onPress={() => Actions.feedBackHistoryAr() }>
                        <Text style={styles.button}>فئات الأحداث </Text>
                        </Button>
                        </View>
                    </View>
                    </View>
                </View>
            
                
                <View>
               
                <MapView       
                 style={styles.map}        
                 region={{          
                     latitude: 25.3159198,          
                     longitude: 55.5228779,          
                     latitudeDelta: 0.00100,         
                    longitudeDelta: 0.0100        
                      }}        
                      showsUserLocation={true}   
                  > 
                  <MapView.Marker 
                    coordinate = {{ "latitude" :  25.3159198, "longitude":  55.5228779 }}
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
        marginTop: 0
    },
    container: {
      backgroundColor: 'white'
    },
    righSide:{
        width:"40%"
    },
    leftSide:{
        width:"60%"
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
        alignSelf: 'center',
        fontFamily: "helvetica-regular"
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
        fontSize: 15,
        margin: 5,
        fontFamily: "helvetica-bold",
        textAlign:"right",
        color:"#636262"
    },
    h2: {
        fontSize: 13,
        margin: 5,
        fontFamily: "helvetica-bold",
        textAlign:"right",
        color:"#636262"
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
    buttonContaier:{
        textAlign:"center",
        alignItems:"center",
        alignContent:"center",
        backgroundColor:"#000",
        width:150,
        marginTop:10,
        textAlign:"center"
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
    PickerStyle:{
        fontFamily: "helvetica-regular",
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
        flexDirection: "row-reverse",
        

    },
    formLabel : {
      fontFamily: "helvetica-light",
      textAlign:"right"
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
        textAlign:'right'
    },
    map :{
        height:220,
        flex:1
    }

  });