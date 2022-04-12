import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import ImageNull from '../../Component/imageNull';
import ButtonPrimary from '../../Component/Button';
import {moderateScale} from 'react-native-size-matters';
import {navigate} from '../../Helper/navigate';
import {CardPeserta} from '../../Component/CardPeserta';
import {useSelector} from 'react-redux';

const ListPeserta = () => {
  const {dataKontak} = useSelector(state => state.listPesertaReducer);

  return (
    <View style={{flex: 1, paddingTop: moderateScale(16)}}>
      <ScrollView>
        <View>
          {dataKontak.length > 0 ? (
            <CardPeserta dataKontak={dataKontak} />
          ) : (
            <ImageNull
              marginTop={60}
              text="pilih tombol + untuk menambahkan Peserta"
            />
          )}
        </View>
      </ScrollView>
      {/* footer */}
      <View style={styles.footerContainer} />
      <View style={styles.footerButton}>
        <ButtonPrimary
          onPress={() => {
            navigate('Tambah Peserta');
          }}
          borderRadius={40}
          paddingHorizontal={22}
          text="+ Tambah Peserta"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {flex: 1},
  footerButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: moderateScale(28),
  },
});

export default ListPeserta;
