import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item, Picker } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Actions } from 'react-native-router-flux'
import {  ImagePicker } from 'expo';
import * as DocumentPicker from 'expo-document-picker';

// import CalendarPicker from 'react-native-calendar-picker'

export default class SignUp3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "key0",
            pfPhoto : "",
            passportCopyFront : "",
            passportCopyBack : "",
            copyOfIDFront : "",
            copyOfIDBack : "",
            healthState : "",
            document : "",
            transportationMode : "",
            languagePre : ""


        }
    }
    onClick3 = async() => {
        if(this.state.document  == "") { alert("please Select document type ") }
        else if(this.state.passportCopyBack  == "") { alert("please Select passport copy Back ") }
        else if(this.state.passportCopyFront  == "") { alert("please Select passport Copy Front ") }
        else if(this.state.copyOfIDFront  == "") { alert("please Select ID front ") }
        else if(this.state.copyOfIDBack  == "") { alert("please Select ID back ") }
        else if(this.state.healthState  == "") { alert("please Select Health State ") }
        else if(this.state.transportationMode  == "") { alert("please Select Treansportation type ") }
        else if(this.state.languagePre  == "") { alert("please Select language prefrance ") }
        else{
            alert("Registration Successfull")
        }
    }
    

    onValueChange(value) {
        this.setState({
          selected: value,
          gender: value
        });
    }
    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        this.setState({pfPhoto : result.uri});
		  alert(result.uri);
    }
    


