import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity , AsyncStorage} from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Drawer } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import HomeButtons from './HomeButtons'
import axios from "axios";
import { Actions } from 'react-native-router-flux';
import SideBar from '../Screens/SideBar'
const GLOBAL = require('../routes/global');

export default class Profile extends Component {
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
            jsonResult : {},
            UserProfileData: null,
            UserProfileImage:null,
            UserProfileName:null

        }
    }
    async componentDidMount(){
        this.setState({baseUrl : GLOBAL.baseURL})
         await this._loadInitialState().done();

    }
      

    getData = async () => {
        let url =  this.state.baseUrl + 'Apicalls/memberinfo';
        var token  = this.state.userToken;
        token = token.replace(/["']/g, "") ;
        var bodyFormData  = new FormData();
        bodyFormData.append("token" , token);
        axios({
            method : 'POST',
            url  : url,
            data : bodyFormData,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then((response) => {  
            if(response.data.valid == 1){
                this.setState({jsonResult : response.data.member_info });
                let userimageUrl = this.state.baseUrl+'app/webroot/img/user_upload/'+response.data.member_info.photo;
                this.setState({profileImg : userimageUrl})
                AsyncStorage.setItem('UserProfileData',  JSON.stringify(response.data.member_info));
                AsyncStorage.setItem('UserProfileImage',  JSON.stringify(response.data.member_info.photo));
                AsyncStorage.setItem('UserProfileName',  JSON.stringify(response.data.member_info.name));
                this.setState({
                    UserProfileName:JSON.stringify(response.data.member_info.name),
                    UserProfileImage:JSON.stringify(response.data.member_info.photo),
                    UserProfileData:JSON.stringify(response.data.member_info),
                    isUserloaded:true
                })
            }
            if(response.data.valid == 2){
                console.log("Session data is expire");
            }
         })
        .catch((err) => {    
            console.log(err);
        })
    }
    _loadInitialState = async() => {
        var usrId = await AsyncStorage.getItem('user_id');
        let usrToken = await AsyncStorage.getItem('user_token');
        this.setState({userId:usrId, userToken:usrToken , isUserloaded : true})
        await this.getData();
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
                        <Button transparent onPress={() => this.openDrawer()}>
                            <Feather type='Feather' name='menu' size={20} color='#323232' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titleStyle}>Member Profile</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }} />
                </Header>

                <HomeButtons Title='Profile' />

                <Content>
                    <TouchableOpacity onPress={() => Actions.edit()} style={styles.editIconView}>
                        <Feather type='Feather' name='edit' size={20} color='#323232' />
                    </TouchableOpacity>

                    <View style={{ alignSelf: 'center' }}>
                        <Image source={require('../Images/HimmahLogo.png')} style={styles.logoStyle} />
                    </View>

                    <View style={styles.imageView}>
                        <Image 
                        source={{uri : this.state.profileImg}}
                        style={styles.imageStyle} />                        
                    </View>

                    <Text style={styles.textStyle}>Membership Details:</Text>
                    <Text style={styles.textStyle}>{ this.state.jsonResult.name }</Text>

                    <View style={styles.mainView}>
                        <View style={[styles.view1, { marginRight: 20 }]}>
                            <Text style={styles.textStyle1}>Points:</Text>
                            <Text style={styles.textStyle2}>{this.state.jsonResult.points}</Text>
                        </View>

                        <View style={styles.view1}>
                            <Text style={styles.textStyle1}>Miles:</Text>
                            <Text style={styles.textStyle2}>{this.state.jsonResult.miles}</Text>
                        </View>
                    </View>

                    <View style={[styles.mainView, { marginTop: 40 }]}>
                        <View style={[styles.view1, { marginRight: 20 }]}>
                            <Text style={styles.textStyle1}>Expiry Date:</Text>
                            <Text style={styles.textStyle2}>{this.state.jsonResult.expiry_date}</Text>
                            
                        </View>

                        <View style={styles.view1}>
                            <Text style={styles.textStyle1}>Category:</Text>
                            <Text style={styles.textStyle2}>{this.state.jsonResult.membership}</Text>
                            
                        </View>
                    </View>
                    <View style={styles.row}> 
                        <View style={styles.leftSide}>
                        <Button style={styles.buttonConatiner} onPress={()=> Actions.attendence() }>
                            <Text style={styles.button}>Member Attendance </Text>
                            </Button>
                        </View>
                        <View style={styles.rightSide}>
                        <Button style={styles.buttonConatiner} onPress={()=> Actions.uploadCertification() }>
                            <Text style={styles.button}>Certificates </Text>
                            </Button>
                        </View>
                    </View>
                    <View style={styles.view2}>
                        <Text>Forgot your card?</Text>
                        <Text>You can scan code here</Text>
                        <Button style={styles.btnStyle2} >
                            <Text style={styles.btnTextStyle2}>QR SCAN</Text>
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
    leftSide:{
        marginLeft:"15%",
        width:"30%",
        marginTop:30
    },
    rightSide:{
        marginLeft:"10%",
        width:"30%",
        marginTop:30
    },
    buttonConatiner:{
        height:30,
        backgroundColor:"#2b2d2e",
        marginTop:4
    },button:{
        color:"#fff",
        fontSize:9,
        textAlign:"center",
        flex:1
    },
    titleStyle: { 
        color: '#323232', 
        fontSize: 14, 
        alignSelf: 'center' 
    },
    editIconView: { 
        height: 20, 
        width: 20, 
        // marginTop: 15, 
        marginLeft: 15 
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
    logoStyle: {
        width: 60,
        height: 70,
        marginTop: 15
    },
    textStyle: {
        fontWeight: 'bold',
        marginTop: 5,
        //marginLeft: -20,
        color: '#323232',
        alignSelf: 'center'
    },
    textStyle1: {
        backgroundColor: '#f2f2f2',
        color: '#343434',
        paddingLeft: 10,
        width: 90
    },
    textStyle2: {
        paddingLeft: 10
    },
    mainView: { 
        alignSelf: 'center',
        marginTop: 25,
        flexDirection: 'row'
    },
    row: {
        flexDirection:"row",
        width:"90%",
        marginLeft:"5%"
    },
    view1: {
        borderLeftWidth: 1,
        borderLeftColor: '#25058a'
    },
    view2: { 
        alignSelf: 'center', 
        alignItems: 'center',
        marginTop: 50 
    },
    btnStyle2: {
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 10,
        marginBottom: 20,
        elevation: 0
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 12
    }
})