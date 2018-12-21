import React from 'react';
import { Image, StyleSheet } from 'react-native';

const landingImage = () => (
    <Image style={ styles.image } 
        source={require('../assets/images/pirate-radio.png')} />
);

export default landingImage;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    }
});

// export default class LandingScreen extends React.Component {
//     constructor(props){
//         super(props)
//     }
    
//     render() {
//         return (
//             <Image style={{ 
//                 width: '100%',
//                 height: '100%',
//                 resizeMode: 'stretch',
//             }}  source={require('../assets/images/pirate-radio.png')} />
//         )
//     }
// }