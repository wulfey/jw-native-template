import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import EmployeeDetail from './EmployeeDetail';

export default class EmployeeList extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       Employees: []
  //     };
  //   }
  state = {
    Employees: []
  };

  async componentWillMount() {
    const res = await fetch(
      'https://rallycoding.herokuapp.com/api/music_Employees'
    );

    this.setState({ Employees: JSON.parse(res._bodyText) });

    console.log(this.state.Employees);
    // debugger;
  }
  showEmployees() {
    return this.state.Employees.map(Employee => (
      // <Text key={Employee.url}> {Employee.title} </Text>
      <EmployeeDetail Employee={Employee} key={Employee.url} />
    ));
  }

  render() {
    const { textStyle, viewStyle } = styles;
    // debugger;
    // style={viewStyle}
    return (
      <ScrollView>
        <Text style={textStyle}>Employee List</Text>
        {this.showEmployees()}
      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 25
  },
  titleStyle: {
    fontSize: 15,
    alignItems: 'flex-start'
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12a1FF',
    height: 60,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  }
};
