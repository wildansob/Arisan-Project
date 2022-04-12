import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';

const CardProfile = ({onPress, onPress2}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{color: 'black'}}>Edit Profile </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress2}>
        <Text style={{marginTop: moderateScale(12), color: COLOR.Black}}>
          Ganti Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: heightPercentageToDP(3),
    backgroundColor: COLOR.White,
    marginHorizontal: moderateScale(22),
    paddingVertical: moderateScale(16),
    paddingLeft: moderateScale(24),
    alignItems: 'flex-start',
    height: moderateScale(84),
    borderRadius: 16,
    flexDirection: 'column',
  },
});
export default CardProfile;
