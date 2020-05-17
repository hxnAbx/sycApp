import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView , AsyncStorage } from 'react-native'
import { Container, Content, Header, Button, Left, Body , Drawer, Right} from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';
import SideBar from './SideBar'
import axios from "axios";
const GLOBAL = require('../../routes/global');

export default class NewsScreen extends Component {
    constructor() {
        super();
        var en = [{
            "headline" : "",
            "ara_headline" : "",
            "story" : "",
            "ara_story" : "",
            "photo" : ""     
            }]
        this.state = {
            jsonResult : [],
            loaded: true,
            error: null,
            userToken  : null,
            isUserloaded : false,
            baseUrl : null,
            profileImg : null,
            snapChange: false,
            swipeText: true,
            entries: en,
            activeDotIndex: 0,
            activeSlide: 0
        }
    }
    async componentDidMount(){
        this.setState({baseUrl : GLOBAL.baseURL})
         await this._loadInitialState().done();
     }
     _loadInitialState = async() => {
        var usrId = await AsyncStorage.getItem('user_id');
        let usrToken = await AsyncStorage.getItem('user_token');
        if(usrToken !== null){
            this.setState({ isUserloaded : true } );
        }
        else{
            this.setState( { isUserloaded : false } );
        }
        this.setState({userId:usrId, userToken:usrToken})
        await this.getData();
    }
    getData = async () => { 
        let url =  this.state.baseUrl + 'Apicalls/news';
        var entriesArr = []
        axios({
            method : 'POST',
            url  : url
        })
        .then((response) => {
            this.setState({jsonResult : response.data.news});
        //    console.log(this.state.jsonResult);
           for( let userObject of this.state.jsonResult){
            entriesArr.push({
                "headline" : userObject.headline,
                "ara_headline" : userObject.ara_headline,
                "story" : userObject.story,
                "ara_story" : userObject.ara_story,
                "photo" : userObject.photo
               
            })
        }
        this.setState( {entries : entriesArr });
        })
        .catch((error) => {
            console.log(error);
        })
    }
      snapHandler(index) {
        this.setState({
            snapChange: !this.state.snapChange,
            swipeText: false,
            activeSlide: index 
        })
    }

    _renderItem ({item, index}) {
        return (
            <View>
                <Image 
                resizeMode="stretch"
                source={{uri : "http://ycs.ae/himmah/app/webroot/img/user_upload/"+item.photo}}
                 style={styles.imageStyle} />
            </View>
        );
    }
    
    closeDrawer() {
        this.drawer._root.close()
    };

    openDrawer() { 
        this.drawer._root.open() 
    };


    render() {
        var s = this.state.activeSlide 
        const regix = /(<([^>]+)>)|&nbsp;|&quot;/ig;
        return(
            <Drawer 
                ref={(ref) => { this.drawer = ref; }} 
                content={<SideBar navigator={this.navigator} close={() => this.closeDrawer()} />}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.4}
                side="right"
            > 
            <Container>
                <ImageBackground 
                source={{uri  : "http://ycs.ae/himmah/app/webroot/img/user_upload/"+this.state.entries[s].photo}} 
                style={{ flex: 1 }} blurRadius={1.5} >
                    <Header transparent>
                        <Left style={{ flex: 0.2 }}>
                           
                        </Left>
                        <Body />
                        <Right>
                        <Button transparent onPress={() => this.openDrawer()}>
                                <Feather type='Feather' name='menu' size={20} color='#ffffff' />
                            </Button>
                        </Right>
                    </Header>

                    <HomeButtons Title="News" />

                    {/* <TouchableOpacity style={styles.imageView} onPress={() => Actions.newsScreen2()}>
                        <Image source={require('../Images/news.png')} style={styles.imageStyle} />
                    </TouchableOpacity> */}
                </ImageBackground>

                <SafeAreaView style={styles.container}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        renderItem={this._renderItem.bind(this)}
                        sliderWidth={250}
                        itemWidth={250}
                        layout={'tinder'} 
                        layoutCardOffset={`9`}
                        // firstItem={0}
                        // hasParallaxImages={true}
                        onSnapToItem={(index) => this.snapHandler(index)}
                        // itemHeight={150}
                        // sliderHeight={150}
                    />
                </SafeAreaView> 

                {this.state.swipeText ?
                    <Text style={styles.title}>اسحب إلى اليسار</Text>                                          
                    :
                    null
                }

                <Content>
                    <View style={styles.mainView}>
            <Text style={styles.textStyle}>{this.state.entries[s].ara_headline.replace(regix, "")}</Text>
                        <Text style={styles.textStyle2}>
                           {this.state.entries[s].ara_story.replace(regix, "")}
                        </Text>                        

                        <View style={styles.innerView}>
                            <Octicons type='Octicons' name='calendar' size={16} color='#787878' />
                            <Text style={[styles.textStyle2, { marginRight: 6 }]}>Sunday - 2019.5.5</Text>
                        </View>

                        <View style={styles.lineStyle}></View>
                        
                        {/* <TouchableOpacity style={styles.viewStyle} onPress={() => Actions.newsScreen2()}>
                            <Feather type='Feather' name='arrow-right' size={18} color='#787878' />
                            <Text style={[styles.textStyle3, { marginLeft: 5 }]}>All News</Text>
                        </TouchableOpacity> */}
                    </View>
                </Content>
            </Container>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 10
    },
    title: {
        // position: 'absolute',
        // bottom: 0,
        alignSelf: 'center',
        fontSize: 11,
        color: '#323232',
        fontWeight: 'bold',
        backgroundColor: '#f2f2f2',
        paddingRight: 5,
        paddingLeft: 5,
        borderRadius: 3,
        fontFamily: "helvetica-regular"
    },
    textStyle: { 
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 15,
        textAlign:"right",
        fontFamily: "helvetica-regular"
    },
    textStyle2: {
        fontSize: 12,
        textAlign: 'justify',
        color: '#787878',
        textAlign:"right",
        fontFamily: "helvetica-regular"
    },
    textStyle3: {
        fontSize: 12,
        textAlign: 'justify',
        color: '#787878'
    },
    lineStyle: {
        borderWidth: 0.5,
        // borderColor: '#6a6a6a',
        marginTop: 30
    },
    innerView: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginTop: 15
    },
    imageView: {
        position: 'absolute',
        bottom: -20,
        borderWidth: 1,
        borderColor: '#787878',
        alignSelf: 'center'        
    },
    container: {
        width: 220,
        height: 160,
        // position: 'absolute',
        // bottom: 0,
        alignSelf: 'center',
        marginTop: -130
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
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // width: '85%',
        marginTop: 10
    }
})