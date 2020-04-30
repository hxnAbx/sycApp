import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item ,Drawer} from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import axios from "axios";
const GLOBAL = require('../../routes/global');
import SideBar from './SideBar'


export default class Registration extends Component {
    constructor(props){
        super(props)
        this.state = {
            jsonResult : [],
            loaded: true,
            error: null,
            userToken  : null,
            isUserloaded : false,
            baseUrl : null,
            profileImg : null,
            eventId: null,
            fullname: null,
            email:null,
            phoneNumber:null,
            parentphone:null
            
        }
    }
    async componentDidMount(){
        this.setState({baseUrl : GLOBAL.baseURL})
        let evenId = await AsyncStorage.getItem('userevent_id')
        this.setState({eventId:evenId})
    }
    
    registerEvent(){
        let url =  this.state.baseUrl + 'Apicalls/eventRegister';
        var name  = this.state.name
        var phone = this.state.phone
        var email = this.state.email
        var evenId = this.state.eventId

        var bodyFormData = new FormData();
        bodyFormData.append('event_id' , evenId);
        bodyFormData.append('name',name);
        bodyFormData.append('email',email);
        bodyFormData.append('mobile',phone);

        axios({
            method : 'POST',
            url : url,
            data : bodyFormData,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
          })
          .then((res) => {
              if(res.data.valid == 0){
                alert('please enter all required fields')
              }
              if(res.data.valid == 1){
                Actions.registerSuccessAr()
            }
          })
          .catch((err) => {
              console.log(err)
          })


    }

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
                    <TouchableOpacity onPress={() => Actions.summerAr()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={styles.titleStyle}>التسجيل في البرنامج</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                    <Button transparent onPress={() => this.openDrawer()}>
                            <Feather type='Feather' name='menu' size={20} color='#323232' />
                        </Button>
                    </Right>
                </Header>

                <HomeButtons Title="Registration" />

                <Content>
                    <View style={styles.mainView}>
                        <Text style={styles.textStyle}>قم بتعبئة البيانات التالية للتسجيل في البرنامج.</Text>

                        <View style={styles.innerView}>
                            <View style={{ marginBottom: 8 }}>
                                <View style={{ flexDirection: 'row-reverse' }}>
                                    <Text style={styles.textStyle}>*</Text>
                                    <Text style={{ fontSize: 10 }}>*اسم الناشئ باللغة العربية</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input 
                                    style={styles.inputTextStyle} 
                                    placeholder='' 
                                    onChangeText = {(text) => this.setState({fullname:text})}

                                    />
                                </Item>
                            </View>

                            <View style={styles.innerView2}>
                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>رقم الهوية</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>

                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>تاريخ انتهاء الهوية</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>
                            </View>

                            <View style={styles.innerView2}>
                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>رقم الجواز</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>

                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>تاريخ انتهاء الجواز</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>
                            </View>

                            <View style={styles.innerView2}>
                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>الجنسية</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>

                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>تاريخ الميلاد</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>
                            </View>

                            <View style={styles.innerView2}>
                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>الإمارة</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>

                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>المنطقة</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>
                            </View>

                            <View style={styles.innerView2}>
                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>الصف</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>

                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>المدرسة</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>
                            </View>

                            <View style={styles.innerView2}>
                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>صندوق البريد</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>

                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>العنوان</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>
                            </View>

                            <View style={styles.innerView2}>
                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>البريد الإلكتروني للناشئ</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} 
                                        onChangeText = {(text) => this.setState({phoneNumber:text})} 
                                        placeholder='' />
                                    </Item>
                                </View>

                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>رقم هاتف الناشئ</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input 
                                        style={styles.inputTextStyle} 
                                        placeholder=''
                                        onChangeText = {(text) => this.setState({email:text})}
                                         />
                                    </Item>
                                </View>
                            </View>

                            <View style={styles.innerView2}>
                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>البريد الإلكتروني لولي الأمر</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} 
                                        placeholder=''
                                        onChangeText = {(text) => this.setState({parentphone:text})} />
                                    </Item>
                                </View>

                                <View style={{ width: '47.5%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>*</Text>
                                        <Text style={{ fontSize: 10 }}>رقم هاتف ولي الأمر</Text>
                                    </View>

                                    <Item regular style={styles.inputItemStyle}>
                                        <Input style={styles.inputTextStyle} placeholder='' />
                                    </Item>
                                </View>
                            </View>
                        </View>

                        <Button style={styles.btnStyle2} onPress={() => this.registerEvent() }>
                            <Text style={styles.btnTextStyle2}>إرسال</Text>
                        </Button>
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
    mainView: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 10
    },
    textStyle: {
        fontSize: 10,
        color: 'red'
    },
    innerView: {
        marginTop: 15
    },
    innerView2: { 
        marginBottom: 6, 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    inputItemStyle: {
        marginTop: 2,
        width: '100%',
        height: 23
    },
    inputTextStyle: { 
        textAlign: 'center', 
        fontSize: 12 
    },
    btnStyle2: {
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 10,
        alignSelf: 'center',
        marginTop: 35
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    }
})