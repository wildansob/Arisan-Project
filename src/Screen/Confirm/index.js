import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {navigate} from '../../Helper/navigate';
import {Modal3, Modal2} from '../../Component/modal';
import {useDispatch, useSelector} from 'react-redux';

const Confirm = ({route}) => {
  const dispatch = useDispatch();

  const {selectedStatus} = useSelector(state => state.globalReducer);

  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const HapusPeserta = id => {
    dispatch({type: 'DELETE_PARTICIPANT', id: id});
  };

  const UpdateStatus = id => {
    dispatch({
      type: 'EDIT_STATUS_PEMBAYARN',
      id: id,
      payload: {
        havePaid: selectedStatus,
      },
    });
  };

  const {data} = route.params;
  return (
    <>
      {/* modal */}
      <Modal3
        isVisible={isVisible}
        headerText={data.name}
        noWatsapp={data.phoneNumber}
        IuranBelumLunas={data.dues}
        textButton1="Tidak"
        textButton2="Ya"
        onPressDelete={() => setIsVisible2(true)}
        onPress={() => navigate('Detail Arisan')}
        onPress2={() => {
          UpdateStatus(data.id);
        }}
      />
      {/* modal */}
      <Modal2
        isVisible={isVisible2}
        headerText="Hapus Peserta"
        konten1="Apakah kamu yakin menghapus peserta ini?"
        textButton1="Tidak"
        textButton2="Ya"
        onPress={() => setIsVisible2(false)}
        onPress2={() => HapusPeserta(data.id)}
      />
    </>
  );
};

export default Confirm;

const styles = StyleSheet.create({});
