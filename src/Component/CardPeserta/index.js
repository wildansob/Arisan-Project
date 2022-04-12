import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import FotoProfile from '../FotoProfile';
import {Modal3, Modal2} from '../modal';
import {navigate} from '../../Helper/navigate';
import OptionsMenu from 'react-native-options-menu';
import {useSelector, useDispatch} from 'react-redux';

//icon
import Entypo from 'react-native-vector-icons/Entypo';

const CardPeserta = ({CardColor = COLOR.Primary, dataKontak}) => {
  const dispatch = useDispatch();

  const editPeserta = data => {
    dispatch({type: 'SET_SELECTED_PESERTA', payload: data});
    navigate('Edit Peserta');
  };

  const DeleteKontak = id => {
    dispatch({
      type: 'DELETE_KONTAK',
      payload: id,
    });
  };

  const styles = StyleSheet.create({
    card: {
      marginBottom: moderateScale(10),
      backgroundColor: COLOR.White,
      marginHorizontal: moderateScale(22),
      paddingVertical: moderateScale(4),
      paddingHorizontal: moderateScale(14),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      flexDirection: 'column',
      borderLeftColor: CardColor,
      borderLeftWidth: moderateScale(4),
      elevation: 1,
    },
    wrapperKiri: {
      flex: 1,
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
  });
  return dataKontak.map(data => {
    return (
      <View key={data.id} style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
          }}>
          <View style={styles.wrapperKiri}>
            <FotoProfile size="medium" source={data.image} />
            <View style={{marginLeft: moderateScale(8)}}>
              <Text style={{fontWeight: 'bold', color: COLOR.Black}}>
                {data.name}
              </Text>
              <View style={{flexDirection: 'row', marginTop: moderateScale(6)}}>
                <Text style={{fontSize: 10, color: COLOR.Black}}>
                  {data.phoneNumber}
                </Text>
                <Text
                  style={{
                    marginHorizontal: moderateScale(6),
                    fontSize: 10,
                    color: COLOR.Black,
                  }}>
                  |
                </Text>
                <Text style={{fontSize: 10, color: COLOR.Black}}>
                  {data.email}
                </Text>
              </View>
            </View>
          </View>
          {/* kanan */}
          <View>
            <OptionsMenu
              customButton={
                <Entypo
                  name="dots-three-horizontal"
                  size={moderateScale(16)}
                  color={COLOR.Black}
                />
              }
              destructiveIndex={1}
              options={['Edit Peserta', 'Hapus Peserta']}
              actions={[
                () => editPeserta(data),
                () => {
                  DeleteKontak(data.id);
                },
              ]}
            />
          </View>
        </View>
      </View>
    );
  });
};

const CardPeserta2 = ({
  onPress,
  onPressModal2,
  CardColor = COLOR.Primary,
  justifyContent = 'center',
  alignItems = 'center',
  Aktif = COLOR.green,
  TidakAktif = COLOR.red,
  dataParticipant,
}) => {
  return dataParticipant.map(data => {
    const styles = StyleSheet.create({
      card: {
        marginBottom: moderateScale(10),
        backgroundColor: COLOR.White,
        marginHorizontal: moderateScale(22),
        paddingVertical: moderateScale(4),
        paddingHorizontal: moderateScale(14),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,

        flexDirection: 'column',
        borderLeftColor: CardColor,
        borderLeftWidth: moderateScale(4),
        elevation: 1,
      },
      wrapperKanan: {
        marginLeft: moderateScale(14),
        justifyContent: 'center',
      },
      wrapperKiri: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
      },
      indicator: {
        backgroundColor: `${data.havePaid ? Aktif : TidakAktif}`,
        width: moderateScale(120),
        flexDirection: 'row',
        height: moderateScale(30),
        borderRadius: 16,
        justifyContent,
        alignItems,
      },
    });
    return (
      <View key={data.id}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigate('Confirm', {data});
          }}>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={styles.wrapperKiri}>
                <FotoProfile size="medium" source={data.image} />
                <View style={{marginLeft: moderateScale(8)}}>
                  <Text style={{fontWeight: 'bold', color: COLOR.Black}}>
                    {data.name}
                  </Text>
                  <View
                    style={{flexDirection: 'row', marginTop: moderateScale(6)}}>
                    <Text style={{fontSize: 10, color: COLOR.Black}}>
                      {data.phoneNumber}
                    </Text>
                  </View>
                </View>
              </View>
              {/* kanan */}
              <View style={styles.wrapperKanan}>
                <View style={styles.indicator}>
                  <Text style={{color: COLOR.White}}>
                    {data.havePaid ? 'Lunas' : 'Belum Lunas'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  });
};

export {CardPeserta, CardPeserta2};
