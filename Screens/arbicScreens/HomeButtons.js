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
                <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-around' }}>
                    {this.props.Title == 'Home' ?
                        <Button style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}> الصفحة الرئيسية </Text>
                        </Button>
                            :
                    this.props.Title == 'Events' || this.props.Title == 'News' || this.props.Title == 'About' || this.props.Title == "Centers" || this.props.Title == "Login" || this.props.Title == 'photoGallery' || this.props.Title == "videoGallery" ? 
                        <Button style={styles.btnStyle3} onPress={() => Actions.homeAr()}>
                            <Text style={styles.btnTextStyle3}> الصفحة الرئيسية </Text>
                        </Button>  
                            :
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.homeAr()}>
                            <Text style={styles.btnTextStyle}> الصفحة الرئيسية </Text>
                        </Button>
                    }

                    {this.props.Title == 'About' || this.props.Title == "Centers" ?
                        <Button style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}> من نحن  </Text>
                        </Button>
                            :
                    this.props.Title == 'Events' || this.props.Title == 'News' || this.props.Title == "Login" || this.props.Title == 'photoGallery' || this.props.Title == "videoGallery" ? 
                        <Button style={styles.btnStyle3} onPress={() => Actions.aboutAr()}>
                            <Text style={styles.btnTextStyle3}> من نحن </Text>
                        </Button>
                            :
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.aboutAr()}>
                            <Text style={styles.btnTextStyle}> من نحن  </Text>
                        </Button>
                    }

                    {this.props.Title == "Profile" || this.props.Title == "Login" || this.props.Title == "Registartion" || this.props.Title == "Himmah" ?
                        <React.Fragment>
                        <Button style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}>العضویة</Text>
                        </Button>
                        </React.Fragment>
                            :
                    this.props.Title == 'Events' || this.props.Title == 'News' || this.props.Title == 'About' || this.props.Title == "Centers" || this.props.Title == 'photoGallery' || this.props.Title == "videoGallery" ? 
                        <React.Fragment>
                            {this.state.isUserloaded && (
                        <Button style={styles.btnStyle3} onPress={() => Actions.profileAr()}>
                            <Text style={styles.btnTextStyle3}>العضویة</Text>
                        </Button>
                            )}
                            {!this.state.isUserloaded && (
                            <Button style={styles.btnStyle3} onPress={() => Actions.loginAr()}>
                                <Text style={styles.btnTextStyle3}>العضویة</Text>
                            </Button>
                            )}
                        </React.Fragment>
                            :
                        <React.Fragment>
                            {this.state.isUserloaded && (
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.profileAr()}>
                            <Text style={styles.btnTextStyle}>العضویة</Text>
                        </Button>
                            )}
                            {!this.state.isUserloaded && (
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.loginAr()}>
                            <Text style={styles.btnTextStyle}>العضویة</Text>
                        </Button>
                            )}
                            </React.Fragment>
                    }

                    {this.props.Title == 'Events' || this.props.Title == 'Registration' ?
                        <Button style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}>البرامج والفعالیات</Text>
                        </Button>
                            :
                    this.props.Title == 'News' || this.props.Title == 'About' || this.props.Title == "Centers" || this.props.Title == "Login" || this.props.Title == 'photoGallery' || this.props.Title == "videoGallery" ? 
                        <Button style={styles.btnStyle3} onPress={() => Actions.summerAr()}>
                            <Text style={styles.btnTextStyle3}>البرامج والفعالیات</Text>
                        </Button>
                            :
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.summerAr()}>
                            <Text style={styles.btnTextStyle}>البرامج والفعالیات</Text>
                        </Button>
                    }

                    {this.props.Title == 'News' || this.props.Title == 'photoGallery' || this.props.Title == "videoGallery" ?
                        <Button style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}>المركز الاعلامي</Text>
                        </Button>
                            :
                    this.props.Title == 'Events' || this.props.Title == 'About' || this.props.Title == "Centers" || this.props.Title == "Login" ? 
                        <Button style={styles.btnStyle3} onPress={() => Actions.newsScreenAr()}>
                            <Text style={styles.btnTextStyle3}>المركز الاعلامي</Text>
                        </Button>
                            :
                        <Button transparent style={styles.btnStyle} onPress={() => Actions.newsScreenAr()}>
                            <Text style={styles.btnTextStyle}> المركز الاعلامي</Text>
                        </Button>
                    }

                    {this.props.Title == 'ContactUs' ?
                        <Button style={styles.btnStyle2} onPress={()=> Actions.contactUsAr()}>
                            <Text style={styles.btnTextStyle2}>تواصل معنا</Text>
                        </Button>
                            :
                    this.props.Title == 'Events' || this.props.Title == 'photoGallery' || this.props.Title == 'News' || this.props.Title == 'About' || this.props.Title == "Centers" || this.props.Title == "Login" || this.props.Title == "videoGallery" ? 
                        <Button style={styles.btnStyle3} onPress={()=> Actions.contactUsAr()}>
                            <Text style={styles.btnTextStyle3}>تواصل معنا</Text>
                        </Button>
                            :
                        <Button transparent style={styles.btnStyle} onPress={()=> Actions.contactUsAr()}>
                            <Text style={styles.btnTextStyle}>تواصل معنا</Text>
                        </Button>
                    }
                </View>

                {this.props.Title == "Profile" || this.props.Title == "Login"  ? 
                    <View style={styles.loginBtnView}>
                        {this.state.isUserloaded && (
                        <Button style={[styles.btnStyle2, { marginRight: 3 }]} onPress={() => Actions.profileAr()}>
                            <Text style={styles.btnTextStyle2}>الملف الشخصي</Text>
                        </Button>
                        )}
                        {!this.state.isUserloaded && (
                            <Button style={[styles.btnStyle2, { marginRight: 3 }]} onPress={() => Actions.loginAr()}>
                            <Text style={styles.btnTextStyle2}>تسجیل الدخول </Text>
                        </Button>
                        )}
                            
                        <Button transparent style={[styles.btnStyle3, { width: '17%' }]} onPress={() => Actions.himmahAr()}>
                            <Text style={styles.btnTextStyle3}> اكتشف ھمة </Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "Himmah" ? 
                    <View style={styles.loginBtnView}>
                         {this.state.isUserloaded && (
                        <Button transparent style={[styles.btnStyle, { marginRight: 3 }]} onPress={() => Actions.profileAr()}>
                            <Text style={styles.btnTextStyle}>الملف الشخصي</Text>
                        </Button>
                         )}
                         {!this.state.isUserloaded && (
                             <Button transparent style={[styles.btnStyle, { marginRight: 3 }]} onPress={() => Actions.loginAr()}>
                             <Text style={styles.btnTextStyle}>تسجیل الدخول </Text>
                         </Button> 
                         )}
                            
                        <Button transparent style={[styles.btnStyle2, { width: '17%' }]}>
                            <Text style={[styles.btnTextStyle2, { fontSize: 7 }]}> اكتشف ھمة</Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "News" ? 
                    <View style={[styles.loginBtnView, { alignSelf: 'flex-start',flexDirection:'row-reverse' }]}>
                        <Button style={[styles.btnStyle2, ]} onPress={() => Actions.newsScreenAr()}>
                            <Text style={styles.btnTextStyle2}>أخبارنا </Text>
                        </Button>
                            
                        <Button transparent style={[styles.btnStyle3, {marginLeft : 3,marginRight:3} ]} onPress={() => Actions.photoGalleryAr()}>
                            <Text style={styles.btnTextStyle3}>الصور </Text>
                        </Button>

                        <Button transparent style={styles.btnStyle3 } onPress={() => Actions.videoGalleryAr()}>
                            <Text style={styles.btnTextStyle3}>مقاطع الفیدی </Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "photoGallery" ? 
                    <View style={[styles.loginBtnView, { alignSelf: 'flex-start' ,flexDirection:'row-reverse'  }]}>
                        <Button style={[styles.btnStyle3, { marginRight: 3 }]} onPress={() => Actions.newsScreenAr()}>
                            <Text style={styles.btnTextStyle3}>أخبارنا </Text>
                        </Button>
                            
                        <Button transparent style={[styles.btnStyle2, { marginRight: 3 }]} onPress={() => Actions.photoGalleryAr()}>
                            <Text style={styles.btnTextStyle2}>الصور </Text>
                        </Button>

                        <Button transparent style={styles.btnStyle3} onPress={() => Actions.videoGalleryAr()}>
                            <Text style={styles.btnTextStyle3}>مقاطع الفیدی</Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "videoGallery" ? 
                    <View style={[styles.loginBtnView, { alignSelf: 'flex-start'  ,flexDirection:'row-reverse'   }]}>
                        <Button style={[styles.btnStyle3, { marginRight: 3 }]} onPress={() => Actions.newsScreenAr()}>
                            <Text style={styles.btnTextStyle3}>أخبارنا </Text>
                        </Button>
                            
                        <Button transparent style={[styles.btnStyle3, { marginRight: 3 }]} onPress={() => Actions.photoGalleryAr()}>
                            <Text style={styles.btnTextStyle3}>الصور </Text>
                        </Button>

                        <Button transparent style={styles.btnStyle2} onPress={() => Actions.videoGalleryAr()}>
                            <Text style={styles.btnTextStyle2}>مقاطع الفیدی</Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "Events" || this.props.Title == "Registration" ? 
                    <View style={[styles.loginBtnView, { alignSelf: 'flex-start', paddingLeft: 3 }]}>
                        <Button style={[styles.btnStyle3, { marginRight: 3, width: '17%' }]}>
                            <Text style={styles.btnTextStyle3}>الأنشطة اليومية</Text>
                        </Button>
                            
                        <Button transparent style={[styles.btnStyle3, { marginRight: 3 }]} onPress={()=> Actions.eventCategoryAr()}>
                            <Text style={styles.btnTextStyle3}>البرامج </Text>
                        </Button>

                        <Button transparent style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}>الفعالیات </Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "About" ? 
                    <View style={styles.aboutBtnView}>
                        <Button style={[styles.btnStyle2, { marginRight: 3, width: '22%' }]}>
                            <Text style={[styles.btnTextStyle2, { textAlign: 'center' }]}>عن ناشئة الشارقة</Text>
                        </Button>
                            
                        <Button transparent style={styles.btnStyle3} onPress={() => Actions.centerOneAr()}>
                            <Text style={styles.btnTextStyle3}>مراكزنا</Text>
                        </Button>
                    </View>
                    :
                    null
                }

                {this.props.Title == "Centers" ? 
                    <View style={styles.aboutBtnView}>
                        <Button style={[styles.btnStyle3, { marginRight: 3, width: '22%' }]} onPress={() => Actions.aboutAr()}>
                            <Text style={[styles.btnTextStyle3, { textAlign: 'center' }]}>عن ناشئة الشارقة</Text>
                        </Button>
                            
                        <Button transparent style={styles.btnStyle2} onPress={() => Actions.centerOneAr()}>
                            <Text style={styles.btnTextStyle2}>مراكزنا</Text>
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
        fontSize: 8,
        fontFamily: "helvetica-regular"
    },
    btnStyle2: {
        width: '15%',
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333',
        borderRadius: 0,
        elevation: 0
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 8,
        fontFamily: "helvetica-regular",

    },
    btnStyle3: {
        width: '15%',
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 0,
        elevation: 0
    },
    btnTextStyle3: {
        color: '#333333',
        fontSize: 8,
        fontFamily: "helvetica-regular"
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