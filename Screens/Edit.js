import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity , AsyncStorage} from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import axios from "axios";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const GLOBAL = require('../routes/global');


export default class Edit extends Component {
    constructor(){
        super();
        this.state = {
            jsonResult : [],
            phoneNumber  : null,
            address : null,
            poBox : null,
            city : null,
            loaded: true,
            error: null,
            userToken  : null,
            isUserloaded : false,
            baseUrl : null,
            profileImg : null,
            photoname  : null,
            base64Img : null

        }
    }
    async componentDidMount(){
        this.setState({baseUrl : GLOBAL.baseURL})
         await this._loadInitialState().done();
     }
     _loadInitialState = async() => {
        var usrId = await AsyncStorage.getItem('user_id');
        let usrToken = await AsyncStorage.getItem('user_token');
        let jsonResultp = JSON.parse(await AsyncStorage.getItem('UserProfileData'));
        let userimageUrl = this.state.baseUrl+'app/webroot/img/user_upload/'+jsonResultp.photo;
        console.log(jsonResultp);
        this.setState({profileImg : userimageUrl})
        this.setState({
            userId:usrId, userToken:usrToken , 
            isUserloaded : true, 
            jsonResult : jsonResultp,
            phoneNumber : jsonResultp.phone,
            address: jsonResultp.address,
            photo : jsonResultp.photo,
            city : jsonResultp.city
        });
    }
    saveData = async () => {
        let url =  this.state.baseUrl + 'Apicalls/memberupdateinfo';
        var token  = this.state.userToken;
        token = token.replace(/["']/g, "") ;
        var bodyFormData  = new FormData();
        bodyFormData.append("token" , token);
        bodyFormData.append("photo" , this.state.base64Img);
        bodyFormData.append("phone" , this.state.phoneNumber);
        bodyFormData.append("city" , this.state.city);
        bodyFormData.append("address" , this.state.address);
        bodyFormData.append("photo_name" , this.state.photoname);
        axios({
            method : 'POST',
            url  : url,
            data : bodyFormData,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then((res) => {
            if(res.data.valid == 1){
                AsyncStorage.removeItem('UserProfileData');
                let url =  this.state.baseUrl + 'Apicalls/memberinfo';
                axios({
                    method : 'POST',
                    url  : url,
                    data : bodyFormData,
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then((response) => {
                    this.setState({jsonResult : response.data.member_info});
                    console.log(response.data.member_info)
                    AsyncStorage.setItem('UserProfileData',  JSON.stringify(this.state.jsonResult));
                })
                alert(res.data.message);
            }
            if(res.data.valid == 2){
                alert(res.data.message);
            }
            if(res.data.valid == 0){
                alert(res.data.message);
            }
        })
        .catch((err) => {
            alert(err);

        })

    }
    _pickDocument = async () => {
        try{
        let result = await DocumentPicker.getDocumentAsync({})
        this.setState({profileImg : result.uri});
        this.setState({photoname : result.name});
        const base64 = await FileSystem.readAsStringAsync(this.state.profileImg, { encoding: 'base64' });
        this.setState({base64Img : base64})
        }
        catch(err){
            throw err;
        }
        
   
    }
   
    render() {
        return(
            <Container>
                <Header style={styles.headerStyle}>
                    <Left style={{ flex: 0.2 }}>
                        <Button transparent onPress={() => Actions.drawerOpen()}>
                            <Feather type='Feather' name='menu' size={20} color='#323232' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titleStyle}>Edit</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                        <TouchableOpacity onPress={() => Actions.profile()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity>
                    </Right>
                </Header>

                <HomeButtons Title='Profile' />

                <Content>
                    <View style={{ alignSelf: 'center' }}>
                        <Image source={require('../Images/HimmahLogo.png')} style={styles.imageStyle2} />
                    </View>

                    <View style={styles.imageView}>
                        <Image
                        source={{uri : this.state.profileImg}}
                        style={styles.imageStyle}
                          />
                        <Button style={styles.btnStyle} onPress={this._pickDocument }>
                            <Text style={styles.btnTextStyle}>Change Picture</Text>
                        </Button>                      
                        </View>

                    <View style={styles.viewStyle}>
                        <Text>Phone Number:</Text>
                        <Item regular style={styles.inputItemStyle}>
                            <Input style={styles.inputTextStyle}
                            value = {this.state.phoneNumber}
                            editable = {this.props.editable}
                            onChangeText = {(x)=>this.setState({phoneNumber : x})}    
                                                />
                        </Item>
                    </View>

                    <View style={[styles.viewStyle, { marginTop: 25 }]}>
                        <Text>Address:</Text>
                        <Item regular style={styles.inputItemStyle}>
                            <Input style={styles.inputTextStyle}
                            value  = {this.state.address}
                            editable ={this.props.editable}
                            onChangeText ={(x) => this.setState({address : x})} 
                            placeholder='' />
                        </Item>
                    </View>

                    <View style={[styles.viewStyle, { marginTop: 25 }]}>
                        <Text>PO BOX:</Text>
                        <Item regular style={styles.inputItemStyle}>
                            <Input style={styles.inputTextStyle}
                            value  = {this.state.poBox}
                            editable ={this.props.editable}
                            onChangeText ={(x) => this.setState({poBox : x})} 
                            placeholder='' />
                        </Item>
                    </View>

                    <View style={[styles.viewStyle, { marginTop: 25 }]}>
                        <Text>City:</Text>
                        <Item regular style={styles.inputItemStyle}>
                            <Input style={styles.inputTextStyle}
                            value  = {this.state.city}
                            onChangeText ={(x) => this.setState({city : x})} 
                            placeholder='' />
                        </Item>
                    </View>

                    <Button style={styles.btnStyle2}
                        onPress = {this.saveData}>
                        <Text style={styles.btnTextStyle2}>Update Profile</Text>
                    </Button>
                </Content>
            </Container>
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
    imageView: { 
        alignSelf: 'center', 
        borderWidth: 1,
        borderColor: '#787878',
        width: 150,
        alignItems: 'center',
        marginTop: 15
    },
    imageStyle: {
        width: 120,
        height: 150,
        marginTop: 5
    },
    imageStyle2: {
        width: 60,
        height: 70,
        marginTop: 15
    },
    viewStyle: { 
        alignSelf: 'center',
        marginTop: 15,
        alignItems: 'center'
    },
    inputItemStyle: {
        marginTop: 5,
        width: '40%',
        height: 30
    },
    inputTextStyle: { 
        textAlign: 'center', 
        fontSize: 12 
    },
    btnStyle2: {
        alignSelf: 'center',
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 20,
        marginBottom: 20,
        elevation: 0
    },
    btnStyle:{
        backgroundColor : "grey",
        height:34
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 12
    },
    btnTextStyle :{
        color: '#fff',
        fontSize: 11,
        flex : 1,
        textAlign: "center",
    },
})