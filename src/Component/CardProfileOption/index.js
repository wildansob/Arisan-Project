import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import ButtonPrimary from '../Button';
import FotoProfile from '../../Component/FotoProfile';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

const CardProfileOption = ({
  onPress,
  text1,
  text2,
  text3,
  footNote,
  marginVerticalFoot = 10,
  marginLeftFoot = 30,
  value1,
  onChangeText1,
  placeholder1,
  value2,
  onChangeText2,
  placeholder2,
  value3,
  onChangeText3,
  placeholder3,
  keyboardType1 = 'default',
  keyboardType2 = 'default',
  keyboardType3 = 'default',
  show = false,
  secureTextEntry,
  setSecureEntry,
  secureEntry,
  secureTextEntry2,
  setSecureEntry2,
  secureEntry2,
  secureTextEntry3,
  setSecureEntry3,
  secureEntry3,
  BtnText,
  editable
}) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: COLOR.White,
      paddingBottom: moderateScale(5),
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
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
      alignSelf: 'stretch',
      alignItems: 'center',
      flex: 1,
    },
    containerTextInput: {
      paddingHorizontal: 10,
      borderRadius: 9,
      borderColor: COLOR.Primary,
      borderWidth: 1,
      marginVertical: moderateScale(4),
      alignSelf: 'stretch',
      alignItems: 'center',
      flexDirection: 'row',
    },
  });
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.card2}>
          <Text style={{color: 'black'}}>{text1}</Text>
          <View style={styles.containerTextInput}>
            <TextInput
              keyboardType={keyboardType1}
              placeholder={placeholder1}
              value={value1}
              style={styles.TextInput}
              placeholderTextColor={COLOR.light}
              onChangeText={onChangeText1}
              secureTextEntry={secureTextEntry}
              color={COLOR.Black}
            />
            {show ? (
              <TouchableOpacity
                style={{marginRight: moderateScale(6)}}
                onPress={() => {
                  setSecureEntry(prev => !prev);
                }}>
                <View>
                  {secureEntry ? (
                    <Feather name="eye-off" color={COLOR.light} size={19} />
                  ) : (
                    <Feather name="eye" color={COLOR.light} size={19} />
                  )}
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <View style={styles.card2}>
          <Text style={{color: 'black'}}>{text2}</Text>
          <View style={styles.containerTextInput}>
            <TextInput
              keyboardType={keyboardType2}
              placeholder={placeholder2}
              value={value2}
              style={styles.TextInput}
              placeholderTextColor={COLOR.light}
              onChangeText={onChangeText2}
              secureTextEntry={secureTextEntry2}
              color={COLOR.Black}
              editable={editable}
            />
            {show ? (
              <TouchableOpacity
                style={{marginRight: moderateScale(6)}}
                onPress={() => {
                  setSecureEntry2(prev => !prev);
                }}>
                <View>
                  {secureEntry2 ? (
                    <Feather name="eye-off" color={COLOR.light} size={19} />
                  ) : (
                    <Feather name="eye" color={COLOR.light} size={19} />
                  )}
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <View style={styles.card2}>
          <Text style={{color: 'black'}}>{text3}</Text>
          <View style={styles.containerTextInput}>
            <TextInput
              placeholder={placeholder3}
              keyboardType={keyboardType3}
              value={value3}
              style={styles.TextInput}
              placeholderTextColor={COLOR.light}
              onChangeText={onChangeText3}
              secureTextEntry={secureTextEntry3}
              color={COLOR.Black}
            />
            {show ? (
              <TouchableOpacity
                style={{marginRight: moderateScale(6)}}
                onPress={() => {
                  setSecureEntry3(prev => !prev);
                }}>
                <View>
                  {secureEntry3 ? (
                    <Feather name="eye-off" color={COLOR.light} size={19} />
                  ) : (
                    <Feather name="eye" color={COLOR.light} size={19} />
                  )}
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <ButtonPrimary onPress={onPress} text={BtnText} />
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

//edit Profile
const CardProfileOption2 = ({
  onPress,
  ImageLibrary,
  pickedImage = null,
  text1,
  text2,
  text3,
  text4,
  text5,
  footNote,
  marginVerticalFoot = 10,
  marginLeftFoot = 30,
  value1,
  onChangeText1,
  placeholder1,
  value2,
  onChangeText2,
  placeholder2,
  value3,
  onChangeText3,
  placeholder3,
  value4,
  onChangeText4,
  placeholder4,
  keyboardType1 = 'default',
  keyboardType2 = 'default',
  keyboardType3 = 'default',
  keyboardType4 = 'default',
  secureTextEntry,
  editable,
}) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: COLOR.White,
      paddingBottom: moderateScale(5),
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
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
    card3: {
      marginTop: moderateScale(12),
      backgroundColor: COLOR.White,
      marginHorizontal: moderateScale(2),
      paddingTop: moderateScale(10),
      paddingBottom: moderateScale(10),
      paddingHorizontal: moderateScale(16),
      width: widthPercentageToDP(90),
      flexDirection: 'row',
      alignSelf: 'center',
      height: moderateScale(84),
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
  const {dataProfile} = useSelector(state => state.loginReducer);
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.card3}>
          {/* satu */}
          <View
            style={{
              marginBottom: moderateScale(19),
              marginRight: moderateScale(10),
              flex: 1,
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
            }}>
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

          {/* dua */}
          <View
            style={{
              marginTop: moderateScale(19),
              flex: 1,
              justifyContent: 'flex-end',
              alignSelf: 'flex-end',
            }}>
            <Text style={{color: 'black'}}>{text2}</Text>
            <TextInput
              placeholder={placeholder2}
              keyboardType={keyboardType2}
              value={value2}
              style={styles.TextInput}
              placeholderTextColor={COLOR.light}
              onChangeText={onChangeText2}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {/* single input */}
          {/* tiga */}
        </View>
        <View style={styles.card2}>
          <Text style={{color: 'black'}}>{text3}</Text>
          <TextInput
            placeholder={placeholder3}
            keyboardType={keyboardType3}
            value={value3}
            style={styles.TextInput}
            placeholderTextColor={COLOR.light}
            onChangeText={onChangeText3}
            secureTextEntry={secureTextEntry}
            editable={editable}
          />
        </View>
        {/* empat */}
        <View style={styles.card2}>
          <Text style={{color: 'black'}}>{text4}</Text>
          <TextInput
            placeholder={placeholder4}
            keyboardType={keyboardType4}
            value={value4}
            style={styles.TextInput}
            placeholderTextColor={COLOR.light}
            onChangeText={onChangeText4}
            secureTextEntry={secureTextEntry}
          />
        </View>

        {/* Change Foto Profile */}
        <View>
          <Text
            style={{
              marginLeft: moderateScale(35),
              marginTop: moderateScale(12),
              fontSize: moderateScale(14),
            }}>
            Foto Profile :
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: moderateScale(18),
            marginTop: moderateScale(12),
          }}>
          <FotoProfile source={pickedImage ?? dataProfile.image} />
          <View>
            <ButtonPrimary
              onPress={ImageLibrary}
              color={COLOR.Black}
              backgroundColor={COLOR.Primary}
              borderColor={COLOR.Primary}
              text="Ubah Foto"
              borderRadius={10}
            />
          </View>
        </View>
        <ButtonPrimary onPress={onPress} text="Simpan" />
        <Text
          style={{
            marginVertical: moderateScale(marginVerticalFoot),
            marginLeft: moderateScale(marginLeftFoot),
          }}>
          {footNote}
        </Text>
      </View>
    </ScrollView>
  );
};


export {CardProfileOption, CardProfileOption2};
