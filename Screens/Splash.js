import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
  export default class splash extends React.Component {
    constructor(){
      super();
      this.state = {
          jsonResult : [],
          loaded: true,
          error: null,
          userToken  : null,
          isUserloaded : false,
          baseUrl : null,
          profileImg : null
          
      }
    }
 
  render (){
    return (
        <View style={styles.container}>
           <View style={styles.imgContainer} >
              <Image
                  style={styles.imgr}
                  source={require('../assets/logo.jpg')}
              />
            </View>
        <View >
          <Image
                style={styles.img}
                source={require('../assets/bg.jpg')}
            />
           
          
        </View>
        <View style={styles.languageButtonsWrapper}>
          <Text style={styles.languageButtons} onPress={() => Actions.home()}>EN</Text>
          <Text style={styles.languageButtons} onPress={()=> Actions.homeAr()}>ع‎</Text>
        </View>
      </View>
    )
}
    }

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: "100%",
    },
    imgContainer: {
      padding: 10,
      position: 'absolute',
        width: 137,
        height: 160,
        zIndex: 100,
        top: 300,
        left: '31%',
        backgroundColor: 'white'
    },
      img: {
        width: '100%',
        height: 400,
        resizeMode: 'contain'
      },
      imgr: {
        flex:1,
        width: "100%",
        resizeMode: "contain"
      },
      languageButtonsWrapper: {
        width: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '36%',zIndex:2,
        backgroundColor: 'white'
      },
      languageButtons: {
        width: 30,
        padding: 5,
        backgroundColor: '#B3B3B3',
        color: 'white',
        textAlign: 'center',
        fontFamily: "helvetica-ar"
      }
  });