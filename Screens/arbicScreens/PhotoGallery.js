import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Drawer } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux'
import Carousel from 'react-native-snap-carousel';
import ImageView from 'react-native-image-view'
import SideBar from './SideBar';
import axios from "axios";


export default class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        var en = [{
            "id" : "",
            "name_ara" : "",
            "name" : "",
            "type" : "",
            "photo" : "",
            "count" : "",
            "like" : "",
            "comment" : "",
            "share" : "",
            "title" : "",
            "width" : 800,
            "height" : 720,
            "imgIndex" :1,

            }]
            var enf = [{
                source: "",
                title: "",
                width: "",
                height: "",
                imgIndex: ""
            }]
        this.state = {
            snapChange: false,
            isImageViewVisible: false,
            swipeText: true,
            entries: en,
            activeDotIndex: 0,
            activeSlide: 0,
            baseUrl : null,
            images : enf,

        }
    }
    async componentDidMount(){
        this.setState({ baseUrl: GLOBAL.baseURL })
       await this._loadInitialState().done();

   }
   _loadInitialState = async() => {
    await this.getData();
}

getData = async () => { 
    let url =  'https://ycs.ae/himmah/Apicalls/albumList';
    var entriesArr = []
    var constEnf = []
    axios({
        method : 'GET',
        url  : url
    })
    .then((response) => {
        this.setState({jsonResult : response.data.albumList});
        for( let userObject of this.state.jsonResult){
            entriesArr.push({
                "id" : userObject.id,
                "name_ara" : userObject.name_ara,
                "name" : userObject.name,
                "type" : userObject.type,
                "photo" : userObject.photo,
                "count" : userObject.count,
                "like" : userObject.like,
                "comment" : userObject.comment,
                "share" : userObject.share,
                "title": userObject.name ,
                
                
            })

            constEnf.push({
                source: {uri : ("http://ycs.ae/himmah/app/webroot/img/user_upload/"+userObject.photo)},
                title:  userObject.name_ara,
                width: 800,
                height: 720,
            })
            this.setState( {entries : entriesArr, images : constEnf });
        }
    })
    .catch((err) =>{
        console.log(err)
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
        <View style={{ borderWidth: 1 }}>
            <Image 
            source={{ uri : ("http://ycs.ae/himmah/app/webroot/img/user_upload/"+item.photo)}} 
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
        const regix = /(<([^>]+)>)|&nbsp;/ig;
        return( 
            <Drawer 
                ref={(ref) => { this.drawer = ref; }} 
                content={<SideBar navigator={this.navigator} close={() => this.closeDrawer()} />}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.4}
            > 
                <Container style={styles.container}>
                    <Header transparent>
                        <Left style={{ flex: 0.2 }}>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Feather type='Feather' name='menu' size={20} color='#323232' />
                            </Button>
                        </Left>
                        <Body />
                    </Header>

                    <HomeButtons Title="photoGallery" />

                    <Content>
                        {/* <View style={styles.imageView}>
                            <Image source={require('../Images/scientific.jpg')} style={styles.imageStyle} />
                        </View> */}

                        <SafeAreaView style={styles.imageView}>
                            <Carousel
                                ref={(c) => { this._carousel = c; }}
                                data={this.state.entries}
                                renderItem={this._renderItem.bind(this)}
                                sliderWidth={250}
                                itemWidth={250}
                                layout={'tinder'} 
                                layoutCardOffset={`10`}
                                // firstItem={2}
                                // hasParallaxImages={true}
                                onSnapToItem={(index) => this.snapHandler(index)}
                                // itemHeight={150}
                                // sliderHeight={150}
                            />

                            <View style={styles.view1}>
                                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.setState({ isImageViewVisible: true })}>
                                    <Ionicons type='Ionicons' name='ios-eye' size={20} color='#323232' />
                                    <Text style={{ marginLeft: 3 }}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView> 

                        {this.state.swipeText ?
                            <Text style={styles.title}>Swipe to Left</Text>                                          
                            :
                            null
                        }

                        <View style={styles.textView}>
                        <Text style={styles.textStyle, {textAlign:'left'}}>{this.state.entries[s].name.replace(regix , "")}</Text>
                            <Text style={styles.textStyle}>Lorem ipsum text</Text>

                            <View style={styles.innerView}>
                                <Octicons type='Octicons' name='calendar' size={16} color='#787878' />
                                <Text style={[styles.textStyle2, { marginLeft: 6 }]}>Sunday - 2019.5.5</Text>
                            </View>
                        </View>

                        <View style={styles.lineStyle}></View>

                        <TouchableOpacity style={styles.viewStyle} onPress={() => Actions.photoGallery2()}>
                            <Feather type='Feather' name='arrow-right' size={18} color='#787878' />
                            <Text style={[styles.textStyle2, { marginLeft: 5 }]}>View All Photos</Text>
                        </TouchableOpacity>

                        <ImageView
                            images={this.state.images}
                            imageIndex={this.state.activeSlide}
                            isVisible={this.state.isImageViewVisible}                            
                            onClose={() => this.setState({ isImageViewVisible: false })}
                            // onImageChange={() => this.setState({ imgCount: this.state.images + 1 })}
                            renderFooter={(currentImage) => (
                                <View style={styles.imgViewFooter}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity>
                            <Text style={styles.footerText}>{currentImage.title}</Text>
                                        </TouchableOpacity>

                                    </View>

                                    {/* <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.footerText}>{currentImage.imgIndex}</Text>
                                        <Text style={styles.footerText}>/</Text>
                                        <Text style={styles.footerText}>50</Text>
                                    </View> */}
                                </View>
                            )}
                        />
                    </Content>
                </Container>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        // opacity: 0.4
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
    imageView: { 
        width: 250,
        height: 235,
        marginTop: 50,
        alignSelf: 'center'
    },
    imageStyle: {
        width: '100%',
        height: 220
    },
    textView: {
        marginTop: 30,
        marginLeft: 44
    },
    textStyle: { 
        fontWeight: 'bold',
        fontSize: 13
    },
    textStyle2: {
        fontSize: 12,
        textAlign: 'justify',
        color: '#787878'
    },
    innerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    lineStyle: {
        borderWidth: 0.5,
        marginTop: 10,
        width: '90%',
        alignSelf: 'center'
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '85%',
        marginTop: 50
    },
    view1: {
        position: 'absolute',
        bottom: 15,
        right: 8
    },

    // imageViewStyling:- 

    imgViewFooter: {
        height: 40,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footerText: { 
        color: '#f2f2f2',
        fontSize: 17
    }
})