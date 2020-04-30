import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity , AsyncStorage} from 'react-native'
import { Container, Content, Button, Footer, FooterTab ,Drawer } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { Actions } from 'react-native-router-flux';
const GLOBAL = require('../routes/global');


export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonResult : [],
            loaded: true,
            error: null,
            userToken  : null,
            isUserloaded : false,
            baseUrl : null,
            userName : null,
            profileImg : null,
            value : false,
            userId : null,
            clickCount : 0,
        }
    }
   
   async componentDidMount(){
  
        this.setState({baseUrl : GLOBAL.baseURL});
        await this._loadInitialState();

    }
    

     _loadInitialState = async() => {
        var usertoken = await  AsyncStorage.getItem('user_token')
         var user_id =  await AsyncStorage.getItem('user_id')
         var profileImg =  await AsyncStorage.getItem('UserProfileImage')
         let profileName = await AsyncStorage.getItem('UserProfileName')

         if(profileName !== null){
            profileName = profileName.replace(/["']/g, "")
            profileImg = profileImg.replace(/["']/g, "") 
            let userimageUrl = this.state.baseUrl+'app/webroot/img/user_upload/'+profileImg
            this.setState({
               isUserloaded:true, userToken:usertoken,  userId:user_id , profileImg : userimageUrl, userName: profileName 
                        })   
         }
    }
    logoutUser = () =>{
        AsyncStorage.removeItem('user_id');
        AsyncStorage.removeItem('user_token');
        AsyncStorage.removeItem('UserProfileData');
        AsyncStorage.removeItem('UserProfileImage');
        AsyncStorage.removeItem('UserProfileName');
        this.setState({isUserloaded:false})
        Actions.home()
    }
    
    closeDrawer() {
        this.props.close();
    }
    
    render() {
        return(
            <Container style={styles.containerStyle}>
                <Content contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={[styles.view1, { width: '95%', alignItems: 'flex-start' }]}>
                        <Image resizeMode='contain' source={require('../Images/YouthLogo.png')} style={styles.imageStyle} />
                         <Feather type='Feather' name='x' size={35} color='#323232' onPress={ () => this.closeDrawer()  } />  
                    </View>

                    <View style={[styles.view1, { marginTop: 20 }]}>
                        {this.state.isUserloaded && (
                        <Image
                        source={{uri : this.state.profileImg}}
                        style={[styles.imageStyle, {borderRadius: 60}]} 
                        />
                        )}
                        {!this.state.isUserloaded && (
                        <Image source={require('../Images/dp1.png')} style={styles.imageStyle} />
                        )}
                        <View style={{ alignItems: 'center' }}>
        <Text>{this.state.isUserloaded && (
         this.state.userName
        )}
        </Text>
        {this.state.isUserloaded && (
                            <Button style={styles.btnStyle2} onPress={() => Actions.profile()}>
                                <Text style={styles.btnTextStyle2}>View Profile</Text>
                            </Button>
        )}
        {!this.state.isUserloaded && (
            <Button style={styles.btnStyle2} onPress={() => Actions.login()}>
            <Text style={styles.btnTextStyle2}>Login</Text>
        </Button>
        )}
                        </View>
                    </View>

                    <View style={styles.lineStyle}></View>

                    <View style={styles.view2}>
                        <AntDesign type='AntDesign' name='home' size={20} color='#323232' /> 
                        <TouchableOpacity onPress={() => Actions.home()}>
                            <Text style={styles.textStyle}>Home</Text>     
                        </TouchableOpacity>               
                    </View>

                    <View style={styles.view2}>
                        <Octicons type='Octicons' name='info' size={20} color='#323232' /> 
                        <TouchableOpacity onPress={() => this.setState({ aboutView: !this.state.aboutView })}>
                            <Text style={styles.textStyle}>About Us</Text>                
                        </TouchableOpacity>
                    </View>

                    {this.state.aboutView ?
                        <View style={styles.view4}>
                            <TouchableOpacity onPress={() => {Actions.about(); this.setState({ aboutView: false })}}>
                                <Text style={styles.textStyle2}>- About Sharjah Youth</Text>                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {Actions.centerOne(); this.setState({ aboutView: false })}}>
                                <Text style={styles.textStyle2}>- Our Centers</Text>                
                            </TouchableOpacity>
                        </View>
                        :
                        null
                    }

                    <View style={styles.view2}>
                        <MaterialCommunityIcons type='MaterialCommunityIcons' name='file-document-box-outline' size={20} color='#323232' /> 
                        <TouchableOpacity onPress={() => this.setState({ memberView: !this.state.memberView })}>
                            <Text style={styles.textStyle}>Membership</Text>    
                        </TouchableOpacity>                
                    </View>

                    {this.state.memberView ?
                        <View style={styles.view4}>
                            <TouchableOpacity onPress={() => {Actions.login(); this.setState({ memberView: false })}}>
                                <Text style={styles.textStyle2}>- Login</Text>                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {Actions.himmah(); this.setState({ memberView: false })}}>
                                <Text style={styles.textStyle2}>- About Himmah</Text>                
                            </TouchableOpacity>
                        </View>
                        :
                        null
                    }

                    <View style={styles.view2}>
                        <EvilIcons type='EvilIcons' name='calendar' size={20} color='#323232' /> 
                        <TouchableOpacity onPress={() => this.setState({ eventView: !this.state.eventView })}>
                            <Text style={styles.textStyle}>Programs & Events</Text>                
                        </TouchableOpacity>
                    </View>

                    {this.state.eventView ?
                        <View style={styles.view4}>
                            <TouchableOpacity>
                                <Text style={styles.textStyle2}>- Daily Activities</Text>                
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textStyle2}>- Programs</Text>                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {Actions.summer(); this.setState({ eventView: false })}}>
                                <Text style={styles.textStyle2}>- Events</Text>                
                            </TouchableOpacity>
                        </View>
                        :
                        null
                    }

                    <View style={styles.view2}>
                        <MaterialIcons type='MaterialIcons' name='perm-media' size={20} color='#323232' /> 
                        <TouchableOpacity onPress={() => this.setState({ mediaView: !this.state.mediaView })}>
                            <Text style={styles.textStyle}>Media Centre</Text>                
                        </TouchableOpacity>
                    </View>

                    {this.state.mediaView ?
                        <View style={styles.view4}>
                            <TouchableOpacity onPress={() => {Actions.newsScreen(); this.setState({ newsScreen: false })}}>
                                <Text style={styles.textStyle2}>- News</Text>                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {Actions.photoGallery(); this.setState({ photoGallery: false })}}>
                                <Text style={styles.textStyle2}>- Photo Gallery</Text>                
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={styles.textStyle2}>- Video Gallery</Text>                
                            </TouchableOpacity>
                        </View>
                        :
                        null
                    }

                    <View style={styles.view2}>
                        <FontAwesome type='FontAwesome' name='envelope-open-o' size={20} color='#323232' /> 
                        <TouchableOpacity onPress={() => {Actions.contactUs(); this.setState({ mediaView: false })}}>
                            <Text style={styles.textStyle}>Contact Us</Text>                
                        </TouchableOpacity>
                    </View>
                    
                    {this.state.isUserloaded && (
                        <View style={styles.view2}>
                        <FontAwesome type='FontAwesome' name='envelope-open-o' size={20} color='#323232' /> 
                        <TouchableOpacity onPress={ this.logoutUser}>
                            <Text style={styles.textStyle}>Log Out</Text>                
                        </TouchableOpacity>
                    </View>

                    )}

                    
                </Content>

                <Footer style={styles.footerStyle}>
                    <View style={{ alignSelf: 'center', marginBottom: 10 }}>
                        <Text style={styles.textStyle}>Follow Us</Text>
                    </View>

                    <View style={styles.view3}>
                        <TouchableOpacity>
                            <Entypo type='Entypo' name='instagram' size={15} color='#323232' />    
                        </TouchableOpacity> 
                        <TouchableOpacity>
                            <EvilIcons type='EvilIcons' name='sc-facebook' size={20} color='#323232' />    
                        </TouchableOpacity> 
                        <TouchableOpacity>
                            <AntDesign type='AntDesign' name='twitter' size={15} color='#323232' />    
                        </TouchableOpacity> 
                        <TouchableOpacity>
                            <Entypo type='Entypo' name='linkedin' size={15} color='#323232' />    
                        </TouchableOpacity> 
                        <TouchableOpacity>
                            <FontAwesome type='FontAwesome' name='youtube' size={15} color='#323232' />    
                        </TouchableOpacity> 
                    </View>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: { 
        backgroundColor: '#c7c7c7',
        opacity: 0.9
    },
    view1: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        justifyContent: 'space-between'
    },
    
    imageStyle: { 
        width: 90, 
        height: 90,
        margin: 10 
    },
    btnStyle2: {
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 5
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 12,
        margin:0,
    },
    lineStyle: {
        borderWidth: 1,
        borderColor: '#fdfdfd',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10
    },
    view2: {
        width: '90%',
        alignSelf: 'center',
        //borderTopWidth: 0.2,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        color: '#353535',
        marginLeft: 15
    },
    textStyle2: {
        color: '#353535',
        marginTop: 5,
        fontSize: 12.5
    },
    view3: {
        width: '70%',
        alignSelf: 'center',
        // position: 'absolute',
        // bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view4: {
        marginLeft: 50
    },
    footerStyle: { 
        backgroundColor: 'transparent', 
        flexDirection: 'column',
        height: 70,
        paddingBottom: 10 
    }
})