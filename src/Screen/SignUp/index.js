import React, {useState, useEffect} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {HeaderComponent} from '../../Component/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonPrimary from '../../Component/Button';
import {navigate} from '../../Helper/navigate';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import CardSignUp from '../../Component/CardSignUp';
import {useDispatch, useSelector} from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  //text Input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');
  const [alertMessage, setAlertMesage] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    konfirmasiPassword: '',
  });

  //KonfirmPassword Harus Sama dengan Password
  const validation = () => {
    if (!firstName) return false;
    if (!lastName) return false;
    if (!phoneNumber) return false;
    if (!email) return false;
    if (!password) return false;
    if (konfirmasiPassword !== password) return false;
    return true;
  };

  const submitSignUp = () => {
    const data = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    };
    dispatch({type: 'signUp', payload: data});
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderComponent />
        <View
          style={{
            marginTop: moderateScale(12),
            marginHorizontal: moderateScale(24),
          }}>
          <Text
            style={{
              fontSize: moderateScale(18),
              fontWeight: 'bold',
              color: COLOR.Black,
            }}>
            Buat Akun
          </Text>
        </View>
        <CardSignUp
          value1={firstName}
          value2={lastName}
          value3={phoneNumber}
          value4={email}
          value5={password}
          value6={konfirmasiPassword}
          onChangeText1={text => setFirstName(text)}
          onChangeText2={text => setLastName(text)}
          onChangeText3={text => setPhoneNumber(text)}
          onChangeText4={text => setEmail(text)}
          onChangeText5={text => setPassword(text)}
          onChangeText6={text => setKonfirmasiPassword(text)}
          placeholder1="Nama Depan"
          placeholder2="Nama Belakang"
          placeholder3="Masukan Nomor Whatsapp"
          placeholder4="Masukan Email"
          placeholder5="Buat Password"
          placeholder6={'Konfirmasi Password'}
          text1="Nama Depan"
          text2="Nama Belakang"
          text3="Nomor Whatsapp"
          text4="Email"
          text5="Password"
          text6="Konfirmasi Password"
          keyboardType3={'phone-pad'}
          keyboardType4={'email-address'}
          alertMessage={alertMessage}
          setAlertMesage={setAlertMesage}
        />

        <ButtonPrimary
          text="Buat Akun"
          onPress={submitSignUp}
          disabled={!validation()}
        />

        <View
          style={{
            marginHorizontal: moderateScale(24),
            marginTop: moderateScale(80),
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>Sudah punya akun ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate('SignIn');
              }}>
              <Text
                style={{
                  color: COLOR.oldBrown,
                  marginLeft: moderateScale(6),
                  marginBottom: moderateScale(36),
                }}>
                Masuk disini
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
