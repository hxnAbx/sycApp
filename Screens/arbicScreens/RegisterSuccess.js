import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Content } from 'native-base'
import { Actions } from 'react-native-router-flux';

export default class RegisterSuccess extends Component {
    render() {
        setTimeout(() => {
            Actions.registration()
        }, 2000);
        return(
            <Container>
                <Content contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.btnStyle2}>
                        <Text style={styles.btnTextStyle2}>نعتذر اكتمل العدد، ننتظرك في برامج أخرى</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    btnStyle2: {
        width: 240,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 10,
        alignSelf: 'center',
        marginTop: 320
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})