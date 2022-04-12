import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import ButtonPrimary from '../Button';
import {navigate} from '../../Helper/navigate';
import OptionsMenu from 'react-native-options-menu';

//icon
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {color} from 'react-native-elements/dist/helpers';

const CardArisan = ({
  Aktif = COLOR.green,
  TidakAktif = COLOR.red,
  dataArisan = [],
}) => {
  const dispatch = useDispatch();
  const deleteArisan = id => {
    dispatch({type: 'DELETE_ARISAN', payload: id});
  };
  const editArisan = data => {
    dispatch({type: 'SET_SELECTED_ARISAN', payload: data});
    navigate('Edit Arisan');
  };

  const detailArisan = data => {
    dispatch({type: 'DETAIL_ARISAN', payload: data});
    dispatch({type: 'GET_PARTICIPANT'});
    navigate('Detail Arisan');
  };

  const [isVisible, setVisible] = useState(true);
  const toggleHide = () => {
    setVisible(!isVisible);
  };
  return dataArisan.map(data => {
    const styles = StyleSheet.create({
      container: {
        borderBottomColor: COLOR.light,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        paddingBottom: moderateScale(10),
        marginBottom: moderateScale(12),
      },
      card: {
        marginTop: moderateScale(10),
        backgroundColor: COLOR.White,
        marginHorizontal: moderateScale(22),
        paddingVertical: moderateScale(16),
        paddingHorizontal: moderateScale(16),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        flexDirection: 'column',
        borderLeftColor: `${data.arisan.status ? Aktif : TidakAktif}`,
        borderLeftWidth: moderateScale(4),
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
      Status: {
        color: `${data.arisan.status ? Aktif : TidakAktif}`,
      },
    });

    return (
      <TouchableWithoutFeedback key={data.arisanId} onPress={toggleHide}>
        <View style={styles.card}>
          <View style={styles.container}>
            <View style={styles.wrapperKanan}>
              <Text style={{fontWeight: 'bold', color: COLOR.Black}}>
                {data.arisan.title}
              </Text>
            </View>
            <View>
              <OptionsMenu
                customButton={
                  <Entypo
                    name="dots-three-horizontal"
                    size={moderateScale(20)}
                    color={COLOR.Black}
                  />
                }
                destructiveIndex={1}
                options={['Edit Arisan', 'Hapus Arisan']}
                actions={[
                  () => editArisan(data),
                  () => {
                    deleteArisan(data.arisanId);
                  },
                ]}
              />
            </View>
          </View>
          {/* konten */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={styles.wrapperKiri}>
              <Text style={styles.text}>Jumlah Iuran Arisan</Text>
              <Text style={{color: 'black'}}>Rp {data.arisan.dues}</Text>
            </View>
            <View style={styles.wrapperKanan}>
              <Text style={styles.text}>Dana Arisan Terkumpul</Text>
              <Text style={{color: 'black'}}>Rp {data.arisan.balance}</Text>
            </View>
          </View>

          {/* kontenhide */}
          {isVisible ? null : (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: moderateScale(10),
                  borderBottomWidth: 0.5,
                  borderBottomColor: COLOR.light,
                  paddingBottom: moderateScale(30),
                }}>
                <View style={styles.wrapperKiri}>
                  <Text style={styles.text}>Jumlah Anggota</Text>
                  <Text style={{color: 'black'}}>
                    {data.arisan.totalParticipant}
                  </Text>
                  <View style={{marginTop: moderateScale(10)}}>
                    <Text style={styles.text}>Periode Pembayaran</Text>
                    <Text style={{color: 'black'}}>
                      {data.arisan.paymentPeriod}
                    </Text>
                  </View>
                </View>
                <View style={styles.wrapperKanan}>
                  <Text style={styles.text}>Periode Undian</Text>
                  <Text style={{color: 'black'}}>
                    {data.arisan.lotteryDate}
                  </Text>
                  <View style={{marginTop: moderateScale(10)}}>
                    <Text style={styles.text}>Periode Pembayaran</Text>
                    <Text style={styles.Status}>
                      {data.arisan.status ? 'Aktif' : 'Tidak Aktif'}
                    </Text>
                  </View>
                </View>
              </View>
              <ButtonPrimary
                text={'Lihat Detail Arisan'}
                paddingHorizontal={60}
                marginHorizontal={0}
                marginTop={moderateScale(14)}
                onPress={() => detailArisan(data)}
              />
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  });
};

export default CardArisan;
