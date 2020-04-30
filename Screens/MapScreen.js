import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Content } from 'native-base';

export default class MapScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 25.3463,
                longitude: 55.4209,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        }
    }

    getInitialState() {
        return {
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.00,
            longitudeDelta: 0.00,
          },
        };
      }
       
    onRegionChange(region) {
        this.setState({ region });
     }
       
    render() {
        return (
            <Content contentContainerStyle={{ flexGrow: 1 }}>
                <MapView
                    region={this.state.region}
                    // onRegionChange={this.onRegionChange}
                    style={styles.map}
                />
            </Content>          
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left:0,
        right:0,
        bottom:0,
        alignItems:'center'
    },
    map: {
        position:'absolute',
        top: 0,
        left:0,
        right:0,
        bottom:0
    },
})