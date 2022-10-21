import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import images from '../../src/themes/image';

const DrawerCustom = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{}}>
        <ImageBackground source={images.bg} style={{padding: 20}}>
          <Image source={images.avatar} style={styles.bgAvt} />
          <Text style={styles.txtName}>Lê Hồng Phát</Text>
        </ImageBackground>
        <View style={{marginTop:15}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerCustom;

const styles = StyleSheet.create({
  bgAvt: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 20,
  },
  txtName: {
    color: '#FFF',
  },
});
