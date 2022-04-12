import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import LOGO from '../../Assets/Images/Logo.png';
import BACKHEAD from '../../Assets/Images/Backhead.png';
import FastImage from 'react-native-fast-image';
import Feather from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const HeaderComponent = ({
  text,
  backgroundColor = `${COLOR.Primary}`,
  widthImage = 83,
  heightImage = 38,
  source = `${LOGO}`,
  alignItems = 'center',
  type = 'Bold',
  size = 24,
  color = 'white',
  align = 'center',
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor,
      alignItems,
      height: widthPercentageToDP(20),
    },
    fastimage: {
      marginTop: moderateScale(18),
      width: moderateScale(widthImage),
      height: moderateScale(heightImage),
    },
    text: {
      fontFamily: `${type}`,
      fontSize: moderateScale(size),
      color,
      textAlign: align,
    },
  });

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.fastimage}
        source={source}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const MainHeader = ({
  text,
  size = 20,
  color = 'black',
  align = 'center',
  source = `${BACKHEAD}`,
}) => {
  const styles = StyleSheet.create({
    fastimage: {
      height: heightPercentageToDP(24),
      paddingTop: moderateScale(40),
    },
    text: {
      fontSize: moderateScale(size),
      color,
      textAlign: align,
    },
    card: {
      backgroundColor: 'white',
      marginHorizontal: moderateScale(22),
      paddingLeft: moderateScale(8),
      alignItems: 'flex-start',
      alignContent: 'stretch',
      height: moderateScale(105),
      borderRadius: 16,
    },
  });

  return (
    <View style={{flex: 1}}>
      <FastImage
        style={styles.fastimage}
        source={source}
        resizeMode={FastImage.resizeMode.stretch}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flex: 1,
              paddingLeft: moderateScale(22),
              alignItems: 'flex-start',
            }}>
            <Text style={styles.text}>{text}</Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingRight: moderateScale(22),
              alignItems: 'flex-end',
            }}>
            <Feather name="bell" color={color} size={26} />
          </View>
        </View>
      </FastImage>
    </View>
  );
};

export {HeaderComponent, MainHeader};
