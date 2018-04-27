import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseCounter } from './actions';

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
          Counter Value: {this.props.counter}
        </Text>
        <Button 
          title="Press me"
          style={styles.button}
          onPress={()=>{this.props.increaseCounter()}}
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

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: bindActionCreators(increaseCounter, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)