import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import images from '../../src/themes/image';
import fonts from '../../src/themes/font';
import DATA from '../../data/dataImg';

const Header = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
          marginVertical: 30,
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={images.menu} />
        </TouchableOpacity>
        <Image source={images.avatar} style={styles.avtRight} />
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text
          style={{fontFamily: fonts.latoBold, fontSize: 32, color: 'black'}}>
          Discover
        </Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.discoverItems}>
            <Text style={styles.txt}>All</Text>
            <Text style={styles.txt}>Destinations</Text>
            <Text style={styles.txt}>Cities</Text>
            <Text style={styles.txt}>Experiences</Text>
          </View>
        </View>
        <View style={styles.discoverItemsWrapper}>
          <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({index, item}) => (
              <Image
                source={item.image} /* Use item to set the image source */
                key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
                style={{
                  width: 170,
                  height: 250,
                  borderWidth: 2,
                  borderColor: '#d35647',
                  resizeMode: 'contain',
                  margin: 8,
                  borderRadius: 20,
                }}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  avtRight: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  discoverItems: {
    flexDirection: 'row',
  },
  txt: {
    marginRight: 30,
    color: '#CFCFD1',
  },
  renderImg: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
});
