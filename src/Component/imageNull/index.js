import React from 'react';
import {Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import SEO1 from '../../Assets/Images/seo1.png';

const ImageNull = ({
  text,
  height = 80,
  marginTopImage = 50,
  marginTopText = 22,
  marginTop = 0,
}) => {
  return (
    <View style={{marginTop: moderateScale(marginTop)}}>
      <View
        style={{
          marginTop: moderateScale(marginTopImage),
          justifyContent: 'center',
        }}>
        <FastImage
          style={{
            height: moderateScale(height),
          }}
          source={SEO1}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View
          style={{
            alignItems: 'center',
            marginTop: moderateScale(marginTopText),
          }}>
          <Text style={{color: 'black'}}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ImageNull;
