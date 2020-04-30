import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Container, Content, Header, Title, Right, Button, Left, Body, Drawer } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import StarRating from 'react-native-star-rating'
import { Actions } from 'react-native-router-flux';

export default class RewardDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            starCount1: 4
        }
    }

    onStarRatingPress1(rating) {
        this.setState({
            starCount1: rating
        });
    }

    render() {
        return(
            <Container>
                <Header style={styles.headerStyle}>
                    <Left style={{ flex: 0.2 }}>
                        <Button transparent onPress={() => Actions.gifts()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titleStyle}>Detail</Title>
                    </Body>
                    <Right style={{ flex: 0.2 }}>
                        {/* <TouchableOpacity onPress={() => Actions.photoGallery()}>
                            <Feather type='Feather' name='arrow-left' size={20} color='#323232' />
                        </TouchableOpacity> */}
                    </Right>
                </Header>

                <Content>
                    <View style={styles.mainView}>
                        <Image source={require('../Images/gift5.jpg')} style={styles.imageStyle} />
                        
                        <View style={styles.detailView}>
                            <View>
                                <Text style={styles.textStyle}>Football</Text>

                                <Text style={styles.textStyle3}>Categories : Sports</Text>

                                <View style={styles.ratingView}>
                                    <Text style={[styles.textStyle3, { marginTop: 0 }]}>Rating : </Text>
                                    <StarRating
                                        starSize = {12}
                                        disabled={false}
                                        maxStars={5}
                                        fullStarColor='#fec107'
                                        rating={this.state.starCount1}
                                        selectedStar={(rating) => this.onStarRatingPress1(rating)}
                                    />
                                </View>
                            </View>
                            <View style={styles.pointsTextView}>
                                <Text style={styles.textStyle2}>120</Text>
                            </View>
                        </View>

                        <View style={styles.lineStyle}></View>

                        <Text style={[styles.textStyle, { fontSize: 14 }]}>Overview</Text>

                        <Text style={styles.textStyle3}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                            has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book. It has 
                            survived not only five centuries
                        </Text>

                        {/* <Button style={styles.btnStyle2}>
                            <Text style={styles.btnTextStyle2}>Redeem</Text>
                        </Button> */}
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
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30
    },
    imageStyle: {
        width: '100%',
        height: 200,
        borderRadius: 3
    },
    detailView: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333333'
    },
    pointsTextView: {
        width: 75,
        height: 45,
        backgroundColor: '#e24407',        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    textStyle2: {
        color: '#f2f2f2',
        fontWeight: '500',
        fontSize: 25,
    },
    textStyle3: {
        fontSize: 12,
        color: '#9a9a9a',
        marginTop: 12
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#707070',
        marginTop: 10,
        marginBottom: 20
    },
    btnStyle2: {
        width: 130,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 0,
        marginTop: 30,
        marginBottom: 30,
        alignSelf: 'center',
        elevation: 0
    },
    btnTextStyle2: {
        color: '#fff',
        fontSize: 14,
        // fontWeight: 'bold'
    },
    ratingView: { 
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 5 
    }
})