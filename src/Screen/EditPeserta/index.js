import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {CardProfileOption} from '../../Component/CardProfileOption';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const EditPeserta = () => {
  const {selectedPeserta} = useSelector(state => state.globalReducer);
  console.log(selectedPeserta.id, 'selectedPeserta ID');

  const dispatch = useDispatch();

  //text Input

  const [name, setName] = useState(selectedPeserta?.name);
  const [phoneNumber, setPhoneNumber] = useState(selectedPeserta?.phoneNumber);
  const [email, setEmail] = useState(selectedPeserta?.email);

  const updatePeserta = () => {
    dispatch({
      type: 'EDIT_KONTAK',
      payload: {
        name,
        phoneNumber,
        email,
      },
      id: selectedPeserta.id,
    });
  };

  return (
    <ScrollView>
      <CardProfileOption
        value1={name}
        value2={selectedPeserta?.phoneNumber}
        value3={email}
        onChangeText1={text => setName(text)}
        onChangeText3={text => setEmail(text)}
        placeholder1="Masukan nama Peserta"
        placeholder2="Masukan nomor whatsapp"
        placeholder3="Masukan email"
        footNote="Catatan [*] nomor tidak dapat diubah"
        text1="Nama Peserta "
        text2="Nomor Whatsapp *"
        text3="Email"
        keyboardType2="phone-pad"
        BtnText="Edit Peserta"
        onPress={updatePeserta}
        editable={false}
      />
    </ScrollView>
  );
};

export default EditPeserta;
