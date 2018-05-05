import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Slider,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseCounter } from './actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      payload:"0",
      value: "10",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{height: 40,width:200, borderColor: 'gray', borderWidth: 1}}
        keyboardType='numeric'
        onChangeText={(text) => this.setState({payload:text})}
        placeholder="Please enter your income"
        // value={this.state.payload.toString()}
        />
        <Text>{this.state.value}</Text>
        <Slider style={styles.slider} step={1} value={10} minimumValue={5} maximumValue={40} onValueChange={(value)=>{this.setState({value:value})}} onSlidingComplete={(value)=>{this.setState({value:value})}}/>
                
        <Text style={styles.welcome}>
          Your Tax: {this.props.counter}
        </Text>
        <Button 
          title="Calculate Your Tax"
          style={styles.button}
          onPress={()=>{this.props.add(parseInt(this.state.payload),parseInt(this.state.value))}}
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
  slider:{
    width: 200,
    height:10,
  }
});

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: bindActionCreators(increaseCounter, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)