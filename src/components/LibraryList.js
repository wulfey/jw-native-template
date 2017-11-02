import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Text, View, TextInput, FlatList } from 'react-native';
import { Button, Card, CardSection, InputBox, Spinner } from './common';
import ListItem from './ListItem';

class LibraryList extends Component {
  //   state = { id: -1, description: '' };
  //   componentWillMount() {
  //     const ds = new ListView.DataSource({
  //       rowHasChanged: (r1, r2) => r1 !== r2
  //     });
  //     this.setState = {
  //       dataSource: ds.cloneWithRows(this.props.libraries)
  //     };
  //   }
  //   constructor() {
  //     super();
  //     const ds = new ListView.DataSource({
  //       rowHasChanged: (r1, r2) => r1 !== r2
  //     });
  //     this.state = {
  //       dataSource: ds.cloneWithRows(this.props.libraries)
  //     };
  //   }
  //   {id: 0, title: "Webpack", description: "Webpack is a module bundler. It packs CommonJs/AMD… multiple bundles, which can be loaded on demand."}

  keyExtractor(library) {
    return library.id;
  }

  renderLibrary(library) {
    return <ListItem library={library} />;
  }

  render() {
    // const { errorTextStyle } = styles;
    console.log(this.props);
    return (
      <FlatList
        data={this.props.libraries}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => <ListItem library={item} />}
      />
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
