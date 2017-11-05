import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardSection, Card } from '../common';
import NavMenu from '../NavMenu';
import styles from './screenStyles';

const EMPLOYEES = [
  { name: 'Jason', id: 0, started: 2016 },
  { name: 'Farhad', id: 1, started: 2017 },
  { name: 'Brad', id: 2, started: 2017 }
];

const EmployeesScreen = () => (
  <View style={styles.container}>
    <NavMenu current={'Employees'} />
    <View style={styles.subContainer}>
      <CardSection>
        <Text style={styles.welcome}>Employees Screen</Text>
      </CardSection>
      {renderEmployees()}
    </View>
  </View>
);

const renderEmployees = () => {
  return EMPLOYEES.map(Employee => (
    <CardSection key={Employee.id}>
      <Text>
        {Employee.name}, started: {Employee.start}
      </Text>
    </CardSection>
  ));
};

// const EmployeesScreen = ({ navigation }) => (
//   <View style={styles.navView}>
//     <CardSection>
//       <Button onPress={() => navigation.navigate('Home')}>Go to home</Button>
//       <Text>Employees Screen</Text>
//       <Button onPress={() => navigation.navigate('Login')}>Go to login</Button>
//     </CardSection>
//     {renderEmployees()}
//   </View>
// );

EmployeesScreen.navigationOptions = {
  title: 'Employees'
};

export default EmployeesScreen;
