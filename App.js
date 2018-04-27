import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Counter Value: {this.state.counter}
        </Text>
        <Button 
          title="Press me"
          style={styles.button}
          onPress={()=>{this.setState({counter: this.state.counter + 1})}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    textAlign: 'center'
  },
});

const EnhancedApp = () =>  
(
<Provider store={store}>
  <App />
</Provider>
);
export default App