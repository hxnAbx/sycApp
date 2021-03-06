import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView ,AsyncStorage} from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item, Picker } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import Fontisto from 'react-native-vector-icons/Fontisto'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'
// import CalendarPicker from 'react-native-calendar-picker'

export default class SignUp1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "key0",
            selectedStartDate: null,
            emailAdress : "",
            memberPhone : "",
            grade : "",
            school : "",
            nearCenter : "",
            poBox : "",
            countryOfRigion : "",
            area : "",
            emirate : "",
            countryOfRigion : "",
            nationality : "",
            dateOfBirth : "",
            passportExp : "",
            passportNumber : "",
            idExp : "",
            emirateId: "",
            secondName : "",
            lastName : "",
            firstName : "",
            password : "",
            username : "",
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onClickOne = async ()=>{
        if( this.state.firstName == "" ){alert("Enter First Name")}
        else if( this.state.lastName == "" ){alert("Enter Last Name")}
        else if( this.state.username == "" ){alert("Enter Username Name")}
        else if( this.state.password == "" ){alert("Enter Password Name")}
        else if( this.state.dateOfBirth == "" ){alert("Enter Date of birth Name")}
        else if( this.state.emailAdress == "" ){alert("Enter Email Adress Name")}
        else if( this.state.poBox == "" ){alert("Enter PO BOX Name")}
        else if( this.state.emirateId == "" ){alert("Enter Emirat ID Name")}
        else if( this.state.nearCenter == "" ){alert("Enter Near Center Name")}
        else if( this.state.grade == "" ){alert("Enter Grade")}
        else if( this.state.nationality == "" ){alert("Enter Nationality")}
        else if( this.state.area == "" ){alert("Enter area")}
        else if( this.state.school == "" ){alert("Enter School")}
        else if( this.state.passportExp == "" ){alert("Enter passport Expire date")}
        else if( this.state.passportNumber == "" ){alert("Enter passport Number")}            
        else {
       await AsyncStorage.setItem("emailAdress", this.state.emailAdress)
       await AsyncStorage.setItem("memberPhone", this.state.memberPhone)
       await AsyncStorage.setItem("grade", this.state.grade)
       await AsyncStorage.setItem("school", this.state.school)
       await AsyncStorage.setItem("nearCenter", this.state.nearCenter)
       await AsyncStorage.setItem("poBox", this.state.poBox)
       await AsyncStorage.setItem("countryOfRigion", this.state.countryOfRigion)
       await AsyncStorage.setItem("nationality", this.state.nationality)
       await AsyncStorage.setItem("dateOfBirth", this.state.dateOfBirth)
       await AsyncStorage.setItem("passportExp", this.state.passportExp)
       await AsyncStorage.setItem("passportNumber", this.state.passportNumber)
       await AsyncStorage.setItem("idExp", this.state.idExp)
       await AsyncStorage.setItem("emirateId", this.state.emirateId)
       await AsyncStorage.setItem("secondName", this.state.secondName)
       await AsyncStorage.setItem("lastName", this.state.lastName)
       await AsyncStorage.setItem("firstName", this.state.firstName)
       await AsyncStorage.setItem("password", this.state.password)
       await AsyncStorage.setItem("username", this.state.username)
        Actions.signUp2();
    }


    }

    onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
      }

    onValueChange(value) {
        this.setState({
          selected: value,
          gender: value
        });


    }

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        
        return(
            <Container>
                <Header style={styles.headerStyle}>
                    <Left style={{ flex: 0.2 }}>
                        <Button transparent onPress={() => Actions.login()}>
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
                        <Text style={styles.textStyle}>Enter Member Details</Text>

                        <View>
                            <View>
                                <Text style={{ fontSize: 10, fontWeight: '200' }}> User Name</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input 
                                style={styles.inputTextStyle} 
                                placeholder='Enter Username'
                                onChangeText = {(text) => this.setState({username:text})}
                                 />
                                <FontAwesome type='FontAwesome' name='user' size={11} color='#9d9fad' />
                            </Item>
                        </View>       

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10 }}> Password</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle} 
                                placeholder='Enter Password'
                                onChangeText = {(text) => this.setState({password:text})}
                                 />
                                {/* <Fontisto type='Fontisto' name='locked' size={11} color='#9d9fad' /> */}
                            </Item>
                        </View>       

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10, fontWeight: '200' }}> First Name</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle} 
                                placeholder='First Name'
                                onChangeText = {(text) => this.setState({firstName:text})}
                                />
                            </Item>
                        </View>    

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Last Name</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle} 
                                    placeholder='Last Name'
                                    onChangeText = {(text) => this.setState({lastName:text})}
                                     />
                                </Item>
                            </View>  
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Second Name</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle} 
                                    placeholder='Second name'
                                    onChangeText = {(text) => this.setState({secondName:text})} />
                                </Item>
                            </View>                              
                        </View> 

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Emirates ID Number</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle} 
                                    placeholder='0012345652262'
                                    onChangeText = {(text) => this.setState({emirateId:text})} />
                                </Item>
                            </View>  
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Emirates ID Expiry Date</Text>
                                </View>

                                <Item regular style={[styles.inputItemStyle, { paddingRight: 5 }]}>
                                    {/* <CalendarPicker
                                        onDateChange={this.onDateChange}
                                    /> */}
                                    <Input style={styles.inputTextStyle}
                                    onChangeText = {(text) => this.setState({idExp:text})}
                                    placeholder='27/ 09/ 2022' />
                                    <EvilIcons type='EvilIcons' name='calendar'
                                     size={17} color='#9d9fad'
                                      /> 
                                </Item>
                            </View>                              
                        </View>  

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Passport Number</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle} 
                                    onChangeText = {(text) => this.setState({passportNumber:text})}
                                    placeholder='0012345652262' />
                                </Item>
                            </View>  
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Passport Expiry Date</Text>
                                </View>

                                <Item regular style={[styles.inputItemStyle, { paddingRight: 5 }]}>
                                    <Input style={styles.inputTextStyle} 
                                    onChangeText = {(text) => this.setState({passportExp:text})}
                                    placeholder='27/ 09/ 2022' />
                                    <EvilIcons type='EvilIcons' name='calendar' size={17} color='#9d9fad' /> 
                                </Item>
                            </View>                              
                        </View>

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Date of Birth</Text>
                                </View>

                                <Item regular style={[styles.inputItemStyle, { paddingRight: 5 }]}>
                                    <Input style={styles.inputTextStyle} 
                                    onChangeText = {(text) => this.setState({dateOfBirth:text})}
                                    placeholder='27/ 09/ 2022' />
                                    <EvilIcons type='EvilIcons' name='calendar' size={17} color='#9d9fad' /> 
                                </Item>
                            </View>  
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Nationality</Text>
                                </View>
                                <View style={styles.pickerView}>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={styles.pickerStyle}
                                        selectedValue={this.state.nationality}
                                       // onValueChange={this.onValueChange.bind(this)} 
                                        onValueChange={(value,index) => this.setState({nationality:value})} 
                                        //onChangeText = {(text) => this.setState({idExp:text})}

                                        textStyle={{ fontSize: 10 }} 
                                        itemTextStyle={{ fontSize: 10 }}                                                    
                                        >
                                        <Picker.Item label="UAE Citizen" value="UAE Citizen" />
                                        <Picker.Item label="USA Citizen" value="USA Citizen" />
                                    </Picker>
                                </View>
                            </View>                                                          
                        </View>   

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Country of Origin</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle} 
                                    onChangeText = {(text) => this.setState({countryOfRigion:text})}      
                                    placeholder='Dubai' />
                                </Item>
                            </View>  
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Emirate</Text>
                                </View>

                                <View style={styles.pickerView}>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={styles.pickerStyle}
                                        selectedValue={this.state.emirate}
                                        onValueChange={(value) => this.setState({emirate:value})} 
                                        textStyle={{ fontSize: 10 }} 
                                        itemTextStyle={{ fontSize: 10 }}                                                    
                                        >
                                        <Picker.Item label="Dubai" value="Dubai" />
                                        <Picker.Item label="Sharjah" value="Sharjah" />
                                    </Picker>
                                </View>
                            </View>                                                          
                        </View>   

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10 }}> Area</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle}
                                onChangeText = {(val) => this.setState({area:val})}      
                                 placeholder='Dubai'
                                  />
                            </Item>
                        </View> 

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10 }}> Address</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle}
                                onChangeText = {(text) => this.setState({countryOfRigion:text})}      
                                placeholder='Enter Address' />
                            </Item>
                        </View> 

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> P.O Box</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle} 
                                    onChangeText = {(text) => this.setState({poBox:text})}      
                                    placeholder='Enter PO BOX ' />
                                </Item>
                            </View>  
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Nearest Center to you</Text>
                                </View>

                                <View style={styles.pickerView}>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={styles.pickerStyle}
                                        selectedValue={this.state.nearCenter}
                                        onValueChange={(val,index)=> this.setState({nearCenter:val})} 
                                        textStyle={{ fontSize: 10 }} 
                                        itemTextStyle={{ fontSize: 10 }}                                                    
                                        >
                                        <Picker.Item label="Waset" value="Waset" />
                                        <Picker.Item label="Al Dhaid" value="Al Dhaid" />
                                    </Picker>
                                </View>
                            </View>                                                          
                        </View> 

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10 }}> School</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle} 
                                onChangeText = {(val) => this.setState({school:val})}      
                                placeholder='Enter School Name' />
                            </Item>
                        </View> 

                        <View style={styles.innerView}>
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Grade</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle} 
                                    onChangeText = {(val) => this.setState({grade:val})}      
                                    placeholder='Grade' />
                                </Item>
                            </View>  
                            <View style={styles.innerView2}>
                                <View>
                                    <Text style={{ fontSize: 10, fontWeight: '200' }}> Member Phone Number</Text>
                                </View>

                                <Item regular style={styles.inputItemStyle}>
                                    <Input style={styles.inputTextStyle} 
                                    onChangeText = {(text) => this.setState({memberPhone:text})}      
                                    placeholder='+91 000 000 00' />
                                    <Entypo type='Entypo' name='old-phone' size={11} color='#9d9fad' />
                                </Item>
                            </View>                                                          
                        </View> 

                        <View style={styles.viewStyle}>
                            <View>
                                <Text style={{ fontSize: 10 }}> Enter Email Address</Text>
                            </View>

                            <Item regular style={styles.inputItemStyle}>
                                <Input style={styles.inputTextStyle} 
                                onChangeText = {(text) => this.setState({emailAdress:text})}      
                                placeholder='Abc@gmail.com' />
                                <Ionicons type='Ionicons' name='ios-mail' size={13} color='#9d9fad' /> 
                            </Item>
                        </View> 

                        <Button style={styles.btnStyle2} onPress={this.onClickOne}>
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
        marginBottom: 15
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
    pickerStyle: { 
        width: '100%',
        height: 25,
        fontSize: 50
    },
})