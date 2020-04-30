import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import AboutSYC from '../screens/aboutSYC';

const DrawerNavigator = createDrawerNavigator({
    AboutSYC : {
        screen: AboutSYC
    }
})

export default createAppContainer(DrawerNavigator);