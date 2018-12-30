import React from 'react';
import { ImageBackground } from 'react-native';

const bgImageAsset = require('../assets/images/pirate-radio-background.jpg');

export class SeaBackground extends React.Component {
    render (){
        return (
            <ImageBackground 
                source={bgImageAsset} 
                style={{
                    width: '100%',
                    height: '100%',
                }}
                imageStyle={{
                    resizeMode: 'cover'
                }} >

                {this.props.children}
            </ImageBackground>
        )
    }
}
