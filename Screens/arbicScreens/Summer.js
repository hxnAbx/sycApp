import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView , AsyncStorage } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Input, Item , Drawer } from 'native-base'
import axios from "axios";
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';
const GLOBAL = require('../../routes/global');
import SideBar from './SideBar'



export default class Summer extends Component {
    constructor(props) {
        super(props);
        var en = [{
            "even_img" : "",
             "event_name": "",
             "event_id" : "",
             "event_category_id" : "",
             "event_name_ara" : "",
             "start_date" : "",
             "end_date" : "",
             "start_time": "",
             "end_time" : "",
             "venue_title": "",
             "venue_title_ara" : "",
             "event_category" :"",
             "event_category_ara":""            
            }]
        this.state = {
            snapChange: false,
            swipeText: true,
            entries: en,
            activeDotIndex: 0,
            jsonResult : [],
            loaded: true,
            error: null,
            userToken  : null,
            isUserloaded : false,
            baseUrl : null,
            profileImg : null,
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
        let url =  this.state.baseUrl + 'Apicalls/eventList';
        var bodyFormData  = new FormData();
        var token = this.state.userToken;
        var entriesArr = []
        var viewArr = []
        bodyFormData.append("token" , token);
        bodyFormData.append("time" , "4");
        axios({
            method : 'POST',
            url  : url,
            data : bodyFormData,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then((response) => {
            this.setState({jsonResult : response.data.eventList});
            
            for( let userObject of this.state.jsonResult){
               // console.log(userObject.event_name)
                entriesArr.push({
                    'event_name' :userObject.event_name ,
                    'even_img':userObject.event_photo,
                    'event_id':userObject.event_id,
                    'event_category_id':userObject.event_category_id,
                    'event_name_ara':userObject.event_name_ara,
                    'start_date':userObject.start_date,
                    'end_date':userObject.end_date,
                    'start_time':userObject.start_time,
                    'end_time':userObject.end_time,
                    'venue_title':userObject.venue_title,
                    'venue_title_ara':userObject.venue_title_ara,
                    'event_category':userObject.event_category,
                    'event_category_ara':userObject.event_category_ara

                })  
            }
            this.setState( {entries : entriesArr })
           //console.log(this.state.entries);
      
        })
        .catch((error) => {
            console.log(error);
        })
      }
      registerEvent(id)  {
        let url =  this.state.baseUrl + 'Apicalls/eventRegister';
        var token = this.state.userToken;
        token = token.replace(/["']/g, "") ;
        var bodyFormData = new FormData();
        bodyFormData.append('event_id' , id);
        bodyFormData.append('token',token);
        axios({
          method : 'POST',
          url : url,
          data : bodyFormData,
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then((res)=>{
          if(res.data.valid == 2 ){
            alert(res.data.message);
          }
          if(res.data.valid == 1 ){
            alert(res.data.message)
          }
          if(res.data.valid == 0){
            alert(res.data.message)
          }
            console.log(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
      }

     saveEventid(id){
           AsyncStorage.setItem('userevent_id', id);
          Actions.registrationAr()
      }
    snapHandler(index) {
        this.setState({
            snapChange: !this.state.snapChange,
            swipeText: false,
            activeSlide: index 
        })
    }

    closeDrawer() {
        this.drawer._root.close()
    };

    openDrawer() { 
        this.drawer._root.open() 
    };

    
    _renderItem ({item , index}){
        return (
            
            <View>
                    <View key={index} >
                        {/* <Image source={{ uri: item.img }} style={styles.imageStyle} /> */}
                        <Image 
                        source={{uri : "http://ycs.ae/himmah/app/webroot/img/user_upload/"+item.even_img }}
                        style={styles.imageStyle} />
                        {/* {<Text style={styles.title}>{ item.event_name }</Text>} */}
                    </View> 
                    
            </View>
        );
    }

    render() {
        var s = this.state.activeSlide 

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
                    source={{uri  : "http://ycs.ae/himmah/app/webroot/img/user_upload/"+this.state.entries[s].even_img }}
                     style={{ flex: 1, height: 320 }} blurRadius={1.5}>
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

                        <HomeButtons Title="Events" />    
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
                    <Text style={styles.title}>Swipe to Left</Text>                                          
                    :
                    null
                }

                <Content>
                        <View style={styles.mainView}>
                            <Text style={styles.textStyle}>{this.state.entries[s].event_name_ara }</Text>
                            <View style={styles.lineStyle}></View>

                            <View style={styles.innerView}>
                                <MaterialCommunityIcons type='MaterialCommunityIcons' name='map-marker-outline' size={20} color='#787878' />
                    <Text style={[styles.textStyle2, { marginLeft: 8 }]}>{this.state.entries[s].venue_title_ara}</Text>
                            </View>

                            <View style={styles.innerView}>
                                <EvilIcons type='EvilIcons' name='calendar' size={20} color='#787878' />
                                <Text style={[styles.textStyle2, { marginLeft: 8 }]}>{this.state.entries[s].start_date} - {this.state.entries[s].end_date}</Text>
                            </View>

                            <View style={styles.innerView}>
                                <AntDesign type='AntDesign' name='clockcircleo' size={16} color='#787878' style={{ marginLeft: 2, marginRight: 2 }} />
                    <Text style={[styles.textStyle2, { marginLeft: 8 }]}>{this.state.entries[s].start_time} - {this.state.entries[s].end_time}</Text>
                            </View>
                            {this.state.isUserloaded && (
                                <Button style={styles.btnStyle2} onPress={() => this.registerEvent(this.state.entries[s].event_id)}>
                                <Text style={styles.btnTextStyle2}>تسجيل</Text>
                            </Button>
                            )}
                            {!this.state.isUserloaded && (
                                <Button style={styles.btnStyle2} onPress={() => this.saveEventid(this.state.entries[s].event_id)}>
                                <Text style={styles.btnTextStyle2}>تسجيل</Text>
                                </Button>
                            )}
                            
                        </View>
                </Content>
            </Container>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 220,
        height: 160,
        // position: 'absolute',
        // bottom: 0,
        alignSelf: 'center',
        marginTop: -130,
        // backgroundColor: 'red'
    },
    imageStyle: {
        width: 220,
        height: 150
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
        borderRadius: 3
    },
    mainView: {
        width: '85%',
        alignSelf: 'center',
        
        marginTop: 10
    },
    textStyle: { 
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20
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
        flexDirection: 'row-reverse',
        marginTop: 10,
        alignItems: 'center'
    },
    imageView: {
        // position: 'absolute',
        // bottom: -20,
        // borderWidth: 1,
        // borderColor: '#787878',
        // alignSelf: 'center' 
        
        justifyContent: 'flex-end',
        flex: 1,
        alignItems: 'center',
        width: 220,
        height: 150,
        alignSelf: 'center',
        borderWidth: 1       
    },
    btnStyle2: {
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 20,
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
        alignItems: 'flex-end',
        // position: 'absolute',
        width: 200,
        flex: 1,
        alignSelf: 'center',
        // bottom: 0,
        marginBottom: 5
    },
    touchableArrowStyle: { 
        // backgroundColor: 'red', 
        width: 25, 
        height: 25,
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
})