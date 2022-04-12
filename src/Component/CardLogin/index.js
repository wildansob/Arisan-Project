import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import Feather from 'react-native-vector-icons/Feather';

const CardLogin = ({
  text1,
  text2,
  value1,
  onChangeText1,
  placeholder1,
  keyboardType1 = 'default',
  value2,
  onChangeText2,
  placeholder2,
  alertMessage,
  setAlertMesage,
}) => {
  const [secureEntry, setSecureEntry] = useState(true);

  //validasi Number
  const NumberValidation = () => {
    let passwordformat = /^(?=.*[0-9])(?=.*[A-Z]).{8,32}$/g;
    if (!value2) {
      setAlertMesage({
        ...alertMessage,
        password: 'Password Harus di isi !!',
      });
    } else if (!value2.match(passwordformat)) {
      setAlertMesage({
        ...alertMessage,
        password:
          'Password Minimal 8 Karakter, mengandung angka dan huruf kapital Minimal 1',
      });
    } else if (value2.match(passwordformat)) {
      setAlertMesage({
        ...alertMessage,
        password: '',
      });
    }
  };

  //validasiPassword
  const PasswordValidation = () => {
    if (!value1) {
      setAlertMesage({
        ...alertMessage,
        phoneNumber: 'Nomor Whatsapp Harus di isi !!',
      });
    } else if (value1 && value1.length < 10) {
      setAlertMesage({
        ...alertMessage,
        phoneNumber: 'Nomor Whatsapp Harus lebih dari 10 !!',
      });
    } else if (value1 && value1.length > 10) {
      setAlertMesage({
        ...alertMessage,
        phoneNumber: '',
      });
    }
  };

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.card2}>
          <Text style={{color: 'black'}}>{text1}</Text>
          <TextInput
            keyboardType={keyboardType1}
            placeholder={placeholder1}
            value={value1}
            style={styles.TextInput2}
            placeholderTextColor={COLOR.light}
            onChangeText={onChangeText1}
            onBlur={PasswordValidation}
            color={COLOR.Black}
          />
          {/* Text alert phoneNumber */}
          {alertMessage.phoneNumber ? (
            <View>
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {alertMessage.phoneNumber}
              </Text>
            </View>
          ) : null}
        </View>

        {/* Bagian Password */}
        <View style={styles.card2}>
          <Text style={{color: 'black'}}>{text2}</Text>
          <View style={styles.containerTextInput}>
            <TextInput
              placeholder={placeholder2}
              value={value2}
              style={styles.TextInput}
              placeholderTextColor={COLOR.light}
              onChangeText={onChangeText2}
              secureTextEntry={secureEntry}
              onBlur={NumberValidation}
              color={COLOR.Black}
            />

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
          </View>

          {/* Text alert password */}
          <View>
            {alertMessage.password ? (
              <Text style={{color: 'red', fontSize: 12}}>
                {alertMessage.password}
              </Text>
            ) : null}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardLogin;

const styles = StyleSheet.create({
  card: {
    paddingBottom: moderateScale(5),
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  card2: {
    marginTop: moderateScale(12),
    backgroundColor: COLOR.Wheat,
    marginHorizontal: moderateScale(8),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    width: widthPercentageToDP(90),
    alignItems: 'flex-start',
    alignSelf: 'center',
    borderRadius: 16,
    elevation: 1,
  },
  TextInput: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1,
    height: moderateScale(38),
  },
  TextInput2: {
    paddingHorizontal: 10,
    borderRadius: 9,
    borderColor: COLOR.Primary,
    borderWidth: 1,
    marginVertical: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    height: moderateScale(38),
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
