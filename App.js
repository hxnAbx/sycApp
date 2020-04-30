import React, { Component , useState  } from 'react'
import { Router, Scene,  Actions } from 'react-native-router-flux'
import Home from './Screens/Home'
import HomeAr from './Screens/arbicScreens/Home'
import Profile from './Screens/Profile'
import ProfileAr from './Screens/arbicScreens/Profile'
import Edit from './Screens/Edit'
import EditAr from './Screens/arbicScreens/Edit'
import Registration from './Screens/Registration';
import RegistrationAr from './Screens/arbicScreens/Registration';
import Summer from './Screens/Summer';
import SummerAr from './Screens/arbicScreens/Summer';
// import Scientific from './Screens/Scientific';
import RegisterSuccess from './Screens/RegisterSuccess';
import RegisterSuccessAr from './Screens/arbicScreens/RegisterSuccess';
import Documents from './Screens/Documents';
import NewsScreen from './Screens/NewsScreen';
import NewsScreenAr from './Screens/arbicScreens/NewsScreen';
import NewsScreen2 from './Screens/NewsScreen2';
import Himmah from './Screens/Himmah';
import HimmahAr from './Screens/arbicScreens/Himmah';
import PointsCal from './Screens/PointsCal';
import PointsCalAr from './Screens/arbicScreens/PointsCal';
import Gifts from './Screens/Gifts';
import GiftsAr from './Screens/arbicScreens/GIfts';
import About from './Screens/About';
import AboutAr from './Screens/arbicScreens/About';
import CenterOne from './Screens/CenterOne';
import CenterOneAr from './Screens/arbicScreens/CenterOne';
import CenterTwo from './Screens/CenterTwo';
import CenterTwoAr from './Screens/arbicScreens/CenterTwo';
import CenterThree from './Screens/CenterThree';
import CenterThreeAr from './Screens/arbicScreens/CenterThree';
import CenterFour from './Screens/CenterFour';
import CenterFourAr from './Screens/arbicScreens/CenterFour';
import CenterFive from './Screens/CenterFive';
import CenterFiveAr from './Screens/arbicScreens/CenterFive';
import CenterSix from './Screens/CenterSix';
import CenterSixAr from './Screens/arbicScreens/CenterSix';
import CenterSeven from './Screens/CenterSeven';
import CenterSevenAr from './Screens/arbicScreens/CenterSeven';
import CenterEight from './Screens/CenterEight';
import CenterEightAr from './Screens/arbicScreens/CenterEight';
import Login from './Screens/Login';
import LoginAr from './Screens/arbicScreens/Login';
import Logout from './Screens/Logout';
import ForgotPass from './Screens/ForgotPass'
import NewPass from './Screens/NewPass'
import SignUp1 from './Screens/SignUp1'
import SignUp1Ar from './Screens/arbicScreens/SignUp1'
import SignUp2 from './Screens/SignUp2'
import SignUp2Ar from './Screens/arbicScreens/SignUp2'
import SignUp3 from './Screens/SignUp3'
import SignUp3Ar from './Screens/arbicScreens/SignUp3'
import PhotoGallery from './Screens/PhotoGallery'
import PhotoGalleryAr from './Screens/arbicScreens/PhotoGallery'
import PhotoGallery2 from './Screens/PhotoGallery2'
import VideoGallery from './Screens/VideoGallery'
import VideoGalleryAr from './Screens/arbicScreens/VideoGallery'
import ContactUs from "./Screens/Contact"
import ContactUsAr from "./Screens/arbicScreens/ContactUs"
import Splash from "./Screens/Splash"
import MapScreen from "./Screens/MapScreen"
import RewardDetail from "./Screens/RewardDetail"
import RewardDetailAr from "./Screens/arbicScreens/RewardDetail"
import RewardPoint2 from "./Screens/RewardDetail2"
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const getFonts = () => {
  return Font.loadAsync({
    'helvetica-regular' : require('./assets/fonts/helvetica.ttf'),
    'helvetica-light' : require('./assets/fonts/helvetica-light.ttf'),
    'helvetica-bold' : require('./assets/fonts/helvetica-bold.ttf'),
    'helvetica-ar' : require('./assets/fonts/helveticaneuelt-ar.ttf')
  })
}
export default class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      setFontsLoaded  : false ,
      fontsLoaded : false ,
      isReady: false,

    }
  
}
  async componentDidMount() {
    await  Font.loadAsync({
    'helvetica-regular' : require('./assets/fonts/helvetica.ttf'),
    'helvetica-light' : require('./assets/fonts/helvetica-light.ttf'),
    'helvetica-bold' : require('./assets/fonts/helvetica-bold.ttf'),
    'Roboto_medium' : require('./assets/fonts/Roboto-Medium.ttf'),
    'helvetica-ar' : require('./assets/fonts/helveticaneuelt-ar.ttf')
  })
  this.setState({ fontsLoaded: true });

}



  render() {      
    if( this.state.isReady) {
      return(        
        <Router>
              <Scene key="root">
                <Scene hideNavBar key="splash" component={Splash}  />
                <Scene hideNavBar key="home" component={Home}   />
                <Scene hideNavBar key="homeAr" component={HomeAr}   />
                <Scene hideNavBar key="profile" component={Profile}  />
                <Scene hideNavBar key="profileAr" component={ProfileAr}  />
                {/* <Scene hideNavBar key="qrscan" /> */}
                <Scene hideNavBar key="edit" component={Edit}  />
                <Scene hideNavBar key="editAr" component={EditAr}  />
                <Scene hideNavBar key="registration" component={Registration}  />
                <Scene hideNavBar key="registrationAr" component={RegistrationAr}  />
                <Scene hideNavBar key="summer" component={Summer}  />
                <Scene hideNavBar key="summerAr" component={SummerAr}   />
                {/* <Scene hideNavBar key="scientific" component={Scientific}  /> */}
                <Scene hideNavBar key="registerSuccess" component={RegisterSuccess}  />
                <Scene hideNavBar key="registerSuccessAr" component={RegisterSuccessAr}  />
                <Scene hideNavBar key="documents" component={Documents}  />
                <Scene hideNavBar key="newsScreen" component={NewsScreen}  />
                <Scene hideNavBar key="newsScreenAr" component={NewsScreenAr}  />
                <Scene hideNavBar key="newsScreen2" component={NewsScreen2}  />
                <Scene hideNavBar key="himmah" component={Himmah}  />
                <Scene hideNavBar key="himmahAr" component={HimmahAr}  />
                <Scene hideNavBar key="pointsCal" component={PointsCal}  />
                <Scene hideNavBar key="pointsCalAr" component={PointsCalAr}  />
                <Scene hideNavBar key="gifts" component={Gifts}  />
                <Scene hideNavBar key="giftsAr" component={GiftsAr}  />
                <Scene hideNavBar key="about" component={About}  />
                <Scene hideNavBar key="aboutAr" component={AboutAr}  />
                <Scene hideNavBar key="centerOne" component={CenterOne}  />
                <Scene hideNavBar key="centerOneAr" component={CenterOneAr}  />
                <Scene hideNavBar key="centerTwo" component={CenterTwo}  />
                <Scene hideNavBar key="centerTwoAr" component={CenterTwoAr}  />
                <Scene hideNavBar key="centerThree" component={CenterThree}  />
                <Scene hideNavBar key="centerThreeAr" component={CenterThreeAr}  />
                <Scene hideNavBar key="centerFour" component={CenterFour}  />
                <Scene hideNavBar key="centerFourAr" component={CenterFourAr}  />
                <Scene hideNavBar key="centerFive" component={CenterFive}  />
                <Scene hideNavBar key="centerFiveAr" component={CenterFiveAr}  />
                <Scene hideNavBar key="centerSix" component={CenterSix}  />
                <Scene hideNavBar key="centerSixAr" component={CenterSixAr}  />
                <Scene hideNavBar key="centerSeven" component={CenterSeven}  />
                <Scene hideNavBar key="centerSevenAr" component={CenterSevenAr}  />
                <Scene hideNavBar key="centerEight" component={CenterEight}  />
                <Scene hideNavBar key="centerEightAr" component={CenterEightAr}  />
                <Scene hideNavBar key="login" component={Login}  />
                <Scene hideNavBar key="loginAr" component={LoginAr}  initial />
                <Scene hideNavBar key="logout" component={Logout}  />
                <Scene hideNavBar key="forgotPass" component={ForgotPass}  />
                <Scene hideNavBar key="newPass" component={NewPass}  />
                <Scene hideNavBar key="signUp1" component={SignUp1}  />
                <Scene hideNavBar key="signUp1Ar" component={SignUp1Ar}  />
                <Scene hideNavBar key="signUp2" component={SignUp2}  />
                <Scene hideNavBar key="signUp2Ar" component={SignUp2Ar}  />
                <Scene hideNavBar key="signUp3" component={SignUp3}  />
                <Scene hideNavBar key="signUp3Ar" component={SignUp3Ar}  />
                <Scene hideNavBar key="photoGallery" component={PhotoGallery}  />
                <Scene hideNavBar key="photoGalleryAr" component={PhotoGalleryAr}  />
                <Scene hideNavBar key="photoGallery2" component={PhotoGallery2}  />
                <Scene hideNavBar key="videoGallery" component={VideoGallery}  />
                <Scene hideNavBar key="videoGalleryAr" component={VideoGalleryAr}  />
                <Scene hideNavBar key="mapScreen" component={MapScreen}  />
                <Scene hideNavBar key="rewardDetail" component={RewardDetail}  />
                <Scene hideNavBar key="rewardDetailAr" component={RewardDetailAr}  />
                <Scene hideNavBar key="rewardPoint2" component={RewardPoint2}  />
                <Scene hideNavBar key="contactUs" component={ContactUs}  />
                <Scene hideNavBar key="contactUsAr" component={ContactUsAr}  />

              </Scene>
         </Router>
      )
    }
    else {
      return(
        <AppLoading
        startAsync={this._cacheResourcesAsync , getFonts}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
        />
        )
    }
  }
  async _cacheResourcesAsync() {
    //const images = [require('./Images/appicon.jpg"')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    }); 
    return Promise.all(cacheImages);
  }
}