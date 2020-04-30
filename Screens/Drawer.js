import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './yourPathToSideBar';

export default class DrawerExample extends Component {
    closeDrawer = () => {
        this.drawer._root.close()
        alert('Close')
    }

    openDrawer = () => { 
        this.drawer._root.open()
        alert('open')
     };

    render() { 
        return ( 
            <Drawer 
                ref={(ref) => { this.drawer = ref; }} 
                content={<SideBar navigator={this.navigator} />} 
                onClose={() => this.closeDrawer()} > // Main View 
            </Drawer>
        )
    } 
}