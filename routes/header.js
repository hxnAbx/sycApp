import React from 'react';
import {StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';


export default class Header extends React.Component {

    constructor(){
        super();
        this.state = {
            loaded: true,
            error: null,
            userToken  : null,
            isUserloaded : false,
            baseUrl : null,
        }
    
    }
    _loadInitialState = async() => {
        var usrId = await AsyncStorage.getItem('user_id');
        let usrToken = await AsyncStorage.getItem('user_token');
        if(usrToken == null) {
            this.setState({userId:usrId, userToken:usrToken , isUserloaded : false})
        }
        else{
            this.setState({userId:usrId, userToken:usrToken , isUserloaded : true})

        }
    }
    async componentDidMount(){
        this.setState({baseUrl : GLOBAL.baseURL})
         await this._loadInitialState().done();
     }

render() {
    return(
        

<React.Fragment>
<View style={styles.menuWrapper}>
                <Text style={styles.li} onPress={ ()=> this.props.navigator.navigate('Home')}>Home</Text>
                <Text style={styles.li} onPress={() => navigate('AboutSYC')}>About Us</Text>
                <Text style={styles.li} onPress={() => navigate('Events')}>Events</Text>
                <Text style={[styles.li, styles.active]}>Membership</Text>
                <Text style={styles.li} onPress={() => navigate('News')}>Media Center</Text>
            </View>
            <View style={styles.subMenuWrapper}>
            {!this.state.isUserloaded && (
                 <React.Fragment>
                <Text style={styles.submenu} onPress={() => navigate('JoinUs')}>Join Us</Text>
                <Text style={styles.submenu} onPress={() => navigate('Login')}>Login</Text>
                </React.Fragment>
                )}
                    {this.state.isUserloaded && (
                    <React.Fragment>
                        <Text style={[styles.submenu, styles.active]} >Profile</Text>
                        <Text style={styles.submenu} onPress={this.logoutUser} >Logout</Text>
                    </React.Fragment>
                    )}
            </View>
            </React.Fragment>
    )
    }
}

const styles = StyleSheet.create({
        menuWrapper: {
        position: "absolute",
        flexDirection: "row",
        left: 10,
        zIndex: 3,
        top: 70,
        
    },
    li: {
        backgroundColor: "white",
        paddingLeft: 7,
        paddingTop: 1,
        paddingRight: 7,
        paddingBottom: 1,
        margin: 4,
        fontSize: 11,
        fontFamily: "helvetica-regular"
    },
    subMenuWrapper: {
        position: "absolute",
        flexDirection: "row",
        right: 90,
        zIndex: 3,
        top: 110,
        
    },
    submenu: {
        backgroundColor: "white",
        paddingLeft: 5,
        paddingTop: 2,
        paddingRight: 5,
        paddingBottom: 2,
        margin: 5,
        fontSize: 9,
        fontFamily: "helvetica-regular"
    },
    active: {
        backgroundColor: "#333333",
        color: "white",
    },
  
  });