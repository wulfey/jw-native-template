import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { Button, Card, CardSection } from './common';

class ListItem extends Component {
  componentWillUpdate = () => {
    LayoutAnimation.spring();
  };

  showSelected() {
    const { library, expanded } = this.props;
    if (expanded) {
      return <Text style={styles.descriptionStyle}>{library.description}</Text>;
    }
  }

  render() {
    // console.log(this.state);
    // console.log(this.props);
    const { titleStyle } = styles;
    const { library, library: { title } } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.selectItem(library);
        }}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          <CardSection>{this.showSelected()}</CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    flex: 1,
    fontSize: 12,
    paddingLeft: 15,
    paddingRight: 15
  }
};

// const mapStateToProps = state => {
//   return { selected: state.selected };
// };

// ownProps === this.propshis
// in this case ownProps is the props of a ListItem with 1 library
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selected === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);

// this alternative formulation is when you dn' bother with mapping state to props
// if we don't need the data as a state, we can just use the props
// export default connect(null, actions)(ListItem);
