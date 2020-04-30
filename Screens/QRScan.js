import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Actions } from 'react-native-router-flux';

export default class QRScan extends Component {
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

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
                        <Title style={styles.titleStyle}>QR SCAN</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                        <TouchableOpacity onPress={() => Actions.profile()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity>
                    </Right>
                </Header>

                <Content>
                    <QRCodeScanner
                        cameraStyle={{ width: 250, alignSelf: 'center', marginTop: 150 }}
                        onRead={this.onSuccess}
                        // flashMode={QRCodeScanner.Constants.FlashMode.torch}
                        // topContent={
                        // <Text style={styles.centerText}>
                        //     Go to{' '}
                        //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                        //     your computer and scan the QR code.
                        // </Text>
                        // }
                        // bottomContent={
                        // <TouchableOpacity style={styles.buttonTouchable}>
                        //     <Text style={styles.buttonText}>OK. Got it!</Text>
                        // </TouchableOpacity>
                        // }
                    />
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
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
})