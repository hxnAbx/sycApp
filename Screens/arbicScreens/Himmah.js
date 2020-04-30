import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item,Drawer } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import SideBar from "../arbicScreens/SideBar"

export default class Himmah extends Component {
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
            side="right"
        > 
            <Container>
                <Header style={styles.headerStyle}>
                    <Left style={{ flex: 0.2 }}>
                        
                    <TouchableOpacity onPress={() => Actions.loginAr()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={styles.titleStyle}>عن هِمّة</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                    <Button transparent onPress={() =>this.openDrawer()}>
                            <Feather type='Feather' name='menu' size={20} color='#323232' />
                        </Button>
                    </Right>
                </Header>

                <HomeButtons Title='Himmah' />

                <Content>
                    <View style={{ alignSelf: 'center' }}>
                        <Image source={require('../../Images/HimmahLogo.png')} style={styles.logoStyle} />
                    </View>

                    <View style={styles.mainView}>
                        <Text style={styles.textStyle}>ما هو نظام هِمّة؟</Text>

                        <Text style={styles.textStyle2}>
                        نظام هِمّة هي نظام العضوية والولاء لمنتسبي ناشئة الشارقة حيث يوفر لهم النظام بطاقة عضوية ذات مزايا عديدة و تتيح بطاقة هِمّة فرصة للاستفادة من الأنشطة والبرامج المقدمة في مراكز ناشئة الشارقة وكسب نقاط الولاء التي تمكنه من استبدالها بالعديد من الجوائز العينية.
                        </Text>

                        <Text style={styles.textStyle}>فئات بطاقات هِمة:</Text>

                        <Text style={styles.textStyle2}>
                        يعتمد نظام ترقية البطاقات على مجموع الأميال التي يحصل عليها المنتسب لنظام هِمّة على مدار العام، وتتم إعادة ضبط الأميال مع بداية العام حيث تتم الترقية بالاعتماد على عدد الأميال المتراكم وفق التالي: 
                        </Text>
                        <Image source={require('../../assets/himmah2Ar.png')} style={styles.img2} />
                        <View style={styles.btnsView}>
                            <Button style={styles.btnStyle} onPress={() => Actions.pointsCalAr()}>
                                <Text style={styles.btnTextStyle}>تصنیف النقاط</Text>
                            </Button>
                            <Button style={styles.btnStyle} onPress={() => Actions.giftsAr()}>
                                <Text style={styles.btnTextStyle}>المكافآت</Text>
                            </Button>                            
                        </View>

                        <View style={styles.bottomTextView}>
                            <Text style={styles.textStyle3}>للمزيد من المعلومات يرجى</Text>
                            <TouchableOpacity>
                                <Text style={styles.textStyle4}>الضغط هنا</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
            </Drawer>
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
        alignSelf: 'center' 
    },
    logoStyle: {
        width: 85,
        height: 100,
        marginTop: 15
    },
    mainView: {
        width: '90%',
        alignSelf: 'center'
    },
    textStyle: { 
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 15,
        color: '#323232'
    },
    textStyle2: {
        fontSize: 12,
        textAlign: 'center',
        color: '#787878',
        marginTop: 15
    },
    textStyle3: {
        fontSize: 12,
        color: '#787878'
    },
    textStyle4: {
        fontSize: 12,
        color: '#787878',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    btnsView: { 
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between' 
    },
    btnStyle: {
        alignSelf: 'center',
        width: 100,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 15,
        marginBottom: 15,
        elevation: 0
    },
    btnTextStyle: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    },
    bottomTextView: {
        flexDirection: 'row',
        marginBottom: 15
    },
    img2: {
        width: "100%",
        height: 300,
        resizeMode: "contain"
      }
})