//    _pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//     });
//     if (!result.cancelled) {
//         this.setState({ image: result.uri });
//       }
//     }


    

    

    render() {
        return(
            <Container>
                <Header style={styles.headerStyle}>
                    <Left style={{ flex: 0.2 }}>
                        <Button transparent onPress={() => Actions.signUp2Ar()}>
                            <Feather type='Feather' name='arrow-left' size={18} color='#323232' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titleStyle}>التسجيل</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }} />
                </Header>

                <Content>
                    <View style={styles.mainView}>
                        <Text style={styles.textStyle}>تفاصيل الوثيقة</Text>

                        <View>
                            <View>
                                <Text style={{ fontSize: 10, fontWeight: '200' ,fontFamily: "helvetica-regular" , textAlign:"right" }}> المستندات المطلوبة </Text>
                            </View>

                            {/* <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle} placeholder='Enter Text' />
                            </Item> */}

                            <View style={styles.pickerView}>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={styles.pickerStyle}
                                    selectedValue={this.state.document}
                                    onValueChange={(val,index) => this.setState({document : val}) } 
                                    textStyle={{ fontSize: 10 }} 
                                    itemTextStyle={{ fontSize: 10 }}                                                    
                                    >
                                    <Picker.Item label="UAE Citizen" value="UAE Citizen" />
                                    <Picker.Item label="USA Citizen" value="USA Citizen" />
                                </Picker>
                            </View>
                        </View> 

                        <Text style={[styles.textStyle, { marginTop: 15, marginBottom: 0 ,fontFamily: "helvetica-regular" , textAlign:"right"}]}>المستندات لمواطني دولة الإمارات العربية المتحدة</Text>

                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 13,fontFamily: "helvetica-regular" , textAlign:"right" }}>صورة شخصية رسمية بخلفية بيضاء</Text>

                            <View style={{ marginTop: 5,alignSelf:"flex-end"}}>
                                <View style={styles.imageView}>
                                    <Image
                                        style={styles.imageView}
                                        source={{uri :this.state.pfPhoto}}
                                    />
                                </View>    
                                <Button style={styles.btnStyle} onPress={ this._pickDocument }>
                                    <Text style={styles.btnTextStyle}>تحميل</Text>
                                </Button>                            
                            </View>
                        </View>

                        <View style={styles.lineStyle}></View>

                        <Text style={[styles.textStyle, { marginBottom: 0,fontFamily: "helvetica-regular" , textAlign:"right" }]}>صورة جواز السفر</Text>

                        <View style={{ flexDirection: 'row-reverse' }}>
                            <View style={{ marginTop: 5, marginRight: 20 ,alignSelf:"flex-end" }}>
                                <Text style={styles.textStyle2}>صورة جواز السفر - الصفحة الأولى</Text>

                                <View style={{ marginTop: 5 , alignSelf:"flex-end" }}>
                                    <View style={styles.imageView}>
                                    <Image
                                        style={styles.imageView}
                                        source={{uri :this.state.passportCopyFront}}
                                    />
                                    </View>    
                                    <Button style={styles.btnStyle} onPress={this._pickDocument }>
                                        <Text style={styles.btnTextStyle}>تحميل</Text>
                                    </Button>                            
                                </View>
                            </View>
                            <View style={{ marginTop: 5 , alignSelf:"flex-end" }}>
                                <Text style={styles.textStyle2}>صورة جواز السفر - الصفحة الأخيرة</Text>

                                <View style={{ marginTop: 5, alignSelf:"flex-end"}}>
                                    <View style={styles.imageView}>
                                    <Image
                                        style={styles.imageView}
                                        source={{uri :this.state.passportCopyBack}}
                                    />                                    
                                    </View>    
                                    <Button style={styles.btnStyle} onPress={this._pickDocument }>
                                        <Text style={styles.btnTextStyle}>تحميل</Text>
                                    </Button>                            
                                </View>
                            </View>
                        </View>

                        <View style={styles.lineStyle}></View>

                        <Text style={[styles.textStyle, { marginBottom: 0 ,fontFamily: "helvetica-regular" , textAlign:"right"}]}>صورة من البطاقة الشخصية</Text>

                        <View style={{ flexDirection: 'row-reverse' }}>
                            <View style={{ marginTop: 5, marginLeft: 20 , alignSelf:"flex-end"}}>
                                <Text style={styles.textStyle2}> صورة الهوية من الخلف</Text>
                               
                                <View style={{ marginTop: 5, alignSelf:"flex-end"  }}>
                                    <View style={styles.imageView}>
                                    <Image
                                        style={styles.imageView}
                                        source={{uri :this.state.copyOfIDFront}}
                                    />
                                    </View>    
                                    <Button style={styles.btnStyle} onPress={this._pickDocument }>
                                        <Text style={styles.btnTextStyle}>تحميل</Text>
                                    </Button>                            
                                </View>
                            </View>
                            <View style={{ marginTop: 5, alignSelf:"flex-end"}}>
                                <Text style={styles.textStyle2}>صورة الهوية من الأمام</Text>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.imageView}>
                                    <Image
                                        style={styles.imageView}
                                        source={{uri :this.state.copyOfIDBack}}
                                    />                                    
                                    </View>    
                                    <Button style={styles.btnStyle} onPress={this._pickDocument }>
                                        <Text style={styles.btnTextStyle}>تحميل</Text>
                                    </Button>                            
                                </View>
                            </View>
                        </View>

                        <View style={styles.lineStyle}></View>

                        <Text style={[styles.textStyle, { marginBottom: 0 }]}> الفحص الطبي</Text>

                        <View style={styles.viewStyle2}>
                            <Text style={{ fontSize: 11 ,fontFamily: "helvetica-regular" , textAlign:"right" }}>الخطوة 1: انقر هنا للتنزيل</Text>
                            <TouchableOpacity style={styles.downloadIconView}>
                                <Feather type='Feather' name='download' size={12} color='#323232' />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.viewStyle2}>
                           <View style={{width:"100%"}} >
                            <Text style={{ fontSize: 11,fontFamily: "helvetica-regular" , textAlign:"right" }}>
                                الخطوة 2: نسخة غير مسجلة
                                </Text>
                           </View>
                           
                            <View style={{ marginLeft: 10 }}>
                                <View style={styles.imageView2}>
                                <Image
                                        style={styles.imageView2}
                                        source={{uri :this.state.healthState}}
                                    />
                                </View>    
                                <Button style={styles.btnStyle3} onPress={this._pickDocument}>
                                    <Text style={styles.btnTextStyle}>تحميل</Text>
                                </Button>                            
                            </View>
                        </View>

                        <View style={styles.lineStyle}></View>

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' , fontFamily: "helvetica-regular" , textAlign:"right"  }}> وسيلة المواصلات</Text>
                                </View>

                                <View style={styles.pickerView}>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={styles.pickerStyle}
                                        selectedValue={this.state.transportationMode}
                                        onValueChange={(val ,index ) => { this.setState({transportationMode:val})}} 
                                        textStyle={{ fontSize: 10 }} 
                                        itemTextStyle={{ fontSize: 10 }}                                                    
                                        >
                                        <Picker.Item label="Private Car" value="Private Car" />
                                        <Picker.Item label="Local transport" value="Local transport" />
                                    </Picker>
                                </View>
                            </View>                              
                        </View>

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10 ,fontFamily: "helvetica-regular" , textAlign:"right" }}> منطقة</Text>
                            </View>

                            <View style={styles.pickerView}>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={styles.pickerStyle}
                                    selectedValue={this.state.area}
                                    onValueChange={(val ,index ) => { this.setState({area:val})}} 
                                    textStyle={{ fontSize: 10 }} 
                                    itemTextStyle={{ fontSize: 10 }}                                                    
                                    >
                                    <Picker.Item label="Lorem ipsum" value="Lorem ipsum" />
                                    <Picker.Item label="Dubai" value="Dubai" />
                                </Picker>
                            </View>
                        </View> 

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' , fontFamily: "helvetica-regular" , textAlign:"right"   }}> اللغة المفضلة</Text>
                                </View>

                                <View style={styles.pickerView}>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={styles.pickerStyle}
                                        selectedValue={this.state.languagePre}
                                         onValueChange={(val ,index ) => { this.setState({languagePre:val})}} 
                                        textStyle={{ fontSize: 10 }} 
                                        itemTextStyle={{ fontSize: 10 }}                                                    
                                        >
                                        <Picker.Item label="Lorem ipsum" value="Lorem ipsum" />
                                        <Picker.Item label="English" value="English" />
                                    </Picker>
                                </View>
                            </View>                              
                        </View>

                        <Button style={styles.btnStyle2} onPress={this.onClick3}>
                            <Text style={styles.btnTextStyle2}>إرسال</Text>
                        </Button>
                    </View>
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
        marginTop: 0
    },
    titleStyle: { 
        color: '#323232', 
        fontSize: 16, 
        alignSelf: 'center',
        fontWeight: '400',fontFamily: "helvetica-regular" , textAlign:"right"
    },
    mainView: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 20,
        paddingBottom: 30
    },
    viewStyle: { 
        marginTop: 15 
    },
    viewStyle2: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    innerView: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    innerView2: { 
        marginTop: 15, 
        width: '48%' 
    },
    textStyle: { 
        fontWeight: '400',
        fontSize: 14,
        marginBottom: 15 ,fontFamily: "helvetica-regular" , textAlign:"right"
    },
    textStyle2: {
        fontSize: 10,
        color: '#a0a8b5' ,
         fontFamily: "helvetica-regular" , textAlign:"right"
    },
    inputItemStyle: {
        marginTop: 4,
        width: '100%',
        height: 26,
        paddingRight: 8
    },
    inputTextStyle: { 
        fontSize: 10 ,fontFamily: "helvetica-regular" , textAlign:"right"
    },
    pickerView: { 
        backgroundColor: '#ffffff', 
        elevation: 1,
        marginTop: 5
    },
    pickerStyle: { 
        width: '100%',
        height: 25,
        fontSize: 50, borderBottomWidth: 2,
        borderBottomColor:'#000',
    },
    btnStyle: {
        width: 85,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        elevation: 0
    },
    btnStyle3: {
        width: 65,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        elevation: 0
    },
    btnTextStyle: {
        color: '#fff',
        fontSize: 9,fontFamily: "helvetica-regular" 
    },
    btnStyle2: {
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 30,
        marginBottom: 30,
        alignSelf: 'center',
        elevation: 0
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: "helvetica-regular" 
    },
    imageView: {
        backgroundColor: '#f2f2f2',
        width: 85,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#adadad'
    },
    imageView2: {
        backgroundColor: '#f2f2f2',
        width: 65,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#adadad'
    },
    lineStyle: {
        borderColor: '#d9d9d9',
        borderWidth: 0.5,
        marginTop: 20,
        marginBottom: 15
    },
    downloadIconView: {
        backgroundColor: "#fff",
        elevation: 5,
        marginLeft: 10,
        width: 25,
        height: 25,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center'
    }
})