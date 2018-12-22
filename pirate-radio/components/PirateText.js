import React from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';
const bpfont = require('../assets/fonts/BlackPearl.ttf');

export class PirateText extends React.Component {

    state = {
        fontLoaded: false,
    }

    async componentDidMount() {
        await Font.loadAsync({
            'BlackPearl': bpfont
          });
      
          this.setState({ fontLoaded: true });
    }
    
    render() {
        if (Platform.OS === 'android') {
            return ( 
                this.state.fontLoaded ? (
                        <Text {...this.props} style={[this.props.style, { fontFamily: 'BlackPearl' }]} />
                ) : null
            )
        } else {
            return ( 
                this.state.fontLoaded ? (
                        <Text {...this.props} style={[this.props.style, { fontFamily: 'BlackPearl' }]} />
                ) : null
            )
        }
    }
}