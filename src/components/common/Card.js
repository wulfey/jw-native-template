import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Card = props => {
  //   console.log(props);
  return <View style={styles.containerStyle}>{props.children}</View>;
};

// title: "Taylor Swift",
// artist: "Taylor Swift",
// url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
// image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
// thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
