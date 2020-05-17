import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Button , Drawer } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeButtons from './HomeButtons'
import { Actions } from 'react-native-router-flux';
import SideBar from '../../Screens/arbicScreens/SideBar'


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
            side="right"

        > 
            <Container>
                <ImageBackground source={require('../../Images/about1.jpg')} style={{ flex: 1 }} blurRadius={1.5} >
                    <Header transparent>
                        <Left>
                            {/* <Button style={styles.searchButton}>
                                <Feather type='Feather' name='search' color='#fff' size={8} />                           
                            </Button> */}
                        </Left>
                        <Body />
                        <Right>
                        <Button transparent onPress={() => this.openDrawer()}>
                                <Feather type='Feather' name='menu' size={20} color='#fff' />
                            </Button>
                            
                        </Right>
                    </Header>

                    <HomeButtons Title="About" />

                    <View style={styles.imageView}>
                        <Image source={require('../../Images/about1.jpg')} style={styles.imageStyle} />
                    </View>
                </ImageBackground>

                <Content style={{ marginTop: 20 }}>
                    <View style={styles.mainView}>
                        <Text style={styles.textStyle}>عن ناشئة الشارقة</Text>
                        <Text style={styles.textStyle2}>
                        مؤسسة شبابية تركز على الإبداع والابتكار والاكتشاف المبكر لمواهب الناشئة في الأعمار من 13 إلى 18 سنة، والعمل على رعايتها بشكل مستمر، وتهيئة البيئة الجاذبة للشباب في ممارسة الهوايات وتعلم المهارات عبر مراكزها الثمانية المنتشرة في مدن ومناطق إمارة الشارقة، وتزودهم بالخبرات التي تنمي حسهم الوطني وتساعدهم في القيام بأدوارهم للنهوض والارتقاء بالمجتمع الإماراتي. 

                        </Text> 

                        <Text style={[styles.textStyle, { fontSize: 12, marginBottom: 8 }]}>رؤيتنا</Text>
                        <Text style={styles.textStyle2}>
                        شريك مجتمعي في بناء أجيال واعية ومؤثرة.
                        </Text> 

                        <Text style={[styles.textStyle, { fontSize: 12, marginBottom: 8 }]}>رسالتنا</Text>
                        <Text style={styles.textStyle2}>
                        اكتشاف وتنمية واستثمار طاقات الأجيال في بيئة إماراتية محفزة على الإبداع والابتكار، من خلال تصميم وتنفيذ برامج وأنشطة وفعاليات تستشرف المستقبل، بالتعاون مع شركاء محليين وعالميين. 

                        </Text> 

                        <Text style={[styles.textStyle, { fontSize: 12, marginBottom: 8 }]}>قيمنا</Text>
                        <Text style={styles.textStyle2}>
                        المواطنة والإبداع والابتكار والإشراك والتأثير والرعاية والاستدامة.
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
        textAlign:"right",
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
        marginTop: 20,
        textAlign:"right", fontFamily: "helvetica-regular"
    },
    textStyle: { 
        fontSize: 15,
        marginBottom: 15,
        textAlign:"right",
        fontFamily: "helvetica-bold"
    },
    textStyle2: {
        fontSize: 14,
        textAlign: 'right',
        color: '#787878',
        marginBottom: 8,
        fontFamily: "helvetica-regular"
    },
})