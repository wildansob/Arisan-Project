import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';

import {CardBuatArisan, CardBuatArisan2} from '../../Component/CardBuatArisan';
import {Modal2} from '../../Component/modal';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';

const EditArisan = () => {
  const {selectedArisan} = useSelector(state => state.globalReducer);
  const dataRender = selectedArisan?.arisan
    ? selectedArisan?.arisan
    : selectedArisan;
  const dispatch = useDispatch();
  const [namaArisan, setNamaArisan] = useState(dataRender?.title);
  const [jumlahArisan, setJumlahArisan] = useState(dataRender?.dues + '');
  const [isVisible, setIsVisible] = useState(false);
  const updateArisan = () => {
    setIsVisible(false);
    dispatch({
      type: 'EDIT_ARISAN',
      payload: {
        title: namaArisan,
        dues: jumlahArisan,
        lotteryDate: moment(dataRender.lotteryDate).format('DD-MM-YYYY'),
        paymentPeriod: dataRender.paymentPeriod,
      },
      id: selectedArisan.arisanId,
    });
  };
  return (
    <View>
      <ScrollView>
        <CardBuatArisan
          text="Nama Arisan"
          placeholder="Masukan nama arisan"
          btnText="Selanjutnya"
          value={namaArisan}
          onChangeText={text => setNamaArisan(text)}
        />
        <CardBuatArisan2
          placeholder1="Masukan Jumlah Iuran arisan"
          onPress={() => setIsVisible(true)}
          value1={jumlahArisan}
          onChangeText1={text => setJumlahArisan(text)}
          text1="Jumlah Iuran Arisan"
          text2="Periode Pembayaran"
          keyboardType1="phone-pad"
          btnText="Update Arisan"
          isEdit={true}
        />
      </ScrollView>

      {/* modal */}
      <Modal2
        isVisible={isVisible}
        headerText="Edit Arisan"
        konten1="Apakah kamu yakin mau mengedit arisan ini?"
        textButton1="Tidak"
        textButton2="Ya"
        onPress={() => setIsVisible(false)}
        onPress2={() => updateArisan()}
      />
    </View>
  );
};

export default EditArisan;
