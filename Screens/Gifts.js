import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Header, Button, Left, Body, Right, Title, Drawer } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
// import Slider from 'react-native-slider'
import SideBar from '../Screens/SideBar'
import axios from "axios";
const GLOBAL = require('../routes/global');

export default class Gifts extends Component {
    constructor(props) {
        super(props);
        var en = [{
            "reward_id" : "",
            "reward_name" : "",
            "reward_name_ara" : "",
            "reward_category_name" : "",
            "reward_category_name_ara" : "",     
            "reward_detail" : "",     
            "reward_detail_ara" : "",     
            "reward_points" : "",     
            "reward_expiry" : "",     
            "reward_main_image" : "",     
            }]

        this.state = {
            pointsBtn1: true,
            pointsBtn2: false,
            pointsBtn3: false,
            pointsBtn4: false,
            pointsBtn5: false,
            pointsBtn15: false,
            baseUrl : null,
            pointsBtn55: false,
            sliderValue: 1,
            fivetyPt : en,
            fiveHuPt : en,
            fivtenHuPt : en,
            twentyFiveHuPt : en,
            thirtyFivePt : en,
            fiveFivtyFivePt : en,
            oneLacPt : en,
            dataLoader :false,
        }
    }

    async componentDidMount(){
        this.setState({baseUrl : GLOBAL.baseURL})
         await this._loadInitialState().done();
     }
     _loadInitialState = async() => {
        await this.getData();
    }
    closeDrawer() {
        this.drawer._root.close()
    };

    openDrawer() { 
        this.drawer._root.open() 
    };

