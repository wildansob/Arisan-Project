import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import {useSelector, useDispatch} from 'react-redux';

const CardSaldo = () => {
  const dispatch = useDispatch();
  const {dataProfile} = useSelector(state => state.loginReducer);

  return (
    <View style={styles.card}>
      <Text style={{color: 'black'}}>
        Hi {dataProfile.firstName}, Selamat datang di Arisan!{' '}
      </Text>
      <Text style={{color: COLOR.Primary, marginTop: moderateScale(4)}}>
        Saldo Arisan
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          marginTop: moderateScale(4),
          color: COLOR.Black,
        }}>
        Rp. {dataProfile.saldo}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: heightPercentageToDP(12),
    backgroundColor: COLOR.White,
    marginHorizontal: moderateScale(22),
    paddingVertical: moderateScale(16),
    paddingLeft: moderateScale(24),
    alignItems: 'flex-start',
    height: moderateScale(114),
    borderRadius: 16,
    flexDirection: 'column',
    elevation: 1,
  },
});
export default CardSaldo;
