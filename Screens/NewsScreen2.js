import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';

export default class NewsScreen2 extends Component {
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
                        <Title style={styles.titleStyle}>News</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                        <TouchableOpacity onPress={() => Actions.newsScreen()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity>
                    </Right>
                </Header>

                <ImageBackground source={require('../Images/news.jpg')} style={{ flex: 0.6, paddingTop: 15 }}>
                    <HomeButtons Title="News" />

                    <View style={styles.arrowsView}>
                        <TouchableOpacity>
                            <Ionicons type='Ionicons' name='ios-arrow-dropleft-circle' size={15} color="#f2f2f2" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons type='Ionicons' name='ios-arrow-dropright-circle' size={15} color="#f2f2f2" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.shareIconView}>
                        <EvilIcons type='EvilIcons' name='share-google' size={21} color='#f2f2f2' />
                    </TouchableOpacity>
                </ImageBackground>

                <Content style={{ marginTop: 15 }}>
                    <View style={styles.mainView}>
                        <View style={styles.innerView}>
                            <Octicons type='Octicons' name='calendar' size={16} color='#787878' />
                            <Text style={[styles.textStyle2, { marginLeft: 6 }]}>Sunday - 2019.5.5</Text>
                        </View>

                        <Text style={styles.textStyle}>Sharjah Youth Theatrical Art Festival</Text>

                        <Text style={[styles.textStyle2, { marginBottom: 15 }]}>
                            Under the patronage and support of His Highness Sheikh Dr. Sultan bin Mohammed Al Qassimi, 
                            Member of the Supreme Counclil and Ruler of Sharjah, Sharjah Foundation's Sharjah Foundation 
                            will be participating in the Sharjah Threater Festival, Six professional presenatations were 
                            held from December 21 to 26, 2018. 
                        </Text> 

                        <Text style={[styles.textStyle2, { marginBottom: 15 }]}>
                            The presentations will be presented daily at 6:00 pm on the outdoor stage at the Palace of 
                            Culture in Sharjah, in the presence of a special audience led by Dr. Habib Ghuloom, Director 
                            the festival and members of the arbitration committee of the emrging youth group, Yasser Al 
                            Gergawi, Director of Programs and Partnerships in the Minstry of Tolerence and Artist Aisha 
                            Adel Rahmen and artisit Abdullah Rashid and a number of people interested in theartical arts 
                            and cultural affairs. 
                        </Text>

                        <Text style={[styles.textStyle2, { marginBottom: 15 }]}>
                            This Participation is part of Sharjah's keenness to provide its children with the opportunity 
                            to present their talents and performances to the audience of the festival, which is the result 
                            of a year of hard work and continuous training by a constellation between Sharjah, the Arab Theater 
                            Authority and the "Bantuheim" a career-oriented group of actors, staged a career in a show called 
                            "Time" and embodied, through the techniques of body movement, a day in the life of an employee who 
                            strives to improve his living conditions and fulfill his needs, after mastering the skills and 
                            possessing the tolls that qualified them. Skillfully performing thier roles in a special show in a 
                            universally understood language, acquried thier cocabolary from the team coach Said Salama from Palestine.
                        </Text> 

                        <Text style={[styles.textStyle2, { marginBottom: 15 }]}>
                            The group also hosted the audience of the festival on a trip to "Samenhurr Days", the third 
                            show of the participants' participation in the children'ss threater festival, the trainnig 
                            of the artist Marai Al-Halian, in which they reviewed the story of the city, The smell that 
                            he had taken on his appetite, and did not pay attention to the real danger that threatens 
                            the sucurity of thier country, staff thier skills in the body language according to the 
                            biomechanic approach of the Russian director Visfold Mayrhold.
                        </Text> 

                        <Text style={[styles.textStyle2, { marginBottom: 15 }]}>
                            The opening performances of Sharjah, which runs untill December 26, will include an exhibition 
                            entitled "A Poor Man" by Wassit, the training of Steven Avery Salameh, the "Tumugat" premiere of 
                            Khorfakkan's training by Steven Avery, and " "Faeej Haya from Khorfakkan", winner of the Golden 
                            Award at the Al Fujran Threater from the training of the artist Mahmoud Adbel Halim.
                        </Text>   
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
        fontSize: 14, 
        alignSelf: 'center' 
    },
    mainView: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 5
    },
    textStyle: { 
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 15
    },
    textStyle2: {
        fontSize: 12,
        textAlign: 'justify',
        color: '#787878'
    },
    lineStyle: {
        borderWidth: 1,
        borderColor: '#6a6a6a',
        marginTop: 10
    },
    innerView: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 15,
        alignItems: 'center'
    },
    imageView: {
        position: 'absolute',
        bottom: -20,
        borderWidth: 1,
        borderColor: '#787878',
        alignSelf: 'center'        
    },
    imageStyle: {
        width: 220,
        height: 150
    },
    btnStyle2: {
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 15,
        alignSelf: 'center'
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    },
    arrowsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginTop: 50
    },
    shareIconView: {
        position: 'absolute',
        bottom: -15,
        right: 25,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#323232',
        alignItems: 'center',
        justifyContent: 'center'
    }
})