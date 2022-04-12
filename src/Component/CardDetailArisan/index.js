import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import ButtonPrimary from '../Button';
import {CardPeserta2} from '../CardPeserta';
import OptionsMenu from 'react-native-options-menu';
import {useSelector} from 'react-redux';

//icon
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CardDetailArisan = ({
  onPress1,
  onPress2,
  idArisan,
  title,
  dues,
  balance,
  participant,
  date,
  paymentPeriode,
  status,
  Aktif = COLOR.green,
  TidakAktif = COLOR.red,
}) => {
  const {dataParticipant} = useSelector(state => state.DetailArisanReducer);
  const styles = StyleSheet.create({
    card: {
      backgroundColor: COLOR.White,
      paddingVertical: moderateScale(20),
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      paddingHorizontal: moderateScale(18),
    },
    card2: {
      marginTop: moderateScale(10),
      backgroundColor: COLOR.White,
      paddingBottom: moderateScale(16),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      flexDirection: 'row',
      elevation: 1,
    },
    text: {
      color: COLOR.Primary,
      fontSize: 13,
    },
    wrapperKanan: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    wrapperKiri: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    container: {
      borderBottomColor: COLOR.light,
      borderBottomWidth: 0.5,
      flexDirection: 'row',
      paddingBottom: moderateScale(10),
      marginBottom: moderateScale(12),
    },
    Status: {
      color: `${status ? Aktif : TidakAktif}`,
    },
  });
  return (
    <>
      <View style={styles.card}>
        <View style={styles.container}>
          <View style={styles.wrapperKiri}>
            <Text style={{fontWeight: 'bold', color: COLOR.Black}}>
              {title}
            </Text>
          </View>
          <View>
            <Text style={{color: 'black'}}>ID : {idArisan}</Text>
          </View>
        </View>
        {/* konten */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: moderateScale(8),
          }}>
          <View style={styles.wrapperKiri}>
            <Text style={styles.text}>Jumlah Iuran Arisan</Text>
            <Text style={{color: 'black'}}>Rp {dues}</Text>
          </View>
          <View style={styles.wrapperKanan}>
            <Text style={styles.text}>Dana Arisan Terkumpul</Text>
            <Text style={{color: 'black'}}>Rp {balance}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: moderateScale(10),
            paddingBottom: moderateScale(20),
            paddingHorizontal: moderateScale(8),
          }}>
          <View style={styles.wrapperKiri}>
            <Text style={styles.text}>Jumlah Anggota</Text>
            <Text style={{color: 'black'}}>{participant}</Text>
            <View style={{marginTop: moderateScale(10)}}>
              <Text style={styles.text}>Periode Pembayaran</Text>
              <Text style={{color: 'black'}}>{paymentPeriode}</Text>
            </View>
          </View>
          <View style={styles.wrapperKanan}>
            <Text style={styles.text}>Periode Undian</Text>
            <Text style={{color: 'black'}}>{date}</Text>
            <View style={{marginTop: moderateScale(10)}}>
              <Text style={styles.text}>Periode Pembayaran</Text>
              <Text style={styles.Status}>
                {status ? 'Aktif' : 'Tidak Aktif'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* card2 button */}
      <View style={styles.card2}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingLeft: moderateScale(14),
            }}>
            <ButtonPrimary
              onPress={onPress1}
              text="History Arisan"
              fontSize={14}
              borderWidth={1}
              borderColor={COLOR.Blue}
              backgroundColor={COLOR.Blue}
              marginHorizontal={6}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingRight: moderateScale(14),
            }}>
            <ButtonPrimary
              onPress={onPress2}
              fontSize={14}
              text="Kocok Arisan"
              borderColor={COLOR.Secondary}
              backgroundColor={COLOR.Secondary}
              marginHorizontal={6}
            />
          </View>
        </View>
      </View>
      {/* Daftar peserta */}
      <View
        style={{
          marginVertical: moderateScale(14),
          paddingHorizontal: moderateScale(12),
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingLeft: moderateScale(14),
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: COLOR.Black}}>
            Daftar Peserta
          </Text>
        </View>
        <View style={{marginRight: moderateScale(18)}}>
          <MaterialIcons name="filter-list" size={22} color={COLOR.Black} />
        </View>
      </View>
      {/* isi peserta */}
      <View>
        <CardPeserta2 dataParticipant={dataParticipant} />
      </View>
    </>
  );
};

export default CardDetailArisan;
