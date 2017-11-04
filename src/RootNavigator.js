import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  Header,
  Button,
  Card,
  CardSection,
  Spinner
} from './components/common';
import EmployeeDetail from './components/employees/EmployeeDetail';
import LoginForm from './components/LoginForm';

const HomeScreen = ({ navigation }) => (
  <View style={styles.navView}>
    <CardSection>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Employees')}>
        Go to Employees
      </Button>
      <Button onPress={() => navigation.navigate('Login')}>Go to login</Button>
    </CardSection>
  </View>
);

const EMPLOYEES = [
  { name: 'Jason Wolfe', start: 2016, id: 0 },
  { name: 'Farhad Irani', start: 2017, id: 1 },
  { name: 'Bradley Wolfe', start: 2017, id: 2 }
];

const renderEmployees = () => {
  return EMPLOYEES.map(Employee => (
    <CardSection key={Employee.id}>
      <Text>
        {Employee.name}, started: {Employee.start}
      </Text>
    </CardSection>
  ));
};

const EmployeesScreen = ({ navigation }) => (
  <View style={styles.navView}>
    <CardSection>
      <Button onPress={() => navigation.navigate('Home')}>Go to home</Button>
      <Text>Employees Screen</Text>
      <Button onPress={() => navigation.navigate('Login')}>Go to login</Button>
    </CardSection>
    {renderEmployees()}
  </View>
);

const LoginScreen = ({ navigation }) => (
  <View style={styles.navView}>
    <CardSection>
      <Button onPress={() => navigation.navigate('Home')}>Go to home</Button>
      <Button onPress={() => navigation.navigate('Employees')}>
        Go to Employees
      </Button>

      <Text>Login Screen</Text>
    </CardSection>
    <LoginForm navigation={navigation} />
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Employees: {
    screen: EmployeesScreen,
    navigationOptions: {
      headerTitle: 'Employees'
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login'
    }
  }
});

const styles = {
  navView: { flex: 1, justifyContent: 'flex-start' }
};

export default RootNavigator;

// import React from 'react';
// import { Scene, Router } from 'react-native-router-flux';
// import LoginForm from './components/LoginForm';

// const RouterComponent = () => {
//   return (
//     <Router>
//       <Scene key="login" component={LoginForm} title="Please Login" />
//     </Router>
//   );
// };

// export default RouterComponent;
