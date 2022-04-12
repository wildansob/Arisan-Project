import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import ButtonPrimary from '../../Component/Button';
import {navigate} from '../../Helper/navigate';
import ImageNull from '../../Component/imageNull';
import {useSelector, useDispatch} from 'react-redux';
import CheckBoxPeserta from '../../Component/CheckboxPeserta';

const TambahPeseta = () => {
  const dispatch = useDispatch();
  const {dataKontak} = useSelector(state => state.listPesertaReducer);
  const {participantId} = useSelector(state => state.DetailArisanReducer);

  const addParticipant = () => {
    dispatch({
      type: 'ADD_PARTICIPANT',
      payload: {
        contactId: participantId,
      },
    });
  };

  return (
    <>
      <View style={styles.card}>
        {/* list1 */}
        {dataKontak.length > 0 ? (
          <CheckBoxPeserta dataKontak={dataKontak} />
        ) : (
          <ImageNull
            marginTop={60}
            text="Silahkan Tambahkan Kontak Terlebih Dahulu"
          />
        )}
      </View>
      {/* footer */}
      <View style={styles.footerContainer} />
      <View style={styles.footerButton}>
        <ButtonPrimary
          onPress={addParticipant}
          paddingHorizontal={22}
          text="Simpan"
        />
      </View>
    </>
  );
};

export default TambahPeseta;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLOR.White,
    paddingVertical: moderateScale(10),
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal: moderateScale(18),
  },
  wrapperKanan: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  wrapperKiri: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: moderateScale(16),
  },
  footerContainer: {flex: 1},
  footerButton: {
    marginBottom: moderateScale(22),
  },
});
