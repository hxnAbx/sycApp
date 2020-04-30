import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView , AsyncStorage} from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item, Picker } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import Fontisto from 'react-native-vector-icons/Fontisto'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'
// import CalendarPicker from 'react-native-calendar-picker'

export default class SignUp2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "key0",
            mediaAppearance : "",
            wayOfContact : "",
            howDoYou : "",
            gEmergContactPhone : "",
            gEmergencyContactName : "",
            gEmailAdres : "",
            gPhoneNumber : "",
            gEmiID : "", 
            gEmiIDExp: "",
            gsecondName : "",
            gmidelname : "",
            gfistname : "",
            guardianKinship : ""
        }
    }
    onClickTwo = async ()=>{
        if(this.state.wayOfContact  == "" ){alert("Enter Way of contact")}
        else if(this.state.gEmergContactPhone  == "" ){alert("Enter Emergency Phone")}
        else if(this.state.gEmergencyContactName  == "" ){alert("Enter Emergency Contact name")}
        else if(this.state.mediaAppearance == "" ){alert("Enter Media Appearance")}
        else if(this.state.guardianKinship  == "" ){alert("Enter Guardian KinShip")}
        else if(this.state.gfistname  == "" ){alert("Enter Guardian First Name")}
        else if(this.state.gmidelname  == "" ){alert("Enter Guardian Midel Name")}
        else if(this.state.gsecondName  == "" ){alert("Enter Guardian Second Name")}
        else if(this.state.gEmrId == "" ){alert("Enter Guardian Emirate ID")}
        else if(this.state.gEmiIDExp  == "" ){alert("Enter Guardian Emirate ID Expire")}
        else if(this.state.gPhoneNumber  == "" ){alert("Enter Guardian Phone Number")}
        else if(this.state.gEmailAdres  == "" ){alert("Enter Guardian Email adress")}
        else {
            AsyncStorage.setItem('mediaAppearance', this.state.mediaAppearance)
        AsyncStorage.setItem('mediaAppearance', this.state.wayOfContact)
        AsyncStorage.setItem('mediaAppearance', this.state.howDoYou)
        AsyncStorage.setItem('mediaAppearance', this.state.gEmergContactPhone)
        AsyncStorage.setItem('mediaAppearance', this.state.gEmergencyContactName)
        AsyncStorage.setItem('mediaAppearance', this.state.gEmailAdres)
        AsyncStorage.setItem('mediaAppearance', this.state.gPhoneNumber)
        AsyncStorage.setItem('mediaAppearance', this.state.gEmiID)
        AsyncStorage.setItem('mediaAppearance', this.state.gfistname)
        AsyncStorage.setItem('mediaAppearance', this.state.gmidelname)
        AsyncStorage.setItem('mediaAppearance', this.state.gsecondName)
        AsyncStorage.setItem('mediaAppearance', this.state.guardianKinship)
        Actions.signUp3();
        }
    }

    onValueChange(value) {
        this.setState({
          selected: value,
          gender: value
        });
    }

    render() {
        return(
            <Container>
                <Header style={styles.headerStyle}>
                    <Left style={{ flex: 0.2 }}>
                        <Button transparent onPress={() => Actions.signUp1()}>
                            <Feather type='Feather' name='arrow-left' size={18} color='#323232' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titleStyle}>Register</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }} />
                </Header>

                <Content>
                    <View style={styles.mainView}>
                        <Text style={styles.textStyle}>Guardian Details</Text>

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Guardian Kinship</Text>
                                </View>

                                <View style={styles.pickerView}>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={styles.pickerStyle}
                                        selectedValue={this.state.guardianKinship}

                                        onValueChange={(val,index) => { this.setState({guardianKinship:val})} } 
                                        textStyle={{ fontSize: 10 }} 
                                        itemTextStyle={{ fontSize: 10 }}                                                    
                                        >
                                        <Picker.Item label="Father" value="Father" />
                                        <Picker.Item label="Mother" value="Mother" />
                                    </Picker>
                                </View>
                            </View>  
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> First Name</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle} 
                                    onChangeText = {(text) => this.setState({gfistname:text})}      
                                    placeholder='Enter Text' />
                                </Item>
                            </View>                              
                        </View>

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Middle Name</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle} 
                                    onChangeText = {(text) => this.setState({gmidelname:text})}      
                                    placeholder='Enter Text' />
                                </Item>
                            </View>  
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Second Name</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle} 
                                    onChangeText = {(text) => this.setState({gsecondName:text})}      
                                    placeholder='Enter Text' />
                                </Item>
                            </View>                              
                        </View>

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Guardian Emirates ID Number</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle}
                                    onChangeText = {(text) => this.setState({gEmrId:text})}      
                                    placeholder='0012345652262' />
                                </Item>
                            </View>  
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Guardian Emirates ID Exp. Date</Text>
                                </View>

                                <Item regular style={[styles.inputItemStyle, { paddingRight: 5 }]}>
                                    <Input style={styles.inputTextStyle} 
                                    onChangeText = {(text) => this.setState({gEmiIDExp:text})}      
                                    placeholder='27/ 09/ 2022' />
                                    <EvilIcons type='EvilIcons' name='calendar' size={17} color='#9d9fad' /> 
                                </Item>
                            </View>                              
                        </View> 

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10, fontWeight: '200' }}> Guardian Phone Number</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle} 
                                onChangeText = {(text) => this.setState({gPhoneNumber:text})}      
                                placeholder='+91 000 000 00' />
                                <Entypo type='Entypo' name='old-phone' size={11} color='#9d9fad' />
                            </Item>
                        </View> 

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10 }}> Enter Email Address</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle}
                                onChangeText = {(text) => this.setState({gEmailAdres:text})}      
                                placeholder='@gmail.com' />
                                <Ionicons type='Ionicons' name='ios-mail' size={13} color='#9d9fad' /> 
                            </Item>
                        </View> 

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10 }}> Emergency Contact Name</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle} 
                                onChangeText = {(text) => this.setState({gEmergencyContactName:text})}                                      
                                placeholder='Enter Text' />
                            </Item>
                        </View> 

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10, fontWeight: '200' }}> Emergency Contact Phone Number</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle} 
                                onChangeText = {(text) => this.setState({gEmergContactPhone:text})}      
                                placeholder='+91 000 000 00' />
                                <Entypo type='Entypo' name='old-phone' size={11} color='#9d9fad' />
                            </Item>
                        </View> 

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> How did you know about us?</Text>
                                </View>

                                <View style={styles.pickerView}>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={styles.pickerStyle}
                                        selectedValue={this.state.howDoYou}
                                        onValueChange={(val,index) => this.setState({howDoYou:val})} 
                                        textStyle={{ fontSize: 10 }} 
                                        itemTextStyle={{ fontSize: 10 }}                                                    
                                        >
                                        <Picker.Item label="Social Media" value="Social Media" />
                                        <Picker.Item label="Newspaper" value="Newspaper" />
                                    </Picker>
                                </View>
                            </View>  
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Preferred way of contact</Text>
                                </View>

                                <View style={styles.pickerView}>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={styles.pickerStyle}
                                        selectedValue={this.state.wayOfContact}
                                        onValueChange={(val,index)=> this.setState({wayOfContact : val}) } 
                                        textStyle={{ fontSize: 10 }} 
                                        itemTextStyle={{ fontSize: 10 }}                                                    
                                        >
                                        <Picker.Item label="Phone" value="Phone" />
                                        <Picker.Item label="Email" value="Email" />
                                    </Picker>
                                </View>
                            </View>                              
                        </View>

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10, fontWeight: '200' }}> Media Appearance (TV, Newspaper, Website, Social Media, Outdoor Marketing Campaigns)</Text>
                            </View>

                            <View style={styles.pickerView}>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={styles.pickerStyle}
                                    selectedValue={this.state.mediaAppearance}
                                    onValueChange={(val,index)=> this.setState({mediaAppearance : val}) } 
                                    textStyle={{ fontSize: 10 }} 
                                    itemTextStyle={{ fontSize: 10 }}                                                    
                                    >
                                    <Picker.Item label="Yes" value="Yes" />
                                    <Picker.Item label="No" value="No" />
                                </Picker>
                            </View>
                        </View> 

                        <Button style={styles.btnStyle2} onPress={this.onClickTwo}>
                            <Text style={styles.btnTextStyle2}>Next</Text>
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
        marginTop: 23
    },
    titleStyle: { 
        color: '#323232', 
        fontSize: 16, 
        alignSelf: 'center',
        fontWeight: '400'
    },
    mainView: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 20
    },
    viewStyle: { 
        marginTop: 15 
    },
    innerView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innerView2: { 
        marginTop: 15, 
        width: '48%' 
    },
    textStyle: { 
        fontWeight: '400',
        fontSize: 14,
        marginBottom: 5
    },
    inputItemStyle: {
        marginTop: 4,
        width: '100%',
        height: 26,
        paddingRight: 8
    },
    inputTextStyle: { 
        fontSize: 10 
    },
    pickerStyle: { 
        elevation: 1, 
        backgroundColor: '#fff', 
        height: 20,
            width: '100%',
            fontSize: 50,
            borderBottomWidth: 2,
            borderBottomColor:'#000',
        marginTop: 5
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
        fontWeight: 'bold'
    },
    pickerView: { 
        backgroundColor: '#ffffff', 
        elevation: 1,
        marginTop: 4
    },
   

})