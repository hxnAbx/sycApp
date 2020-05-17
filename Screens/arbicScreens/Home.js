import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Button,Drawer } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableHighlight } from 'react-native-gesture-handler'
import SideBar from "../arbicScreens/SideBar"

export default class Home extends Component {

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
                <Header transparent>
                    <Left>
                        {/* <Button style={styles.searchButton}>
                            <Feather type='Feather' name='search' color='#fff' size={8} />                           
                        </Button> */}
                    </Left>
                    <Body />
                    <Right>
                    <Button onPress={() => this.openDrawer()} transparent>
                            <Feather type='Feather' name='menu' size={20} style={styles.featherButtton} />
                        </Button>

                    </Right>
                </Header>

                <HomeButtons Title='Home' />

                <Content style={{ marginTop: 40 }}>
                    <View style={styles.mainView}>
                        <Text style={styles.textStyle}>انـــضـــم إلــيــنـــا!</Text>

                        <View style={styles.innerView}>
                            <Image source={require('../../Images/image1.jpg')} style={styles.imageStyle} />                            
                        </View>                                              
                    </View>

                    <View style={styles.innerView2}>
                    <TouchableOpacity onPress={() => {Actions.signUp1Ar() } }> 
                            <Text style={styles.textStyle1}> اضغط هنا!]</Text>
                        </TouchableOpacity>
                        <Text style={styles.textStyle1}>[ اكتشف قدراتك ومهاراتك الخفيّة،  </Text>
                       
                        <Text style={styles.textStyle1}> </Text>
                    </View>  

                    <View style={styles.mainView}>
                        <Text style={styles.textStyle3}>آخر الأخبار</Text>  

                        <View style={styles.innerView}>
                            <Ionicons type='Ionicons' name='ios-arrow-back' size={15} style={styles.arrowStyle1} />
                            <TouchableHighlight onPress= {()=> Actions.newsScreenAr()} >
                            <Image source={require('../../Images/image2.jpg')} style={styles.imageStyle}  />   
                            </TouchableHighlight>
                            <Ionicons type='Ionicons' name='ios-arrow-forward' size={15} style={styles.arrowStyle2} />                         
                        </View>                                              
                    </View>

                    <View style={styles.innerView2}>
                        <Text style={styles.textStyle1}>[  مشاركة الناشئة في مسابقة فيكس العالمية  ]</Text>
                    </View> 

                    <View style={styles.mainView}>
                        <Text style={[styles.textStyle3, { fontSize: 12 }]}>شارك في البرامج والورش!</Text>

                        <View style={styles.innerView}>
                            <Ionicons type='Ionicons' name='ios-arrow-back' size={15} style={styles.arrowStyle1} />
                            <TouchableHighlight onPress= {()=> Actions().summerAr()} >
                            <Image source={require('../../Images/image3.jpg')} style={styles.imageStyle} />   
                            </TouchableHighlight>
                            <Ionicons type='Ionicons' name='ios-arrow-forward' size={15} style={styles.arrowStyle2} />                             
                        </View>                                              
                    </View>

                    <View style={styles.innerView2}>
                        <Text style={styles.textStyle1}>[  برنامج مهارات الكتابة والمطالعة  ]</Text>
                    </View> 

                    <View style={styles.mainView}>
                        <Text style={[styles.textStyle3, { fontSize: 12 }]}> إن كنت من منتسبينا، هدايا قيّمة في انتظارك مع هِمّة!</Text>

                        <View style={styles.innerView}>
                            <Ionicons type='Ionicons' name='ios-arrow-back' size={15} style={styles.arrowStyle1} />
                            <TouchableHighlight onPress = {()=> Actions.giftsAr()} >
                            <Image source={require('../../Images/image4.jpg')} style={styles.imageStyle} />   
                            </TouchableHighlight>
                            <View style={styles.imageTitleView}>
                                <Text style={styles.pointsTextStyle}>50</Text>
                                <Text style={styles.giftTextStyle}>تذكرة دخول الغرفة الماطرة</Text>
                            </View>
                            <Ionicons type='Ionicons' name='ios-arrow-forward' size={15} style={styles.arrowStyle2} />                             
                        </View>                                              
                    </View>

                    <View style={styles.innerView2}>
                        {/* <Text style={styles.textStyle1}>[</Text>                         */}
                    </View> 

                </Content>
            </Container>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    featherButtton :{ 
        alignSelf:'center',
        width:'100%',
        alignContent:'flex-end',
        textAlign:'right'
    },
    searchButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'black'
    },
    mainView: {
        backgroundColor: '#e9e9e9',
        width: '88%',
        height: 140,
        alignSelf: 'center',
    },
    innerView: {
        marginTop: 5,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '50%',
        height: 110
    },
    innerView2: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: -5,
        marginBottom: 20
    },
    imageStyle: {
        marginTop: 5,
        height: 90, 
        width: '90%',
        alignSelf: 'center'
    },
    textStyle: { 
        alignSelf: 'center', 
        marginTop: 10 ,
        fontFamily: "helvetica-bold"
    },
    textStyle1: { 
        textAlign:'left',
        fontSize: 8, 
        color: '#3a3a3a' ,
        fontFamily: "helvetica-regular"
    },
    textStyle2: { 
        fontSize: 10, 
        textDecorationLine: 'underline', 
        color: '#323232' ,
        fontFamily: "helvetica-regular"
    },
    textStyle3: { 
        alignSelf: 'center', 
        marginTop: 10,
        color: '#323232',
        fontFamily: "helvetica-regular"
    },
    arrowStyle1: {
        position: 'absolute',
        top: 45,
        left: -20
    },
    arrowStyle2: {
        position: 'absolute',
        top: 45,
        right: -20
    },
    imageTitleView: {   
        width: '90%',     
        borderTopWidth: 1.5,
        borderTopColor: '#28048c',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8
    },
    pointsTextStyle: {
        width: 25,
        height: 16,
        backgroundColor: '#e24407',
        color: '#f2f2f2',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
        justifyContent: 'center'
    },
    giftTextStyle: {

        fontSize: 9,
        color: '#28048c',
         marginLeft: 5,
        textAlign: 'left',
        fontFamily: "helvetica-regular"
        // backgroundColor: 'green'
    }
})