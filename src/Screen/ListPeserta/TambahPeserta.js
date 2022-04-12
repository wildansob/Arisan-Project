import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {CardProfileOption} from '../../Component/CardProfileOption';
import {useDispatch} from 'react-redux';

const TambahPeserta = () => {
  const dispatch = useDispatch();

  //text Input

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const CreateArisan = () => {
    dispatch({
      type: 'CREATE_KONTAK',
      payload: {
        name,
        phoneNumber,
        email,
      },
    });
  };

  return (
    <ScrollView>
      <CardProfileOption
        value1={name}
        value2={phoneNumber}
        value3={email}
        onChangeText1={text => setName(text)}
        onChangeText2={text => setPhoneNumber(text)}
        onChangeText3={text => setEmail(text)}
        placeholder1="Masukan nama Peserta"
        placeholder2="Masukan nomor whatsapp"
        placeholder3="Masukan email"
        footNote="Catatan [*] wajib diisi"
        text1="Nama Peserta *"
        text2="Nomor Whatsapp *"
        text3="Email"
        keyboardType2="phone-pad"
        keyboardType3="email-address"
        onPress={CreateArisan}
        BtnText="Simpan"
      />
    </ScrollView>
  );
};

export default TambahPeserta;
