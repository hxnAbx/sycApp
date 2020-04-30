import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import FilePickerManager from 'react-native-file-picker';

export default class Documents extends Component {
    openFilePicker = () => {
        FilePickerManager.showFilePicker(null, (response) => {
            console.log('Response = ', response);
           
            if (response.didCancel) {
              console.log('User cancelled file picker');
            }
            else if (response.error) {
              console.log('FilePickerManager Error: ', response.error);
            }
            else {
              this.setState({
                file: response
              });
            }
        });
    }

    render() {
        return(
            <Container>
                <Header transparent>
                    <Left style={{ flex: 0.2 }}>
                        <Button transparent onPress={() => Actions.drawerOpen()}>
                            <Feather type='Feather' name='menu' size={20} color='#323232' />
                        </Button>
                    </Left>
                    <Body />
                </Header>

                <HomeButtons Title="Document" />

                <Content>
                    <View style={styles.mainView}>
                        <Text style={styles.textStyle}>Required documents to complete the registration process - (Fill in the box)</Text>
                        
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textStyle2}>Documents for UAE Citizens:</Text>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Personal Photo with white background</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Copy of Passport (first page)</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Copy of Passport (last page)</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Copy of ID (front)</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Copy of ID (back)</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textStyle}>- Health State (Click </Text>
                                    <TouchableOpacity>
                                        <Text style={[styles.textStyle, { fontWeight: 'bold', textDecorationLine: 'underline' }]}>HERE</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textStyle}> to download the form)</Text>
                                </View>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textStyle2}>Documents for Youth of UAE Citizens:</Text>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Birth Certificate</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Copy of Mother's Passport (first page)</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Copy of Mother's Passport (last page)</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textStyle}>- Health State (Click </Text>
                                    <TouchableOpacity>
                                        <Text style={[styles.textStyle, { fontWeight: 'bold', textDecorationLine: 'underline' }]}>HERE</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textStyle}> to download the form)</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textStyle2}>Documents for Sharjah Residents:</Text>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>Click HERE for the Terms and Conditions.</Text>
                                <Button style={styles.btnStyle2}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Country (a list with all countries)</Text>
                                <Button style={styles.btnStyle2}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Personal Photo with white background</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Copy of Passport</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Copy of ID (front)</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Copy of ID (back)</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Visa Copy</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <Text style={styles.textStyle}>- Copy of School Certificate</Text>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>

                            <View style={styles.innerView}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textStyle}>- Health State (Click </Text>
                                    <TouchableOpacity>
                                        <Text style={[styles.textStyle, { fontWeight: 'bold', textDecorationLine: 'underline' }]}>HERE</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textStyle}> to download the form)</Text>
                                </View>
                                <Button style={styles.btnStyle2} onPress={() => this.openFilePicker()}>
                                    <Text style={styles.btnTextStyle2}>Choose file</Text>
                                </Button>
                            </View>
                        </View>

                        <Button style={styles.btnStyle} onPress={() => Actions.profile()}>
                            <Text style={styles.btnTextStyle}>Send</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        alignSelf: 'center',
        width: '90%',
        marginTop: 15
    },
    textStyle: {
        fontSize: 10,
        color: '#787878'
    },
    textStyle2: {
        fontWeight: 'bold',
        fontSize: 11
    },
    innerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        alignItems: 'center'
    },
    btnStyle2: {
        width: 50,
        height: 11,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b3b3b3',
        borderRadius: 0,
        elevation: 0
    },
    btnTextStyle2: {
        color: '#fefefe',
        fontSize: 6,
        fontWeight: 'bold'
    },
    btnStyle: {
        alignSelf: 'center',
        width: 100,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 25,
        marginBottom: 25,
        elevation: 0
    },
    btnTextStyle: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold'
    }
})