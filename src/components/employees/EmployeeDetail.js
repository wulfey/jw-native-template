import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';

import { Card, CardSection, Button } from '../common';

export default class EmployeeDetail extends Component {
  render() {
    const {
      imageViewStyle,
      textViewStyle,
      containerStyle,
      imageStyle,
      textStyle,
      thumbStyle
    } = styles;
    const { title, artist, url, image, thumbnail_image } = this.props.Employee;
    return (
      <Card>
        <CardSection style={containerStyle}>
          <View style={imageViewStyle}>
            <Image style={thumbStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style={textViewStyle}>
            <Text style={textStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>Buy Employee</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  thumbStyle: {
    width: 50,
    height: 50
  },
  imageStyle: {
    width: null,
    height: 300,
    flex: 1
  },
  textStyle: {
    fontSize: 18
  },
  imageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  textViewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: '#FFF'
    // elevation: 2,
    // position: 'relative'
  },
  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#D1D'
  }
};

// title: "Taylor Swift",
// artist: "Taylor Swift",
// url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
// image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
// thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
