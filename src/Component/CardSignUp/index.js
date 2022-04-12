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

const CardSignUp = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  value1,
  onChangeText1,
  placeholder1,
  secureTextEntry1,
  value2,
  onChangeText2,
  placeholder2,
  secureTextEntry2,
  value3,
  onChangeText3,
  placeholder3,
  secureTextEntry3,
  value4,
  onChangeText4,
  placeholder4,
  secureTextEntry4,
  value5,
  onChangeText5,
  placeholder5,
  value6,
  onChangeText6,
  placeholder6,
  keyboardType3 = 'default',
  keyboardType4 = 'default',
  alertMessage,
  setAlertMesage,
}) => {
  const [secureEntry, setSecureEntry] = useState(true);
  const [secureEntry2, setSecureEntry2] = useState(true);

  //firstName Validation
  const firstNameValidation = () => {
    if (!value1) {
      setAlertMesage({
        ...alertMessage,
        firstName: 'Nama depan harus di isi !',
      });
    } else {
      setAlertMesage({
        ...alertMessage,
        firstName: '',
      });
    }
  };
  const LastNameValidation = () => {
    if (!value2) {
      setAlertMesage({
        ...alertMessage,
        LastName: 'Nama belakang harus di isi !',
      });
    } else {
      setAlertMesage({
        ...alertMessage,
        LastName: '',
      });
    }
  };

  //Number Validation
  const numberValidation = () => {
    if (!value3) {
      setAlertMesage({
        ...alertMessage,
        phoneNumber: 'Nomor Whatsapp Harus di isi !',
      });
    } else if (value3 && value3.length < 10) {
      setAlertMesage({
        ...alertMessage,
        phoneNumber: 'Nomor Whatsapp Harus lebih dari 10 !',
      });
    } else if (value3 && value3.length > 10) {
      setAlertMesage({
        ...alertMessage,
        phoneNumber: '',
      });
    }
  };

  //Email Validation
  const emailValidation = () => {
    let mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!value4) {
      setAlertMesage({
        ...alertMessage,
        email: 'Email Harus di isi !',
      });
    } else if (!value4.match(mailformat)) {
      setAlertMesage({
        ...alertMessage,
        email: 'Format Email Salah',
      });
    } else {
      setAlertMesage({
        ...alertMessage,
        email: '',
      });
    }
  };

  //password Validaiton
  const passwordValidation = () => {
    let passwordformat = /^(?=.*[0-9])(?=.*[A-Z]).{8,32}$/g;
    if (!value5) {
      setAlertMesage({
        ...alertMessage,
        password: 'Password Harus di isi !',
      });
    } else if (!value5.match(passwordformat)) {
      setAlertMesage({
        ...alertMessage,
        password:
          'Password minimal 8 karakter, mengandung angka dan huruf kapital minimal 1 !',
      });
    } else if (value5.match(passwordformat)) {
      setAlertMesage({
        ...alertMessage,
        password: '',
      });
    }
  };

  //confirm password Validation
  const confirmPasswordValidation = () => {
    if (!value6) {
      setAlertMesage({
        ...alertMessage,
        konfirmasiPassword: 'Konfirmasi Password Harus di isi !',
      });
    } else if (value6 !== value5) {
      setAlertMesage({
        ...alertMessage,
        konfirmasiPassword: 'Konfirmasi Password harus sama dengan Password !',
      });
    } else if (value6 === value5) {
      setAlertMesage({
        ...alertMessage,
        konfirmasiPassword: 'Matched',
      });
    } else {
      setAlertMesage({
        ...alertMessage,
        konfirmasiPassword: '',
      });
    }
  };

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardDouble}>
          <View style={{flexDirection: 'row'}}>
            {/* satu */}
            <View style={styles.wrapperKiri}>
              <Text style={{color: 'black'}}>{text1}</Text>
              <TextInput
                placeholder={placeholder1}
                value={value1}
                style={styles.TextInput}
                placeholderTextColor={COLOR.light}
                onChangeText={onChangeText1}
                secureTextEntry={secureTextEntry1}
                onBlur={firstNameValidation}
                color={COLOR.Black}
              />
            </View>

            {/* dua */}
            <View style={styles.wrapperKanan}>
              <Text style={{color: 'black'}}>{text2}</Text>
              <TextInput
                placeholder={placeholder2}
                value={value2}
                style={styles.TextInput}
                placeholderTextColor={COLOR.light}
                onChangeText={onChangeText2}
                secureTextEntry={secureTextEntry2}
                onBlur={LastNameValidation}
                color={COLOR.Black}
              />
            </View>
          </View>
          {/* Text alert Nama depan */}
          <View style={{flexDirection: 'row', marginBottom: moderateScale(4)}}>
            <View style={styles.wrapperKiri}>
              {alertMessage.firstName ? (
                <Text style={{fontSize: 11, color: 'red'}}>
                  {alertMessage.firstName}
                </Text>
              ) : null}
            </View>
            {/* Text alert Nama Belakang */}
            <View style={styles.wrapperKanan}>
              {alertMessage.LastName ? (
                <Text style={{fontSize: 11, color: 'red'}}>
                  {alertMessage.LastName}
                </Text>
              ) : null}
            </View>
          </View>
        </View>

        {/* single */}

        {/* Card Nomor Whatsapp */}
        <View style={styles.CardSingleColumn}>
          <Text style={{color: 'black'}}>{text3}</Text>
          <TextInput
            placeholder={placeholder3}
            value={value3}
            style={styles.TextInput}
            placeholderTextColor={COLOR.light}
            onChangeText={onChangeText3}
            secureTextEntry={secureTextEntry3}
            keyboardType={keyboardType3}
            onBlur={numberValidation}
            color={COLOR.Black}
          />
          {/* Text alert Phone Number */}
          {alertMessage.phoneNumber ? (
            <Text style={styles.TextAlert}>{alertMessage.phoneNumber}</Text>
          ) : null}
        </View>

        {/* Card Email */}
        <View style={styles.CardSingleColumn}>
          <Text style={{color: 'black'}}>{text4}</Text>
          <TextInput
            placeholder={placeholder4}
            value={value4}
            style={styles.TextInput}
            placeholderTextColor={COLOR.light}
            onChangeText={onChangeText4}
            secureTextEntry={secureTextEntry4}
            keyboardType={keyboardType4}
            onBlur={emailValidation}
            color={COLOR.Black}
          />
          {/* Text alert email */}
          {alertMessage.email ? (
            <Text style={styles.TextAlert}>{alertMessage.email}</Text>
          ) : null}
        </View>

        {/* Card Password */}
        <View style={styles.CardSingleColumn}>
          <Text style={{color: 'black'}}>{text5}</Text>
          <View style={styles.containerTextInput}>
            <TextInput
              placeholder={placeholder5}
              value={value5}
              style={styles.TextInputToggle}
              placeholderTextColor={COLOR.light}
              onChangeText={onChangeText5}
              secureTextEntry={secureEntry}
              onBlur={passwordValidation}
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
          {alertMessage.password ? (
            <Text style={styles.TextAlert}> {alertMessage.password}</Text>
          ) : null}
        </View>

        {/* Card confirm Password */}
        <View style={styles.CardSingleColumn}>
          <Text style={{color: 'black'}}>{text6}</Text>
          <View style={styles.containerTextInput}>
            <TextInput
              placeholder={placeholder6}
              value={value6}
              style={styles.TextInputToggle}
              placeholderTextColor={COLOR.light}
              onChangeText={onChangeText6}
              secureTextEntry={secureEntry2}
              onBlur={confirmPasswordValidation}
              color={COLOR.Black}
            />
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
          </View>
          {/* Text alert Konfirmasi Password */}

          {/* Alert Matched */}
          {alertMessage.konfirmasiPassword ? (
            alertMessage.konfirmasiPassword === 'Matched' ? (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLOR.green,
                    alignSelf: 'center',
                  }}>
                  {alertMessage.konfirmasiPassword}
                </Text>
              </View>
            ) : (
              <Text style={styles.TextAlert}>
                {alertMessage.konfirmasiPassword}
              </Text>
            )
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default CardSignUp;

const styles = StyleSheet.create({
  card: {
    paddingBottom: moderateScale(5),
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  CardSingleColumn: {
    marginTop: moderateScale(12),
    backgroundColor: COLOR.Wheat,
    marginHorizontal: moderateScale(2),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    width: widthPercentageToDP(90),
    alignItems: 'flex-start',
    alignSelf: 'center',
    borderRadius: 16,
    elevation: 1,
  },
  cardDouble: {
    marginTop: moderateScale(12),
    backgroundColor: COLOR.White,
    marginHorizontal: moderateScale(2),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(4),
    paddingHorizontal: moderateScale(16),
    width: widthPercentageToDP(90),
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
    height: moderateScale(38),
  },
  TextInputToggle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1,
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
  wrapperKiri: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  TextAlert: {
    color: 'red',
    fontSize: 12,
  },
  wrapperKanan: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: moderateScale(10),
  },
  wrapperKiri: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