    getData = async () => { 
        let url =  'https://ycs.ae/himmah/Apicalls/rewardList';
        var fivetyPt = []
        var fiveHuPt = []
        var fivtenHuPt = []
        var twentyFiveHuPt =[]  
        var thirtyFivePt = [] 
        var fiveFivtyFivePt =[] 
        var oneLacPt = []
        
        axios({
            method : 'POST',
            url  : url
        })
        .then((response) => {
            this.setState({jsonResult : response.data.RewardList});
            for( let userObject of this.state.jsonResult){
                if(userObject.reward_points <= 50 ){
                    fivetyPt.push({
                        "reward_id" : userObject.reward_id,
                        "reward_name" : userObject.reward_name,
                        "reward_name_ara" : userObject.reward_name_ara,
                        "reward_category_name" : userObject.reward_category_name,
                        "reward_category_name_ara" : userObject.reward_category_name_ara,     
                        "reward_detail" : userObject.reward_detail,     
                        "reward_detail_ara" : userObject.reward_detail_ara,     
                        "reward_points" : userObject.reward_points,     
                        "reward_expiry" : userObject.reward_expiry,     
                        "reward_main_image" : userObject.reward_main_image,   
                       
                    })
                }
                if(userObject.reward_points >= 51 && userObject.reward_points <= 500  ){
                    fiveHuPt.push({
                        "reward_id" : userObject.reward_id,
                        "reward_name" : userObject.reward_name,
                        "reward_name_ara" : userObject.reward_name_ara,
                        "reward_category_name" : userObject.reward_category_name,
                        "reward_category_name_ara" : userObject.reward_category_name_ara,     
                        "reward_detail" : userObject.reward_detail,     
                        "reward_detail_ara" : userObject.reward_detail_ara,     
                        "reward_points" : userObject.reward_points,     
                        "reward_expiry" : userObject.reward_expiry,     
                        "reward_main_image" : userObject.reward_main_image,   
                       
                    })   
                }
                if(userObject.reward_points >= 501 && userObject.reward_points <= 1500  ){
                    fivtenHuPt.push({
                        "reward_id" : userObject.reward_id,
                        "reward_name" : userObject.reward_name,
                        "reward_name_ara" : userObject.reward_name_ara,
                        "reward_category_name" : userObject.reward_category_name,
                        "reward_category_name_ara" : userObject.reward_category_name_ara,     
                        "reward_detail" : userObject.reward_detail,     
                        "reward_detail_ara" : userObject.reward_detail_ara,     
                        "reward_points" : userObject.reward_points,     
                        "reward_expiry" : userObject.reward_expiry,     
                        "reward_main_image" : userObject.reward_main_image,   
                       
                    })
                }
                if(userObject.reward_points >= 1501 && userObject.reward_points <= 2500  ){
                    twentyFiveHuPt.push({
                        "reward_id" : userObject.reward_id,
                        "reward_name" : userObject.reward_name,
                        "reward_name_ara" : userObject.reward_name_ara,
                        "reward_category_name" : userObject.reward_category_name,
                        "reward_category_name_ara" : userObject.reward_category_name_ara,     
                        "reward_detail" : userObject.reward_detail,     
                        "reward_detail_ara" : userObject.reward_detail_ara,     
                        "reward_points" : userObject.reward_points,     
                        "reward_expiry" : userObject.reward_expiry,     
                        "reward_main_image" : userObject.reward_main_image,   
                       
                    })
                }
                if(userObject.reward_points >= 2501 && userObject.reward_points <= 3500  ){
                    thirtyFivePt.push({
                        "reward_id" : userObject.reward_id,
                        "reward_name" : userObject.reward_name,
                        "reward_name_ara" : userObject.reward_name_ara,
                        "reward_category_name" : userObject.reward_category_name,
                        "reward_category_name_ara" : userObject.reward_category_name_ara,     
                        "reward_detail" : userObject.reward_detail,     
                        "reward_detail_ara" : userObject.reward_detail_ara,     
                        "reward_points" : userObject.reward_points,     
                        "reward_expiry" : userObject.reward_expiry,     
                        "reward_main_image" : userObject.reward_main_image,   
                       
                    })
                }
                if(userObject.reward_points >= 3501 && userObject.reward_points <= 5500  ){
                    fiveFivtyFivePt.push({
                        "reward_id" : userObject.reward_id,
                        "reward_name" : userObject.reward_name,
                        "reward_name_ara" : userObject.reward_name_ara,
                        "reward_category_name" : userObject.reward_category_name,
                        "reward_category_name_ara" : userObject.reward_category_name_ara,     
                        "reward_detail" : userObject.reward_detail,     
                        "reward_detail_ara" : userObject.reward_detail_ara,     
                        "reward_points" : userObject.reward_points,     
                        "reward_expiry" : userObject.reward_expiry,     
                        "reward_main_image" : userObject.reward_main_image,   
                       
                    })
                }
                if(userObject.reward_points >= 5501 && userObject.reward_points <= 10500  ){
                    oneLacPt.push({
                        "reward_id" : userObject.reward_id,
                        "reward_name" : userObject.reward_name,
                        "reward_name_ara" : userObject.reward_name_ara,
                        "reward_category_name" : userObject.reward_category_name,
                        "reward_category_name_ara" : userObject.reward_category_name_ara,     
                        "reward_detail" : userObject.reward_detail,     
                        "reward_detail_ara" : userObject.reward_detail_ara,     
                        "reward_points" : userObject.reward_points,     
                        "reward_expiry" : userObject.reward_expiry,     
                        "reward_main_image" : userObject.reward_main_image,   
                       
                    })
                }
               
                this.setState( {oneLacPt : oneLacPt,
                     fiveFivtyFivePt : fiveFivtyFivePt,
                     thirtyFivePt : thirtyFivePt,
                     twentyFiveHuPt : twentyFiveHuPt,   
                     fivtenHuPt : fivtenHuPt,   
                     fiveHuPt : fiveHuPt,   
                     fivetyPt : fivetyPt,   
                    dataLoader:true
                    });
        } })
        .catch((error) => {
            console.log(error);
        })
        }


    clickHandler1() {
        this.setState({
            pointsBtn1: true,
            pointsBtn2: false,
            pointsBtn15: false,
            pointsBtn3: false,
            pointsBtn4: false,
            pointsBtn5: false,
            pointsBtn55: false
        })
    }
    clickHandler2() {
        this.setState({
            pointsBtn1: false,
            pointsBtn2: true,
            pointsBtn15: false,
            pointsBtn3: false,
            pointsBtn4: false,
            pointsBtn5: false,
            pointsBtn55: false
        })
    }
    clickHandler15() {
        this.setState({
            pointsBtn1: false,
            pointsBtn2: false,
            pointsBtn15: true,
            pointsBtn3: false,
            pointsBtn4: false,
            pointsBtn5: false,
            pointsBtn55: false
        })
    }
    clickHandler3() {
        this.setState({
            pointsBtn1: false,
            pointsBtn2: false,
            pointsBtn15: false,
            pointsBtn3: true,
            pointsBtn4: false,
            pointsBtn5: false,
            pointsBtn55: false
        })
    }
    clickHandler4() {
        this.setState({
            pointsBtn1: false,
            pointsBtn2: false,
            pointsBtn15: false,
            pointsBtn3: false,
            pointsBtn4: true,
            pointsBtn5: false,
            pointsBtn55: false
        })
    }
    clickHandler55() {
        this.setState({
            pointsBtn1: false,
            pointsBtn2: false,
            pointsBtn15: false,
            pointsBtn3: false,
            pointsBtn4: false,
            pointsBtn5: false,
            pointsBtn55: true
        })
    }
    clickHandler5() {
        this.setState({
            pointsBtn1: false,
            pointsBtn2: false,
            pointsBtn15: false,
            pointsBtn3: false,
            pointsBtn4: false,
            pointsBtn5: true,
            pointsBtn55: false
        })
    }

 

