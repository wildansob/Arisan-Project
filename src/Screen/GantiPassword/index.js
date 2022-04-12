import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {CardProfileOption} from '../../Component/CardProfileOption';

const GantiPassword = () => {
  //text Input
  const [passwordLama, setPasswordLama] = useState('');
  const [passwordBaru, setPasswordBaru] = useState('');
  const [konfirmPassword, setKonfirmPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [secureEntry2, setSecureEntry2] = useState(true);
  const [secureEntry3, setSecureEntry3] = useState(true);

  const dispatch = useDispatch();

  //function validate password lama & baru
  onSubmit = () => {
    if (passwordBaru !== konfirmPassword) {
      Alert.alert('Error', 'Password Baru dan Konfirmasi Password Harus Sama');
    } else if (passwordLama && passwordBaru && konfirmPassword) {
      dispatch({
        type: 'GANTI_PASSWORD',
        payload: {oldPassword: passwordLama, newPassword: passwordBaru},
      });
    } else {
      Alert.alert(
        'Error',
        'Password Lama, Password Baru dan Konfirmasi Password Harus Diisi',
      );
    }
  };

  return (
    <View>
      <CardProfileOption
        value1={passwordLama}
        value2={passwordBaru}
        value3={konfirmPassword}
        onChangeText1={text => setPasswordLama(text)}
        onChangeText2={text => setPasswordBaru(text)}
        onChangeText3={text => setKonfirmPassword(text)}
        placeholder1="Masukan Password Lama"
        placeholder2="Masukan Password baru"
        placeholder3="Masukan Konfirmasi Password"
        secureTextEntry={secureEntry}
        secureTextEntry2={secureEntry2}
        secureTextEntry3={secureEntry3}
        marginVerticalFoot={0}
        text1="Password Lama"
        text2="Password Baru"
        text3="Konfirmasi Password"
        onPress={onSubmit}
        secureEntry={secureEntry}
        secureEntry2={secureEntry2}
        secureEntry3={secureEntry3}
        setSecureEntry={setSecureEntry}
        setSecureEntry2={setSecureEntry2}
        setSecureEntry3={setSecureEntry3}
        show={true}
        BtnText="Simpan"
      />
    </View>
  );
};

export default GantiPassword;
