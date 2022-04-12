import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import KocokArisan from '../../Assets/Images/kocokArisan.png';
import FastImage from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {CardPeserta2} from '../CardPeserta';

const CardKocokArisan = () => {
  dispatch = useDispatch();

  const {dataParticipant} = useSelector(state => state.DetailArisanReducer);
  const {arisanById} = useSelector(state => state.DetailArisanReducer);

  const kocokArisanFunction = () => {
    dispatch({
      type: 'KOCOK_ARISAN',
    });
  };

  const styles = StyleSheet.create({
    card: {
      backgroundColor: COLOR.White,
      paddingVertical: moderateScale(20),
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      paddingHorizontal: moderateScale(18),
    },
    card2: {
      paddingHorizontal: moderateScale(18),
      marginTop: moderateScale(10),
      backgroundColor: COLOR.White,
      paddingVertical: moderateScale(20),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      elevation: 1,
    },
    text: {
      color: COLOR.Primary,
      fontSize: 13,
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
    container: {
      borderBottomColor: COLOR.light,
      borderBottomWidth: 0.5,
      flexDirection: 'row',
      paddingBottom: moderateScale(10),
      marginBottom: moderateScale(12),
    },
  });
  return (
    <>
      <View style={styles.card}>
        <View style={styles.container}>
          <View style={styles.wrapperKiri}>
            <Text style={{fontWeight: 'bold', color: COLOR.Black}}>
              {arisanById.title}
            </Text>
          </View>
        </View>
        {/* konten */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: moderateScale(8),
          }}>
          <View style={styles.wrapperKiri}>
            <Text style={styles.text}>Periode Undian</Text>
            <Text style={{color: 'black'}}> {arisanById.lotteryDate}</Text>
          </View>
          <View style={styles.wrapperKanan}>
            <Text style={styles.text}>Nilai Arisan</Text>
            <Text style={{color: 'black'}}>Rp {arisanById.balance}</Text>
          </View>
        </View>
      </View>
      {/* card2 */}
      {/* header */}
      <View style={styles.card2}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View style={styles.container}>
              <Text style={{fontWeight: 'bold', color: COLOR.Black}}>
                Kocok Arisan
              </Text>
            </View>
          </View>
        </View>
        {/* konten */}
        <View>
          <TouchableOpacity onPress={kocokArisanFunction}>
            <FastImage
              style={{width: moderateScale(180), height: moderateScale(180)}}
              source={KocokArisan}
              resizeMode={FastImage.resizeMode.cover}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginVertical: moderateScale(14),
          paddingHorizontal: moderateScale(12),
          flexDirection: 'row',
        }}>
        {/* konten */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingLeft: moderateScale(8),
          }}>
          <Text style={{fontWeight: 'bold', color: COLOR.Black}}>
            Daftar Peserta
          </Text>
        </View>
      </View>
      {/* daftar Peserta */}
      <View>
        <CardPeserta2 dataParticipant={dataParticipant} />
      </View>
    </>
  );
};

export default CardKocokArisan;