    saveGiftid(id){
        Actions.rewardDetail(id);
    }
    render() {
        const regix = /(<([^>]+)>)|&nbsp;/ig;
        return(
            <Drawer 
                ref={(ref) => { this.drawer = ref; }} 
                content={<SideBar navigator={this.navigator} close={() => this.closeDrawer()} />}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.4}
            > 
            
                <Container>
                    <Header style={styles.headerStyle}>
                        <Left style={{ flex: 0.2 }}>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Feather type='Feather' name='menu' size={20} color='#323232' />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.titleStyle}>Gifts</Title>
                        </Body>
                        <Right style={{ flex: 0.2 }}>
                            <TouchableOpacity onPress={() => Actions.himmah()}>
                                <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                            </TouchableOpacity>
                        </Right>
                    </Header>

                    <HomeButtons Title='Himmah' />

                    <Content>
                        <View style={{ alignSelf: 'center' }}>
                            <Image source={require('../Images/HimmahLogo.png')} style={styles.logoStyle} />
                        </View>

                        <View style={styles.mainView}>
                            <Text style={styles.textStyle}>Points</Text>

                            <View style={styles.lineStyle}></View>    

                            {/* <Slider
                                value={this.state.sliderValue}
                                onValueChange={(sliderValue) => this.setState({sliderValue})} 
                                minimumValue={1}
                                maximumValue={100}
                                thumbTouchSize={{width: 10, height: 10}}
                                trackStyle={{ height: 1}}
                                thumbImage='none'
                                
                            />
                            <Text> {this.state.sliderValue} </Text> */}

                            {this.state.pointsBtn1 == true ?
                                <View style={{ marginTop: -8 }}>
                                    <Image resizeMode='contain' source={require('../Images/HimmahLogo.png')} style={styles.logoStyle2} />
                                </View> 
                                :
                            this.state.pointsBtn2 == true ?
                                <View style={{ marginTop: -8, marginLeft: '15%' }}>
                                    <Image resizeMode='contain' source={require('../Images/HimmahLogo.png')} style={styles.logoStyle2} />
                                </View> 
                                :
                            this.state.pointsBtn15 == true ?
                                <View style={{ marginTop: -8, marginLeft: '31%' }}>
                                    <Image resizeMode='contain' source={require('../Images/HimmahLogo.png')} style={styles.logoStyle2} />
                                </View> 
                                :
                            this.state.pointsBtn3 == true ?
                                <View style={{ marginTop: -8, alignSelf: 'center' }}>
                                    <Image resizeMode='contain' source={require('../Images/HimmahLogo.png')} style={styles.logoStyle2} />
                                </View> 
                                :
                            this.state.pointsBtn4 == true ?
                                <View style={{ marginTop: -8, alignSelf: 'flex-end', marginRight: '31%' }}>
                                    <Image resizeMode='contain' source={require('../Images/HimmahLogo.png')} style={styles.logoStyle2} />
                                </View> 
                                :
                            this.state.pointsBtn55 == true ?
                                <View style={{ marginTop: -8, alignSelf: 'flex-end', marginRight: '15%' }}>
                                    <Image resizeMode='contain' source={require('../Images/HimmahLogo.png')} style={styles.logoStyle2} />
                                </View> 
                                :
                            this.state.pointsBtn5 == true ?
                                <View style={{ marginTop: -8, alignSelf: 'flex-end' }}>
                                    <Image resizeMode='contain' source={require('../Images/HimmahLogo.png')} style={styles.logoStyle2} />
                                </View> 
                                :                            
                                null
                            }                   
                        </View>

