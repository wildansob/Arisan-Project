import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {CardProfileOption2} from '../../Component/CardProfileOption';
import {useDispatch, useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

const EditProfile = () => {
  //textInput
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState({uri: null});

  const dispatch = useDispatch();
  const data = useSelector(state => state?.loginReducer?.dataProfile);

  useEffect(() => {
    setPhoneNumber(data.phoneNumber);
    setEmail(data.email);
    setFirstName(data.firstName);
    setLastName(data.lastName);
  }, []);

  const submitEditProfile = () => {
    if (
      email.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      image.uri
    ) {
      dispatch({
        type: 'EDIT_PROFILE',
        payload: {
          firstName,
          lastName,
          phoneNumber,
          email,
        },
      });

      dispatch({
        type: 'EDIT_FOTO_PROFILE',
        payload: image,
      });
    }
    if (image.uri) {
      dispatch({
        type: 'EDIT_FOTO_PROFILE',
        payload: image,
      });
    }
    if (email.length > 0 && firstName.length > 0 && lastName.length > 0) {
      dispatch({
        type: 'EDIT_PROFILE',
        payload: {
          firstName,
          lastName,
          phoneNumber,
          email,
        },
      });
    }
  };

  const takeImage = async () => {
    const res = await launchImageLibrary({
      mediaType: 'photo',
      title: 'Select Image',
    });
    console.log(res, 'photo');
    setImage(res.assets[0]);
  };

  return (
    <View>
      <CardProfileOption2
        value1={firstName}
        value2={lastName}
        value3={phoneNumber}
        value4={email}
        onChangeText1={text => setFirstName(text)}
        onChangeText2={text => setLastName(text)}
        onChangeText4={text => setEmail(text)}
        placeholder1="Nama Depan"
        placeholder2="Nama Belakang"
        placeholder3="Masukan Nomor Whatsapp"
        placeholder4="Masukan Email"
        marginVerticalFoot={0}
        text1="Nama Depan"
        text2="Nama Belakang"
        text3="Nomor whatsapp"
        text4="Email"
        keyboardType3="phone-pad"
        keyboardType4="email-address"
        onPress={submitEditProfile}
        ImageLibrary={takeImage}
        pickedImage={image.uri}
        editable={false}
      />
    </View>
  );
};

export default EditProfile;
