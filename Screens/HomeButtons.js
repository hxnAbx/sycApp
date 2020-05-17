import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import { Container, Content, Button } from 'native-base'
import { Actions } from 'react-native-router-flux';

export default class HomeButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonResult : [],
            loaded: true,
            error: null,
            userToken  : null,
            isUserloaded : false,
            baseUrl : null,
            profileImg : null
        }
    }
    

    render() {
        return(     
            <View>       
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    {this.props.Title == 'Home' ?
                        <Button style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}>Home</Text>
                        </Button>
                            :
                    this.props.Title == 'Events' || this.props.Title == 'News' || this.props.Title == 'About' || this.props.Title == "Centers" || this.props.Title == "Login" || this.props.Title == 'photoGallery' || this.props.Title == "videoGallery" ? 
                        <Button style={styles.btnStyle3} onPress={() => Actions.home()}>
                            <Text style={styles.btnTextStyle3}>Home</Text>
                        </Button>  
                            :
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.home()}>
                            <Text style={styles.btnTextStyle}>Home</Text>
                        </Button>
                    }

                    {this.props.Title == 'About' || this.props.Title == "Centers" ?
                        <Button style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}>About Us</Text>
                        </Button>
                            :
                    this.props.Title == 'Events' || this.props.Title == 'News' || this.props.Title == "Login" || this.props.Title == 'photoGallery' || this.props.Title == "videoGallery" ? 
                        <Button style={styles.btnStyle3} onPress={() => Actions.about()}>
                            <Text style={styles.btnTextStyle3}>About Us</Text>
                        </Button>
                            :
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.about()}>
                            <Text style={styles.btnTextStyle}>About Us</Text>
                        </Button>
                    }

                    {this.props.Title == "Profile" || this.props.Title == "Login" || this.props.Title == "Registartion" || this.props.Title == "Himmah" ?
                        <React.Fragment>
                        <Button style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}>Membership</Text>
                        </Button>
                        </React.Fragment>
                            :
                    this.props.Title == 'Events' || this.props.Title == 'News' || this.props.Title == 'About' || this.props.Title == "Centers" || this.props.Title == 'photoGallery' || this.props.Title == "videoGallery" ? 
                        <React.Fragment>
                            {this.state.isUserloaded && (
                        <Button style={styles.btnStyle3} onPress={() => Actions.profile()}>
                            <Text style={styles.btnTextStyle3}>Membership</Text>
                        </Button>
                            )}
                            {!this.state.isUserloaded && (
                            <Button style={styles.btnStyle3} onPress={() => Actions.login()}>
                                <Text style={styles.btnTextStyle3}>Membership</Text>
                            </Button>
                            )}
                        </React.Fragment>
                            :
                        <React.Fragment>
                            {this.state.isUserloaded && (
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.profile()}>
                            <Text style={styles.btnTextStyle}>Membership</Text>
                        </Button>
                            )}
                            {!this.state.isUserloaded && (
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.login()}>
                            <Text style={styles.btnTextStyle}>Membership</Text>
                        </Button>
                            )}
                            </React.Fragment>
                    }

                    {this.props.Title == 'Events' || this.props.Title == 'Registration' ?
                        <Button style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}>Programs</Text>
                        </Button>
                            :
                    this.props.Title == 'News' || this.props.Title == 'About' || this.props.Title == "Centers" || this.props.Title == "Login" || this.props.Title == 'photoGallery' || this.props.Title == "videoGallery" ? 
                        <Button style={styles.btnStyle3} onPress={() => Actions.summer()}>
                            <Text style={styles.btnTextStyle3}>Programs</Text>
                        </Button>
                            :
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.summer()}>
                            <Text style={styles.btnTextStyle}>Programs</Text>
                        </Button>
                    }

                    {this.props.Title == 'News' || this.props.Title == 'photoGallery' || this.props.Title == "videoGallery" ?
                        <Button style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}>Media Center</Text>
                        </Button>
                            :
                    this.props.Title == 'Events' || this.props.Title == 'About' || this.props.Title == "Centers" || this.props.Title == "Login" ? 
                        <Button style={styles.btnStyle3} onPress={() => Actions.newsScreen()}>
                            <Text style={styles.btnTextStyle3}>Media Center</Text>
                        </Button>
                            :
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.newsScreen()}>
                            <Text style={styles.btnTextStyle}>Media Center</Text>
                        </Button>
                    }

                    {this.props.Title == 'ContactUs' ?
                        <Button style={styles.btnStyle2} onPress={()=> Actions.contactUs()}>
                            <Text style={styles.btnTextStyle2}>Contact Us</Text>
                        </Button>
                            :
                    this.props.Title == 'Events' || this.props.Title == 'photoGallery' || this.props.Title == 'News' || this.props.Title == 'About' || this.props.Title == "Centers" || this.props.Title == "Login" || this.props.Title == "videoGallery" ? 
                        <Button style={styles.btnStyle3} onPress={()=> Actions.contactUs()}>
                            <Text style={styles.btnTextStyle3}>Contact Us</Text>
                        </Button>
                            :
                        <Button transparent style={styles.btnStyle} onPress={()=> Actions.contactUs()}>
                            <Text style={styles.btnTextStyle}>Contact Us</Text>
                        </Button>
                    }
                </View>

                {this.props.Title == "Profile" || this.props.Title == "Login"  ? 
                    <View style={styles.loginBtnView}>
                        {this.state.isUserloaded && (
                        <Button style={[styles.btnStyle2, { marginRight: 3 }]} onPress={() => Actions.profile()}>
                            <Text style={styles.btnTextStyle2}>Profile</Text>
                        </Button>
                        )}
                        {!this.state.isUserloaded && (
                            <Button style={[styles.btnStyle2, { marginRight: 3 }]} onPress={() => Actions.login()}>
                            <Text style={styles.btnTextStyle2}>Login</Text>
                        </Button>
                        )}
                            
                        <Button transparent style={[styles.btnStyle3, { width: '17%' }]} onPress={() => Actions.himmah()}>
                            <Text style={styles.btnTextStyle3}>About Himmah</Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "Himmah" ? 
                    <View style={styles.loginBtnView}>
                         {this.state.isUserloaded && (
                        <Button transparent style={[styles.btnStyle, { marginRight: 3 }]} onPress={() => Actions.profile()}>
                            <Text style={styles.btnTextStyle}>Profile</Text>
                        </Button>
                         )}
                         {!this.state.isUserloaded && (
                             <Button transparent style={[styles.btnStyle, { marginRight: 3 }]} onPress={() => Actions.login()}>
                             <Text style={styles.btnTextStyle}>Login</Text>
                         </Button> 
                         )}
                            
                        <Button transparent style={[styles.btnStyle2, { width: '17%' }]}>
                            <Text style={[styles.btnTextStyle2, { fontSize: 7 }]}>About Himmah</Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "News" ? 
                    <View style={[styles.loginBtnView, { alignSelf: 'flex-end' }]}>
                        <Button style={[styles.btnStyle2, { marginRight: 3 }]} onPress={() => Actions.newsScreen()}>
                            <Text style={styles.btnTextStyle2}>News</Text>
                        </Button>
                            
                        <Button transparent style={[styles.btnStyle3, { marginRight: 3 }]} onPress={() => Actions.photoGallery()}>
                            <Text style={styles.btnTextStyle3}>Photo Gallery</Text>
                        </Button>

                        <Button transparent style={styles.btnStyle3} onPress={() => Actions.videoGallery()}>
                            <Text style={styles.btnTextStyle3}>Video Gallery</Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "photoGallery" ? 
                    <View style={[styles.loginBtnView, { alignSelf: 'flex-end' }]}>
                        <Button style={[styles.btnStyle3, { marginRight: 3 }]} onPress={() => Actions.newsScreen()}>
                            <Text style={styles.btnTextStyle3}>News</Text>
                        </Button>
                            
                        <Button transparent style={[styles.btnStyle2, { marginRight: 3 }]} onPress={() => Actions.photoGallery()}>
                            <Text style={styles.btnTextStyle2}>Photo Gallery</Text>
                        </Button>

                        <Button transparent style={styles.btnStyle3} onPress={() => Actions.videoGallery()}>
                            <Text style={styles.btnTextStyle3}>Video Gallery</Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "videoGallery" ? 
                    <View style={[styles.loginBtnView, { alignSelf: 'flex-end' }]}>
                        <Button style={[styles.btnStyle3, { marginRight: 3 }]} onPress={() => Actions.newsScreen()}>
                            <Text style={styles.btnTextStyle3}>News</Text>
                        </Button>
                            
                        <Button transparent style={[styles.btnStyle3, { marginRight: 3 }]} onPress={() => Actions.photoGallery()}>
                            <Text style={styles.btnTextStyle3}>Photo Gallery</Text>
                        </Button>

                        <Button transparent style={styles.btnStyle2} onPress={() => Actions.videoGallery()}>
                            <Text style={styles.btnTextStyle2}>Video Gallery</Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "Events" || this.props.Title == "Registration" ? 
                    <View style={[styles.loginBtnView, { alignSelf: 'flex-end', marginRight: 3 }]}>
                        <Button style={[styles.btnStyle3, { marginRight: 3, width: '17%' }]}>
                            <Text style={styles.btnTextStyle3}>Daily Activities</Text>
                        </Button>
                            
                        <Button transparent onPress={()=> Actions.eventCategory()} style={[styles.btnStyle3, { marginRight: 3 }]}>
                            <Text style={styles.btnTextStyle3}>Programs</Text>
                        </Button>

                        <Button transparent style={styles.btnStyle2} onPress={()=> Actions.summer()}>
                            <Text style={styles.btnTextStyle2}>Events</Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "About" ? 
                    <View style={styles.aboutBtnView}>
                        <Button style={[styles.btnStyle2, { marginRight: 3, width: '22%' }]}>
                            <Text style={[styles.btnTextStyle2, { textAlign: 'center' }]}>About Sharjah Youth</Text>
                        </Button>
                            
                        <Button transparent style={styles.btnStyle3} onPress={() => Actions.centerOne()}>
                            <Text style={styles.btnTextStyle3}>Our Centers</Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "Centers" ? 
                    <View style={styles.aboutBtnView}>
                        <Button style={[styles.btnStyle3, { marginRight: 3, width: '22%' }]} onPress={() => Actions.about()}>
                            <Text style={[styles.btnTextStyle3, { textAlign: 'center' }]}>About Sharjah Youth</Text>
                        </Button>
                            
                        <Button transparent style={styles.btnStyle2} onPress={() => Actions.centerOne()}>
                            <Text style={styles.btnTextStyle2}>Our Centers</Text>
                        </Button>
                    </View>
                    :
                    null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnStyle: {
        width: '15%',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        elevation: 0
    },
    btnTextStyle: {
        color: '#323232',
        fontSize: 8
    },
    btnStyle2: {
        width: '15%',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333',
        borderRadius: 0,
        elevation: 0
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 8
    },
    btnStyle3: {
        width: '15%',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 0,
        elevation: 0
    },
    btnTextStyle3: {
        color: '#333333',
        fontSize: 8
    },
    loginBtnView: { 
        flexDirection: 'row', 
        alignSelf: 'center',
        marginTop: 3
    },
    aboutBtnView: {
        flexDirection: 'row',
        marginTop: 3,
        marginLeft: '18%',
        width: '100%'
    }
})