                        <View style={styles.pointsBtnView}>
                            <Button transparent style={styles.btnStyle} onPress={() => this.clickHandler1()}>
                                <Text style={styles.btnTextStyle}>50 points</Text>
                            </Button>
                            <Button transparent style={styles.btnStyle} onPress={() => this.clickHandler2()}>
                                <Text style={styles.btnTextStyle}>500 points</Text>
                            </Button>
                            <Button transparent style={styles.btnStyle} onPress={() => this.clickHandler15()}>
                                <Text style={styles.btnTextStyle}>1500 points</Text>
                            </Button>
                            <Button transparent style={styles.btnStyle} onPress={() => this.clickHandler3()}>
                                <Text style={styles.btnTextStyle}>2500 points</Text>
                            </Button>
                            <Button transparent style={styles.btnStyle} onPress={() => this.clickHandler4()}>
                                <Text style={styles.btnTextStyle}>3500 points</Text>
                            </Button>
                            <Button transparent style={styles.btnStyle} onPress={() => this.clickHandler55()}>
                                <Text style={styles.btnTextStyle}>5500 points</Text>
                            </Button>
                            <Button transparent style={styles.btnStyle} onPress={() => this.clickHandler5()}>
                                <Text style={styles.btnTextStyle}>10500 points</Text>
                            </Button>
                        </View>
                       {this.state.dataLoader == false &&
                       <View>
                           <Text>Loading ...</Text>
                        </View>
                       }
                        {this.state.pointsBtn1 == true && this.state.dataLoader == true  ?
                            <View>
                                <View style={styles.giftsImagesView}>
                                <Container style={styles.itemContainer}>
                                {/* <Text>this is button 1</Text> */}
                                { this.state.fivetyPt.map( (item, key) =>
                                    <View style={styles.itemSingle} >
                                        <TouchableOpacity onPress={() => this.saveGiftid(item.reward_id)}>
                                        <Image resizeMode='contain'
                                         source={{uri : 'http://ycs.ae/himmah/app/webroot/img/user_upload/'+item.reward_main_image}} 
                                         style={styles.imageStyle} />
                                        </TouchableOpacity>
                                        <View style={styles.imageTitleView}>
                                        <Text style={styles.pointsTextStyle}>{item.reward_points}</Text>
                                        <Text style={styles.giftTextStyle}>{item.reward_name}</Text>
                                        </View>
                                    </View>
                                )}
                                </Container>
                                </View>
                            </View>
                            : null
                                }
                        {this.state.pointsBtn2 == true ?
                                 <View>
                                 <View style={styles.giftsImagesView}>
                                 <Container style={styles.itemContainer}>
                                 {/* <Text>this is button 2</Text> */}
                                 { this.state.fiveHuPt.map( (item, key) =>
                                     <View style={styles.itemSingle} >
                                         <TouchableOpacity onPress={() => this.saveGiftid(item.reward_id)}>
                                         <Image resizeMode='contain'
                                          source={{uri : 'http://ycs.ae/himmah/app/webroot/img/user_upload/'+item.reward_main_image}} 
                                          style={styles.imageStyle} />
                                         </TouchableOpacity>
                                         <View style={styles.imageTitleView}>
                                         <Text style={styles.pointsTextStyle}>{item.reward_points}</Text>
                                         <Text style={styles.giftTextStyle}>{item.reward_name}</Text>
                                         </View>
                                     </View>
                                 )}
                                 </Container>
                                 </View>
                             </View>
                                :null
                                }

                        {this.state.pointsBtn15?
                             <View>
                             <View style={styles.giftsImagesView}>
                             <Container style={styles.itemContainer}>
                             {/* <Text>this is button 3</Text> */}
                             { this.state.fivtenHuPt.map( (item, key) =>
                                 <View style={styles.itemSingle} >
                                     <TouchableOpacity onPress={() => this.saveGiftid(item.reward_id)}>
                                     <Image resizeMode='contain'
                                      source={{uri : 'http://ycs.ae/himmah/app/webroot/img/user_upload/'+item.reward_main_image}} 
                                      style={styles.imageStyle} />
                                     </TouchableOpacity>
                                     <View style={styles.imageTitleView}>
                                     <Text style={styles.pointsTextStyle}>{item.reward_points}</Text>
                                     <Text style={styles.giftTextStyle}>{item.reward_name}</Text>
                                     </View>
                                 </View>
                             )}
                             </Container>
                             </View>
                         </View>
                            :
                            null
                        }
 
                        {this.state.pointsBtn3 == true ?
                             <View>
                             <View style={styles.giftsImagesView}>
                             <Container style={styles.itemContainer}>
                             {/* <Text>this is button 4</Text> */}
                             { this.state.twentyFiveHuPt.map( (item, key) =>
                                 <View style={styles.itemSingle} >
                                     <TouchableOpacity onPress={() => this.saveGiftid(item.reward_id)}>
                                     <Image resizeMode='contain'
                                      source={{uri : 'http://ycs.ae/himmah/app/webroot/img/user_upload/'+item.reward_main_image}} 
                                      style={styles.imageStyle} />
                                     </TouchableOpacity>
                                     <View style={styles.imageTitleView}>
                                     <Text style={styles.pointsTextStyle}>{item.reward_points}</Text>
                                     <Text style={styles.giftTextStyle}>{item.reward_name}</Text>
                                     </View>
                                 </View>
                             )}
                             </Container>
                             </View>
                         </View>
                            :
                            null
                        }

