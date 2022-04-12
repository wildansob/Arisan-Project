import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import ButtonPrimary from '../Button';
import {DropdownComponent1, DropdownComponent2} from '../DropDown';

const CardBuatArisan = ({
  text,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry,
}) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: COLOR.White,
      paddingBottom: moderateScale(20),
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    },
    card2: {
      marginTop: moderateScale(12),
      backgroundColor: COLOR.White,
      marginHorizontal: moderateScale(2),
      paddingTop: moderateScale(10),
      paddingBottom: moderateScale(28),
      paddingHorizontal: moderateScale(16),
      width: widthPercentageToDP(90),
      alignItems: 'flex-start',
      height: moderateScale(84),
      alignSelf: 'center',
      borderRadius: 16,
      elevation: 1,
    },
    TextInput: {
      paddingHorizontal: 10,
      borderRadius: 9,
      borderColor: COLOR.Primary,
      borderWidth: 1,
      marginVertical: 5,
      alignSelf: 'stretch',
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.card}>
      <View style={styles.card2}>
        <Text style={{color: 'black'}}>{text}</Text>
        <TextInput
          keyboardType={keyboardType}
          placeholder={placeholder}
          value={value}
          style={styles.TextInput}
          placeholderTextColor={COLOR.light}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          color={COLOR.Black}
        />
      </View>
    </View>
  );
};

//Buat arisan 2
const CardBuatArisan2 = ({
  onPress,
  btnText,
  text1,
  text2,
  text3,
  footNote,
  marginVerticalFoot = 10,
  marginLeftFoot = 30,
  value1,
  onChangeText1,
  placeholder1,
  keyboardType1 = 'default',
  secureTextEntry,
  isEdit = false,
  disable,
}) => {
  const styles = StyleSheet.create({
    card: {
      marginTop: moderateScale(16),
      backgroundColor: COLOR.White,
      paddingBottom: moderateScale(5),
      borderRadius: 24,
      elevation: 1,
    },
    card2: {
      marginTop: moderateScale(12),
      backgroundColor: COLOR.White,
      marginHorizontal: moderateScale(2),
      paddingTop: moderateScale(10),
      paddingBottom: moderateScale(28),
      paddingHorizontal: moderateScale(16),
      width: widthPercentageToDP(90),
      alignItems: 'flex-start',
      height: moderateScale(84),
      alignSelf: 'center',
      borderRadius: 16,
      elevation: 1,
    },
    TextInput: {
      paddingHorizontal: 10,
      borderRadius: 9,
      borderColor: COLOR.Primary,
      borderWidth: 1,
      marginVertical: 5,
      alignSelf: 'stretch',
      alignItems: 'center',
      color: COLOR.Black,
    },
  });
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.card2}>
          <Text style={{color: 'black'}}>{text1}</Text>
          <TextInput
            keyboardType={keyboardType1}
            placeholder={placeholder1}
            value={value1}
            style={styles.TextInput}
            placeholderTextColor={COLOR.light}
            onChangeText={onChangeText1}
            secureTextEntry={secureTextEntry}
          />
        </View>
        {!isEdit && (
          <>
            <View style={styles.card2}>
              <Text style={{color: 'black'}}>{text2}</Text>
              <DropdownComponent1 />
            </View>
            <View style={styles.card2}>
              <Text style={{color: 'black'}}>{text3}</Text>
              <DropdownComponent2 />
            </View>
          </>
        )}
        <ButtonPrimary onPress={onPress} text={btnText} disabled={disable} />
        <Text
          style={{
            marginVertical: moderateScale(marginVerticalFoot),
            marginLeft: moderateScale(marginLeftFoot),
          }}>
          {footNote}
        </Text>
      </View>
    </View>
  );
};

export {CardBuatArisan, CardBuatArisan2};
