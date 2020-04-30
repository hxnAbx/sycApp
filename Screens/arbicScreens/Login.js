import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, AsyncStorage, KeyboardAvoidingView, Keyboard , Platform , TouchableWithoutFeedback,   } from 'react-native';
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item , Drawer } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import Fontisto from 'react-native-vector-icons/Fontisto'
import HomeButtons from './HomeButtons';
import { Actions } from 'react-native-router-flux';
import axios from "axios";
import { ScrollView } from 'react-native-gesture-handler';
import SideBar from "../arbicScreens/SideBar"

const GLOBAL = require('../../routes/global');

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            data: null,
            loaded: true,
            username : '',
            passowrd : '',
            error: null,
            userId : null,
            userToken : null,
            baseUrl : null,
            profileImg : null,
            isUserloaded : false,
        }
    }
    async componentDidMount(){
        this.setState({baseUrl : GLOBAL.baseURL})
         await this._loadInitialState().done();
    }
    _loadInitialState  = async() => {
        var usrToken = await AsyncStorage.getItem('user_token');
        var usrId = await AsyncStorage.getItem('user_token');
        if(usrToken !== null){
            this.setState({ isUserloaded : true } );
        }
        else{
            this.setState( { isUserloaded : false } );
        }
        this.setState({userId:usrId, userToken:usrToken});
        if(this.state.userToken !== null){
            Actions.profileAr();
        }
    }
    getData = async ()=>{
        var username = this.state.username;
        var password = this.state.password;
        var formdata = new FormData();
        this.setState({loaded:false, error: null});
        let url = this.state.baseUrl + '/Apicalls/memberlogin';
        formdata.append('username',username)
        formdata.append('password', password)
        axios({
            method : 'POST',
            url : url,
            data : formdata,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then((response) => {
            let data = response.data;
            this.setState({loaded:true, data })
            if(data.valid == 0 ){
                alert("Sorry unable to login. Please check username and password")
            }
            if(data.valid == 1){
                AsyncStorage.setItem('user_id' , JSON.stringify( data.user_id));
                AsyncStorage.setItem('user_token',JSON.stringify(data.token));
                this.setState({userId : data.user_id});
                Actions.profile()
            }
        })
        .catch((err)=>{
            this.setState({loaded: true, error: err.message});
            alert("Sorry unable to login.");
            console.log(err);
        });
       
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
                side="right"
            > 
            <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"} style={{flex:1}} >
            
            <Container>
                <ImageBackground source={require('../../Images/logindp.png')} style={{ flex: 1 }} blurRadius={1.5}>
                    <Header transparent>
                        <Left style={{ flex: 0.2 }}>
                            
                        </Left>
                        <Body />
                        <Right>
                        <Button transparent onPress={() => this.openDrawer()}>
                                <Feather type='Feather' name='menu' size={20} color='#323232' />
                            </Button>
                        </Right>
                    </Header>

                    <HomeButtons Title="Login" />

                    <View style={styles.imageView}>
                        <Image source={require('../../Images/logindp.png')} style={styles.imageStyle} />
                    </View>
                </ImageBackground> 
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                 <React.Fragment>
                <Content style={{ marginTop: 20 }}>                 
                    <View style={styles.mainView}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image source={require('../../Images/HimmahLogo.png')} style={styles.logoStyle} />
                        </View>
                        
                        <View>
                            <View>
                                <Text style={{ fontSize: 10 }}>اسم المستخدم*</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <FontAwesome type='FontAwesome' name='user' size={11} color='#9d9fad' />
                                <Input style={styles.inputTextStyle} placeholder='اسم المستخدم'
                                onChangeText = {(text) => this.setState({username:text})}
                                                                />
                            </Item>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <View>
                                <Text style={{ fontSize: 10 }}>كلمة المرور*</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle} placeholder='كلمة المرور'
                                onChangeText= {(text) => this.setState({password:text})}
                                secureTextEntry={true}
                                returnKeyLabel = {"Done"}

                                />
                            </Item>
                        </View>

                        <View style={{ marginTop: 13 }}>
                            <TouchableOpacity onPress={() => Actions.forgotPassAr()}>
                                <Text style={styles.forgotTextStyle}>هل نسيت كلمة المرور؟</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.btnsView}>
                       
                            
                            <Button style={styles.btnStyle2} onPress={() => Actions.signUp1Ar()} >
                                <Text style={styles.btnTextStyle2}>انضم إلينا</Text>
                            </Button> 

                            <Text style={styles.forgotTextStyle}>أو</Text> 
                            <Button style={styles.btnStyle2} onPress={this.getData}>
                                <Text style={styles.btnTextStyle2}>تسجيل الدخول</Text>
                            </Button>    
                                                 
                        </View>
                        
                    </View>
                </Content>
                </React.Fragment>
                        </TouchableWithoutFeedback>
            </Container>
            </KeyboardAvoidingView>
            </Drawer>
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
        flexDirection: 'row', 
        justifyContent: 'space-between',
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