                        {this.state.pointsBtn4 ?
                             <View>
                             <View style={styles.giftsImagesView}>
                             <Container style={styles.itemContainer}>
                             {/* <Text>this is button 5</Text> */}
                             { this.state.thirtyFivePt.map( (item, key) =>
                                 <View style={styles.itemSingle} >
                                     <TouchableOpacity onPress={() => this.saveGiftid(item.reward_id)}>
                                     <Image resizeMode='contain'
                                      source={{uri : 'http://ycs.ae/himmah/app/webroot/img/user_upload/'+item.reward_main_image}} 
                                      style={styles.imageStyle} />
                                     </TouchableOpacity>
                                     <View style={styles.imageTitleView}>
                                     <Text style={styles.pointsTextStyle}>{item.reward_points}</Text>
                                     <Text style={styles.giftTextStyle}>{item.reward_name}</Text>
                                     </View>
                                 </View>
                             )}
                             </Container>
                             </View>
                         </View>
                            :
                            null
                        }

                        {this.state.pointsBtn55  == true ?
                                 <View>
                                 <View style={styles.giftsImagesView}>
                                 <Container style={styles.itemContainer}>
                                 {/* <Text>this is button 6</Text> */}
                                 { this.state.fiveFivtyFivePt.map( (item, key) =>
                                     <View style={styles.itemSingle} >
                                         <TouchableOpacity onPress={() => this.saveGiftid(item.reward_id)}>
                                         <Image resizeMode='contain'
                                          source={{uri : 'http://ycs.ae/himmah/app/webroot/img/user_upload/'+item.reward_main_image}} 
                                          style={styles.imageStyle} />
                                         </TouchableOpacity>
                                         <View style={styles.imageTitleView}>
                                         <Text style={styles.pointsTextStyle}>{item.reward_points}</Text>
                                         <Text style={styles.giftTextStyle}>{item.reward_name}</Text>
                                         </View>
                                     </View>
                                 )}
                                 </Container>
                                 </View>
                             </View>
                                :null
                                }
                                {this.state.pointsBtn5 == true  ?
                                 <View>
                                 <View style={styles.giftsImagesView}>
                                 <Container style={styles.itemContainer}>
                                 {/* <Text>this is button 7</Text> */}
                                 { this.state.oneLacPt.map( (item, key) =>
                                     <View style={styles.itemSingle} >
                                         <TouchableOpacity onPress={() => this.saveGiftid(item.reward_id)}>
                                         <Image resizeMode='contain'
                                          source={{uri : 'http://ycs.ae/himmah/app/webroot/img/user_upload/'+item.reward_main_image}} 
                                          style={styles.imageStyle} />
                                         </TouchableOpacity>
                                         <View style={styles.imageTitleView}>
                                         <Text style={styles.pointsTextStyle}>{item.reward_points}</Text>
                                         <Text style={styles.giftTextStyle}>{item.reward_name}</Text>
                                         </View>
                                     </View>
                                 )}
                                 </Container>
                                 </View>
                             </View>
                                :null
                                }
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
        marginTop: 0
    },
    itemContainer : {
        flexDirection: 'row',    
         flexWrap: 'wrap',
         alignItems: 'center',

    },
    itemSingle : {
        width: '28%',
          margin: 10,
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
    logoStyle2: {
        width: 20,
        height: 15,
        // marginTop: 15
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
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#b4b4b4',
        marginTop: 15
    },
    btnStyle: {
        width: '15%',
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        elevation: 0
    },
    btnTextStyle: {
        color: '#323232',
        fontSize: 8
    },
    pointsBtnView: { 
        flexDirection: 'row', 
        width: '95%', 
        // marginTop: 5,
        marginBottom: 15 
    },
    giftsImagesView: {
        width: '100%',
        alignSelf: 'center',
        flex : 1,
        marginBottom: 30,
        justifyContent: 'space-between'
    },
    imageStyle: {
        width: 100,
        height: 80
    },
    imageTitleView: {   
        width: 100,     
        borderTopWidth: 1.5,
        borderTopColor: '#28048c',
        flexDirection: 'row',
        alignItems: 'center'
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
        width: 75,
        fontSize: 6,
        color: '#28048c',
        // marginLeft: 2,
        textAlign: 'center',
        // backgroundColor: 'green'
    }
})