import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Button , Drawer } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import SideBar from '../Screens/SideBar'


export default class About extends Component {
    closeDrawer() {
        this.drawer._root.close()
    };

    openDrawer() { 
        this.drawer._root.open() 
    };
    render() {
        return(
            <Drawer 
            ref={(ref) => { this.drawer = ref; }} 
            content={<SideBar navigator={this.navigator} close={() => this.closeDrawer()} />}
            onClose={() => this.closeDrawer()}
            openDrawerOffset={0.4}
        > 
            <Container>
                <ImageBackground source={require('../Images/about1.jpg')} style={{ flex: 1 }} blurRadius={1.5} >
                    <Header transparent>
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Feather type='Feather' name='menu' size={20} color='#fff' />
                            </Button>
                        </Left>
                        <Body />
                        <Right>
                            {/* <Button style={styles.searchButton}>
                                <Feather type='Feather' name='search' color='#fff' size={8} />                           
                            </Button> */}
                        </Right>
                    </Header>

                    <HomeButtons Title="About" />

                    <View style={styles.imageView}>
                        <Image source={require('../Images/about1.jpg')} style={styles.imageStyle} />
                    </View>
                </ImageBackground>

                <Content style={{ marginTop: 20 }}>
                    <View style={styles.mainView}>
                        <Text style={styles.textStyle}>About Sharjah Youth</Text>
                        <Text style={styles.textStyle2}>
                            A youth institution, under the Rubu'Qarn Foundation, that focuses on creativity, innovation and 
                            early detection of young talents aged between 13 and 18 in order to provide them with continuous
                            care, and to create an attractive environment for them to practice their hobbies and acquire skills 
                            through the institution's eight centres around the different cities and regions of Sharjah. Also, the
                            institutions provide them with the expertise that develop their national sense and help them play a 
                            role in uplifting UAE's society.  
                        </Text> 

                        <Text style={[styles.textStyle, { fontSize: 12, marginBottom: 8 }]}>Our Vision</Text>
                        <Text style={styles.textStyle2}>
                            A community partner in developing mindful and influential generations.  
                        </Text> 

                        <Text style={[styles.textStyle, { fontSize: 12, marginBottom: 8 }]}>Our Mission</Text>
                        <Text style={styles.textStyle2}>
                            Unleash, develop and invest in the potential of the generations in an Emirati environment 
                            which inspires creativity and innovation through the design and delivery of programs,
                            activities and events, which fulfill future requirements, in collaboration with local and 
                            international partners. 
                        </Text> 

                        <Text style={[styles.textStyle, { fontSize: 12, marginBottom: 8 }]}>Our Values</Text>
                        <Text style={styles.textStyle2}>
                            Citizenship. Creativity. Innovation. Inclusion. Impact. Care. Sustainability.
                        </Text>  
                    </View>
                </Content>
            </Container>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    searchButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'black'
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
    mainView: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 20
    },
    textStyle: { 
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 15
    },
    textStyle2: {
        fontSize: 12,
        textAlign: 'justify',
        color: '#787878',
        marginBottom: 8
    },
})