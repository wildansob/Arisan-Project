import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderComponent} from '../../Component/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonPrimary from '../../Component/Button';
import {navigate} from '../../Helper/navigate';
import CardLogin from '../../Component/CardLogin';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import {useDispatch, useSelector} from 'react-redux';

const SignIn = () => {
  const dispatch = useDispatch();

  //text Input
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMesage] = useState({
    phoneNumber: '',
    password: '',
  });

  const submitLogin = () => {
    dispatch({
      type: 'LOGIN',
      payload: {
        phoneNumber,
        password,
      },
    });
  };

  return (
    <SafeAreaView>
      <View>
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
            Login Ke Arisan
          </Text>
        </View>
        <CardLogin
          value1={phoneNumber}
          keyboardType1="phone-pad"
          value2={password}
          onChangeText1={text => setPhoneNumber(text)}
          onChangeText2={text => setPassword(text)}
          placeholder1="Masukan Nomor Whatsapp Anda"
          placeholder2="Masukan Password Anda"
          text1="Nomor Whatsapp"
          text2="Password"
          alertMessage={alertMessage}
          setAlertMesage={setAlertMesage}
        />

        <ButtonPrimary
          marginTop={moderateScale(12)}
          text="Login"
          onPress={submitLogin}
        />
        <TouchableOpacity
          style={{
            marginHorizontal: moderateScale(24),
            marginTop: moderateScale(12),
          }}>
          <Text
            style={{
              color: COLOR.oldBrown,
            }}>
            Lupa Password?
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: moderateScale(24),
            marginTop: moderateScale(12),
            marginTop: moderateScale(100),
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>Tidak punya akun ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate('SignUp');
              }}>
              <Text
                style={{
                  color: COLOR.oldBrown,
                  marginLeft: moderateScale(6),
                }}>
                Daftar disini
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
