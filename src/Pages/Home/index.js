import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Header from '../../../component/Header';
export default class Home extends Component {
  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} />
      </View>
    );
  }
}
